import { Route, Routes } from "react-router"

import { TaskPage } from "2-pages/tasks"
import { AuthPage } from "2-pages/auth"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  )
}
