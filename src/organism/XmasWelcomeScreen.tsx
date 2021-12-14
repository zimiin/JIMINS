import LightBulb from 'atom/LightBulb'
import React from 'react'
import styled from 'styled-components'
import xmasTree from 'images/xmas_tree.png'

const Container = styled.div`
  background: #202124;
  height: 100%;
  position: relative;
  padding-top: 100px;
  // padding-left: 50px;
`

function XmasWelcomeScreen() {
  return (
    <Container>
      {/* <LightBulb />
      <LightBulb 
        color='#538FE4'
      />
      <LightBulb
        color='#FF7A76'
      />
      <LightBulb
        color='#45CC7B'
      /> */}

      <img src={xmasTree} style={{
        // margin: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
      }}/>
    </Container>
  )
}

export default XmasWelcomeScreen
