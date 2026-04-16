import { Box, Button } from "@mui/material"
import { useRef } from "react"

export const FocusTracker = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const focusCounter = useRef<number>(0)

  const handleClick = () => {
    inputRef?.current?.focus()
  }

  const handleFocus = () => {
    const focusCount = focusCounter.current + 1
    /* eslint-disable-next-line react-hooks/refs */
    console.log("Focus changed:", focusCount)
    focusCounter.current = focusCount
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <input ref={inputRef} onFocusCapture={handleFocus} placeholder="первый" />
      <input onFocusCapture={handleFocus} placeholder="второй" />
      <Button variant="contained" onClick={handleClick}>
        Фокус на первом
      </Button>
    </Box>
  )
}
