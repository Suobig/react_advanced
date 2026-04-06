import { Route, Routes } from "react-router"

import { TaskPage } from "pages/tasks"
import { RegisterPage } from "pages/register"
import { RefsPage } from "pages/refs"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path="auth" element={<RegisterPage />} />
      <Route path="refs" element={<RefsPage />} />
    </Routes>
  )
}
