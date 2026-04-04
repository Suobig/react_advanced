import { Route, Routes } from "react-router"

import { TaskPage } from "pages/tasks"
import { AuthPage } from "pages/auth"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  )
}
