import { ToggleButtonGroup } from "@mui/material"
import { FilterButton } from "shared/ui/FilterButton/FilterButton"

import s from "./TaskFilters.module.css"

type FilterConfig<T> = { value: T; label: string }

interface TaskFiltersProps<T> {
  filters: FilterConfig<T>[]
  filter: T
  onChange: (value: T | null) => void
}

export function TaskFilters<T extends string>(props: TaskFiltersProps<T>) {
  const { filters, filter, onChange } = props

  return (
    <ToggleButtonGroup
      className={s.root}
      value={filter}
      exclusive
      onChange={(_, newValue) => onChange(newValue)}
    >
      {filters.map(({ value, label }) => (
        <FilterButton value={value} label={label} />
      ))}
    </ToggleButtonGroup>
  )
}
