import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router"

export const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Link component={NavLink} to="/" variant="button">
          <Typography variant="h6" component="h6">
            Home
          </Typography>
        </Link>
        <Box component="nav" sx={{ ml: "auto" }}>
          <Link component={NavLink} to="auth" variant="button">
            <Typography>Регистрация</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
