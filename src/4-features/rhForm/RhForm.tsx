import { useCallback, useMemo } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { createInitialValues } from "./model/initialValues"
import { type FormValues } from "./model/types"
import { validationSchema } from "./model/validator"
import { useNavigate } from "react-router"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { UserName, Email, Password, PasswordConfirmation } from "./ui"
import { Socials } from "./ui/Socials"

export const RhfForm = () => {
  const navigate = useNavigate()

  const initialValues = useMemo(() => createInitialValues(), [])

  const form = useForm<FormValues>({
    defaultValues: initialValues,
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  })

  const { handleSubmit, formState } = form

  const submitHandler = useCallback(() => {
    alert("Submitted")
    navigate("/")
  }, [navigate])

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexFlow: "column",
        }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Авторизация
        </Typography>
        <Container maxWidth="sm" sx={{ width: "100%" }}>
          <UserName />
          <Email />
          <Password />
          <PasswordConfirmation />
          <Divider variant="middle" sx={{ mb: 2 }} />
          <Socials />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              loading={formState.isSubmitting}
              disabled={formState.isSubmitting}
              type="submit"
            >
              Отправить
            </Button>
          </Box>
        </Container>
      </Box>
    </FormProvider>
  )
}
