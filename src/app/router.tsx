import { Route, Routes } from "react-router"

import { TaskPage } from "pages/tasks"

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<TaskPage />} />
    </Routes>
  )
}
