import { ClickTimer } from "features/refExamples/ClickTimer"

import s from "./RefsPage.module.css"
import { Divider } from "@mui/material"
import { PreviousInput } from "features/refExamples/PreviousInput"
import { FocusTracker } from "features/refExamples/FocusTracker"

export const RefsPage = () => {
  return (
    <div className={s.root}>
      <ClickTimer />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <PreviousInput />
      <Divider sx={{ mt: 2, mb: 2 }} />
      <FocusTracker />
    </div>
  )
}
