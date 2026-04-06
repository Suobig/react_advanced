import { Controller, useFormContext } from "react-hook-form"
import { type FormValues } from "../model/types"
import { TextField } from "@mui/material"

export const Email = () => {
  const { control } = useFormContext<FormValues>()

  return (
    <Controller
      control={control}
      name="email"
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          label="Email"
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}
