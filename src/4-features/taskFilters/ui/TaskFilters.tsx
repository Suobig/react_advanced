import React, { useCallback } from "react"
import { ToggleButtonGroup } from "@mui/material"

import type { Filter } from "entities/taskFilter"
import { FilterButton } from "shared/ui/FilterButton/FilterButton"

import s from "./TaskFilters.module.css"

type FilterConfig = { value: Filter; label: string }

interface TaskFiltersProps {
  filters: FilterConfig[]
  filter: Filter
  onChange: (value: Filter) => void
}

function TaskFiltersComponent(props: TaskFiltersProps) {
  const { filters, filter, onChange } = props

  //Нужен отдельный обработчик: т.к. MUI ToggleButtonGroup позволяет передавать null
  const handleChange = useCallback(
    (_: unknown, newFilter: Filter | null) => {
      if (newFilter !== null) {
        onChange(newFilter)
      }
    },
    [onChange],
  )

  return (
    <ToggleButtonGroup
      className={s.root}
      value={filter}
      exclusive
      onChange={handleChange}
    >
      {filters.map(({ value, label }) => (
        <FilterButton key={value} value={value} label={label} />
      ))}
    </ToggleButtonGroup>
  )
}

export const TaskFilters = React.memo(TaskFiltersComponent)
