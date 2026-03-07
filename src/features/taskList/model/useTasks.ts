import { useCallback, useMemo, useState } from "react"

import { type Task } from "entities/taskCard"
import { unionGuard } from "shared/lib/typescriptHelpers"

export type Filter = "all" | "completed" | "incomplete"

type UseTasksType = {
  tasks: Task[]
  filter: Filter
  setFilter: (f: Filter) => void
  filteredTasks: Task[]
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}

export function useTasks(initial: Task[]): UseTasksType {
  const [tasks, setTasks] = useState<Task[]>(initial)
  const [filter, setFilter] = useState<Filter>("all")

  const removeTask = useCallback((id: string) => {
    setTasks((prevState) => prevState.filter((el) => el.id !== id))
  }, [])

  const toggleTask = useCallback((id: string) => {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id !== id) {
          return task
        }

        return {
          ...task,
          completed: !task.completed,
        }
      }),
    )
  }, [])

  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, filter),
    [tasks, filter],
  )

  return { tasks, filter, setFilter, filteredTasks, removeTask, toggleTask }
}

function getFilteredTasks(tasks: Task[], filter: Filter): Task[] {
  if (filter === "all") {
    return tasks
  }

  if (filter === "completed" || filter === "incomplete") {
    const isFilterCompleted = filter === "completed"
    return tasks.filter((el) => el.completed === isFilterCompleted)
  }

  //Защита от неполного перебора
  unionGuard(filter, "Обработаны не все варианты фильтра")
}
