import { Route, Routes } from "react-router"

import { Home } from "pages/home/Home"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}
