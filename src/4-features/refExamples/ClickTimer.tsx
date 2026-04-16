import { Button, Container, Typography } from "@mui/material"
import { useRef } from "react"

type ClickData = {
  startTime: number | null
  clickCount: number
}

export const ClickTimer = () => {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  })

  const handleClick = () => {
    const clickTime = Date.now()
    const totalClicks = clickDataRef.current.clickCount + 1

    if (clickDataRef.current.startTime) {
      console.log(
        `diff (s): ${(clickTime - clickDataRef.current.startTime) / 1000}, total clicks: ${totalClicks}`,
      )
    } else {
      console.log("First click!")
    }

    clickDataRef.current.startTime = clickTime
    clickDataRef.current.clickCount = totalClicks
  }

  return (
    <Container>
      <Typography variant="h5">Таймер кликов</Typography>
      <Button onClick={handleClick} variant="contained">
        Нажми меня!
      </Button>
    </Container>
  )
}
