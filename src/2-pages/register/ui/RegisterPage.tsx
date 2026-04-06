import { RegisterForm } from "features/registerForm/RegisterForm"

import s from "./RegisterPage.module.css"

export const RegisterPage = () => {
  return (
    <div className={s.root}>
      <RegisterForm />
    </div>
  )
}
