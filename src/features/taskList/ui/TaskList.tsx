import  { type Task, TaskCard } from "entities/taskCard"
import { useTasks } from "../model/useTasks"

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Архитектура: вебинар', completed: true },
  { id: '2', title: 'Архитектура React приложений: практика', completed: false },
  { id: '3', title: 'Оптимизация: вебинар', completed: true },
  { id: '4', title: 'Оптимизация: практика', completed: false },
  { id: '5', title: 'Redux: вебинар', completed: true },
  { id: '6', title: 'Redux: практика', completed: false },
]

export function TaskList() {
  const { tasks, removeTask, toggleTask } = useTasks(INITIAL_TASKS)

  return (<>
    {tasks.map(task => <TaskCard key={task.id} task={task} onDelete={removeTask} onChange={toggleTask} />)}
  </>)
}
