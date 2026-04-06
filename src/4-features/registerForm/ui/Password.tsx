import { Controller, useFormContext } from "react-hook-form"
import { type FormValues } from "../model/types"
import { TextField } from "@mui/material"

export const Password = () => {
  const { control } = useFormContext<FormValues>()

  return (
    <Controller
      control={control}
      name="password"
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          label="Пароль"
          variant="outlined"
          type="password"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}
