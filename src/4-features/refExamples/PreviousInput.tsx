import { Box, TextField, Typography } from "@mui/material"
import { useState, type ChangeEventHandler } from "react"
import { usePrevValue } from "shared/lib/usePrevValue"

export const PreviousInput = () => {
  const [value, setValue] = useState("")
  const prevValue = usePrevValue(value)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5">Прошлый ввод</Typography>
      <TextField value={value} onChange={handleChange} label="Ввод" />
      <Typography>прошлый ввод: {prevValue}</Typography>
    </Box>
  )
}
