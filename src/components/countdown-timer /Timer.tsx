import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Timer = (props: any) => {
  const { seconds } = props

  const [time, setTime] = useState({ seconds: 0, milliseconds: 1000 })
  const [FinalTime, setFinalTime] = useState('')
  const [countDownDate, setCountDownDate] = useState(
    Date.now() + seconds * 1000
  )

  function finishHandler(finish: Date) {
    setFinalTime(
      `${finish.getHours()}h : ${finish.getMinutes()}m : ${finish.getSeconds()}s : ${finish.getMilliseconds()}ml`
    )
  }

  useEffect(() => {
    const timerId = setInterval(function () {
      let now = new Date().getTime()
      let distance = countDownDate - now
      if (distance >= 0) {
        setTime({
          ...time,
          seconds: Math.floor((distance % (1000 * 200000)) / 1000),
          milliseconds: Math.floor((distance % 1000) / 1),
        })
      }
    }, 1)
    if (time.seconds == 0 && time.milliseconds < 50) {
      const dateNow = new Date()
      finishHandler(dateNow)
    }
    return () => clearInterval(timerId)
  }, [time])
  return (
    <div>
      <TimerP>
        {time.seconds} : {time.milliseconds}
      </TimerP>
      <FinishTimeTimerP>{FinalTime}</FinishTimeTimerP>
    </div>
  )
}

const TimerP = styled.p`
  font-size: 18px;
  color: #344859;
`

const FinishTimeTimerP = styled.p`
  font-size: 21px;
  color: #344859;
`
