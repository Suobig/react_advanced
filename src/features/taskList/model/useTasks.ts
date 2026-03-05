import { useState } from "react"

import { type Task } from "entities/taskCard"

export type Filter = "all" | "completed" | "incomplete"

type UseTasksType = {
  tasks: Task[]
  filter: Filter
  setFilter: (f: Filter) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}

export function useTasks(initial: Task[]): UseTasksType {
  const [tasks, setTasks] = useState<Task[]>(initial)
  const [filter, setFilter] = useState<Filter>("all")

  function removeTask(id: string): void {
    setTasks((prevState) => prevState.filter((el) => el.id !== id))
  }

  function toggleTask(id: string): void {
    setTasks((prevState) => prevState.map(task => {
      if (task.id !== id) {
        return task
      }

      return {
        ...task,
        completed: !task.completed
      }
    }))
  }

  return { tasks, filter, setFilter, removeTask, toggleTask }
}
