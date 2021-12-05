import TitleText from 'atom/TitleText'
import React from 'react'
import styled from 'styled-components'

interface Props {
  colorMode?: 'light' | 'dark'
}

type ContainerType = {
  colorMode?: 'light' | 'dark'
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
  text-align: center;
`

const Title = styled(TitleText)`
  color: white;
  font-size: 50px;
  text-decoration: none;
`

function NavBar(props: Props) {
  return (
    <Container colorMode={props.colorMode}>
      <Title as="a" href="#">JIMIN'S</Title>
    </Container>
  )
}

export default NavBar
