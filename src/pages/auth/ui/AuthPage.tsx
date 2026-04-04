import { Typography } from "@mui/material"

import s from "./AuthPage.module.css"

export const AuthPage = () => {
  return (
    <div className={s.root}>
      <Typography variant="h4" component="h4">
        Авторизация:
      </Typography>
    </div>
  )
}
