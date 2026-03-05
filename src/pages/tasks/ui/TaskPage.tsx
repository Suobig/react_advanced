
import { TaskList } from "features/taskList"

import s from "./TaskPage.module.css"

export function TaskPage() {
  return (
    <div className={s.root}>
      <h1 className={s.header}>ToDo List</h1>
      <TaskList />
    </div>
  )
}
