import { ToggleButton } from "@mui/material"

interface FilterButtonProps {
  value: string
  label: string
}

export function FilterButton(props: FilterButtonProps) {
  const { value, label } = props
  return (
    <ToggleButton value={value} aria-label={value}>
      {label}
    </ToggleButton>
  )
}
