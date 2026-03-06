import type { Task } from "entities/taskCard"
import { TaskList, useTasks } from "features/taskList"

const INITIAL_TASKS: Task[] = [
	{ id: '1', title: 'Архитектура: вебинар', completed: true },
	{ id: '2', title: 'Архитектура React приложений: практика', completed: false },
	{ id: '3', title: 'Оптимизация: вебинар', completed: true },
	{ id: '4', title: 'Оптимизация: практика', completed: false },
	{ id: '5', title: 'Redux: вебинар', completed: true },
	{ id: '6', title: 'Redux: практика', completed: false },
]

export function TaskWidget() {
	const { tasks, removeTask, toggleTask } = useTasks(INITIAL_TASKS)
	return <TaskList tasks={tasks} onDeleteTask={removeTask} onToggleTask={toggleTask} />
}