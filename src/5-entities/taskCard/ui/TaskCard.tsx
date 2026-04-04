import React from "react"
import cn from "classnames"
import { Checkbox, FormControlLabel, IconButton } from "@mui/material"
import { Delete } from "@mui/icons-material"

import type { Task } from "../model/types"

import s from "./TaskCard.module.css"

interface TaskCardProps {
  task: Task
  onDelete: (id: string) => void
  onChange: (id: string) => void
}

function TaskCardComponent(props: TaskCardProps) {
  const { task, onDelete, onChange } = props

  return (
    <div className={s.root}>
      <div className={s.body}>
        <FormControlLabel
          className={cn(s.title, { [s.completed]: task.completed })}
          control={
            <Checkbox
              name={task.id}
              checked={task.completed}
              onChange={() => onChange(task.id)}
            />
          }
          label={task.title}
        />
        <div className={s.controls}>
          <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export const TaskCard = React.memo(TaskCardComponent)
