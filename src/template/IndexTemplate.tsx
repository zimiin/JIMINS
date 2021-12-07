import NavBar from 'organism/NavBar'
import XmasWelcomeScreen from 'organism/XmasWelcomeScreen'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  position: relative;
`

function IndexTemplate() {
  return (
    <Container>
      <NavBar 
        colorMode='dark' 
        zIndex={100}
      />
      <XmasWelcomeScreen />
    </Container>
  )
}

export default IndexTemplate
