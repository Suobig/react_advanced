import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material"

export const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Link href="/" variant="button">
          <Typography variant="h6" component="h6">
            Home
          </Typography>
        </Link>
        <Box component="nav" sx={{ ml: "auto" }}>
          <Link href="auth" variant="button">
            <Typography>Войти</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
