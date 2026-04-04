import { AppRoutes } from "./router"
import { Header } from "widgets"

import s from "./App.module.css"

function App() {
  return (
    <div className={s.root}>
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
