import { useMemo } from "react"
import { Alert, CircularProgress } from "@mui/material"

import { TaskList, useTasks } from "4-features/taskList"
import { TaskFilters } from "4-features/taskFilters/ui/TaskFilters"
import type { Filter } from "5-entities/taskFilter"
import { useGetTasksQuery } from "5-entities/taskCard/api/taskApi"

import s from "./TaskWidget.module.css"

const FILTER_CONFIG: { value: Filter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "completed", label: "Завершенные" },
  { value: "incomplete", label: "Незавершенные" },
]

export function TaskWidget() {
  const { data: fetchedTasks, isLoading, error } = useGetTasksQuery()

  const tasks = useMemo(() => {
    if (!fetchedTasks) {
      return []
    } else {
      return fetchedTasks
    }
  }, [fetchedTasks])

  const { filter, setFilter, filteredTasks, removeTask, toggleTask } =
    useTasks(tasks)

  if (isLoading) {
    return <CircularProgress className={s.loader} size="60px" />
  }

  if (error) {
    return <Alert severity="error">Error loading tasks</Alert>
  }

  return (
    <div className={s.root}>
      <TaskFilters
        filters={FILTER_CONFIG}
        filter={filter}
        onChange={setFilter}
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
