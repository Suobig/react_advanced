import { Controller, useFieldArray, useFormContext } from "react-hook-form"
import { Box, Button, IconButton, TextField } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"

import { type FormValues } from "../model/types"

export const Socials = () => {
  const { control } = useFormContext<FormValues>()
  const {
    fields: socialValues,
    append: socialAppend,
    remove: socialRemove,
  } = useFieldArray<FormValues>({
    name: "social",
  })

  return (
    <>
      {socialValues.map((social, index) => (
        <Box
          key={social.id}
          sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
        >
          <Controller
            name={`social.${index}.value`}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label={`Ссылка ${index + 1}`}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <IconButton
            onClick={() => socialRemove(index)}
            sx={{ ml: 2, mt: "12px" }}
            color="error"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        onClick={() => socialAppend({ value: "" })}
        startIcon={<AddIcon />}
      >
        Добавить ссылку
      </Button>
    </>
  )
}
