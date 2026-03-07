import type { Task } from "entities/taskCard"
import { TaskList, useTasks, type Filter } from "features/taskList"
import { TaskFilters } from "features/taskFilters/ui/TaskFilters"

import s from "./TaskWidget.module.css"

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Архитектура: вебинар", completed: true },
  {
    id: "2",
    title: "Архитектура React приложений: практика",
    completed: false,
  },
  { id: "3", title: "Оптимизация: вебинар", completed: true },
  { id: "4", title: "Оптимизация: практика", completed: false },
  { id: "5", title: "Redux: вебинар", completed: true },
  { id: "6", title: "Redux: практика", completed: false },
]

const FILTER_CONFIG: { value: Filter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "completed", label: "Завершенные" },
  { value: "incomplete", label: "Незавершенные" },
]

export function TaskWidget() {
  const { filter, setFilter, filteredTasks, removeTask, toggleTask } =
    useTasks(INITIAL_TASKS)

  function handleChangeFilter(newFilter: Filter | null): void {
    if (newFilter !== null) {
      setFilter(newFilter)
    }
  }

  return (
    <div className={s.root}>
      <TaskFilters
        filters={FILTER_CONFIG}
        filter={filter}
        onChange={handleChangeFilter}
      />
      <TaskList
        className={s.list}
        tasks={filteredTasks}
        onDeleteTask={removeTask}
        onToggleTask={toggleTask}
      />
    </div>
  )
}
