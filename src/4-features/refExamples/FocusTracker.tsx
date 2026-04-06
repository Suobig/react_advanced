import { Box, Button } from "@mui/material"
import { useRef } from "react"

export const FocusTracker = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const focusCounter = useRef<number>(0)

  const handleClick = () => {
    inputRef?.current?.focus()
  }

  const handleFocus = () => {
    /* eslint-disable-next-line react-hooks/refs */
    console.log("Focus changed:", focusCounter.current)
    focusCounter.current += 1
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <input ref={inputRef} onFocus={handleFocus} placeholder="первый" />
      <input onFocus={handleFocus} placeholder="второй" />
      <Button variant="contained" onClick={handleClick}>
        Фокус на первом
      </Button>
    </Box>
  )
}
