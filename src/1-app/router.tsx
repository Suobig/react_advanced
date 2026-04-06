import { Route, Routes } from "react-router"

import { TaskPage } from "2-pages/tasks"
import { RegisterPage } from "2-pages/register"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path="auth" element={<RegisterPage />} />
    </Routes>
  )
}
