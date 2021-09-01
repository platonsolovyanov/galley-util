import * as React from 'react'
import styled from 'styled-components'

interface TimerWrapperInt {
  children: any
}

export const TimerWrapper = (props: TimerWrapperInt) => {
  const { children } = props
  return <div>{children}</div>
}
