import { ClickTimer } from "features/refExamples/ClickTimer"

import s from "./RefsPage.module.css"

export const RefsPage = () => {
  return (
    <div className={s.root}>
      <ClickTimer />
    </div>
  )
}
