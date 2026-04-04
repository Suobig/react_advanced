import { type Task, TaskCard } from "5-entities/taskCard"

interface TaskListProps {
  className: string
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export function TaskList(props: TaskListProps) {
  const { className, tasks, onDeleteTask, onToggleTask } = props

  return (
    <div className={className}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onChange={onToggleTask}
        />
      ))}
    </div>
  )
}
