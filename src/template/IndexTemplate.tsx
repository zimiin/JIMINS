import NavBar from 'organism/NavBar'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
`

function IndexTemplate() {
  return (
    <Container>
      <NavBar colorMode='dark' />
      
    </Container>
  )
}

export default IndexTemplate
