import { z } from "zod"

const NON_EMPTY_MESSAGE = "Поле обязательно для заполнения"

export const validationSchema = z
  .object({
    userName: z.string().nonempty(NON_EMPTY_MESSAGE),
    email: z
      .string()
      .nonempty(NON_EMPTY_MESSAGE)
      .email({ error: "Невалидный email" }),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
    confirmPassword: z.string().nonempty(NON_EMPTY_MESSAGE),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают!",
        path: ["confirmPassword"],
      })
    }
  })
