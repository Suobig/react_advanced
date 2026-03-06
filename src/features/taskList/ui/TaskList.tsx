import  { type Task, TaskCard } from "entities/taskCard"

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export function TaskList(props: TaskListProps) {
  const { tasks, onDeleteTask, onToggleTask } = props

  return (<>
    {tasks.map(task => <TaskCard key={task.id} task={task} onDelete={onDeleteTask} onChange={onToggleTask} />)}
  </>)
}
