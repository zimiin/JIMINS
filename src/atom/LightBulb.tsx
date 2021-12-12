import React from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
}

type CircleProps = {
  color?: string
}

const Circle = styled.div<CircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${props => props.color === undefined ? '#FFE59E' : props.color};
  &:hover {
    box-shadow: 0px 0px 20px ${props => props.color === undefined ? '#FFE59E' : props.color};
  }
  display: inline-block;
`

const SmallerCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.3);
  margin-left: auto;
  margin-right: 1px;
  margin-top: 10px;
`

function LightBulb(props: Props) {
  return (
    <Circle
      color={props.color}
    >
      <SmallerCircle />
    </Circle>
  )
}

export default LightBulb
