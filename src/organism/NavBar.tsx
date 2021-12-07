import TitleText from 'atom/TitleText'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ColorMode = 'light' | 'dark'
type ZIndx = number
type AbsolutePosition = boolean

interface Props {
  colorMode?: ColorMode
  zIndex?: ZIndx
  absolutePosition?: AbsolutePosition
}

type ContainerType = {
  colorMode?: ColorMode
  zIndex?: ZIndx
  absolutePosition?: AbsolutePosition
}

const Container = styled.div<ContainerType>`
  background: ${props => {
    if (props.colorMode === undefined || props.colorMode === 'light') {
      return 'rgba(255, 255, 255, 0.57)'
    } else if (props.colorMode === 'dark') {
      return 'rgba(0, 0, 0, 0.57)'
    }
  }};
  height: 80px;
  width: 100%;
  text-align: center;
  z-index: ${props => { return props.zIndex || 0 }};
  position: ${props => { 
    if (props.absolutePosition === true) {
      return 'absolute'
    } else {
      return 'relative'
    }
  }}
`

const Title = styled(TitleText)`
  color: white;
  font-size: 50px;
  text-decoration: none;
`

function NavBar(props: Props) {
  return (
    <Container 
      colorMode={props.colorMode}
      zIndex={props.zIndex}
      absolutePosition={true}
    >
      <Title as={Link} to="/">JIMIN'S</Title>
    </Container>
  )
}

export default NavBar
