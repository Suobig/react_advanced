import { Controller, useFormContext } from "react-hook-form"
import { type FormValues } from "../model/types"
import { TextField } from "@mui/material"

export const PasswordConfirmation = () => {
  const { control } = useFormContext<FormValues>()

  return (
    <Controller
      control={control}
      name="confirmPassword"
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          label="Повторите пароль"
          variant="outlined"
          type="password"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}
