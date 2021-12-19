import LightBulb from 'atom/LightBulb'
import React from 'react'
import styled from 'styled-components'
import xmasTree from 'images/xmas_tree.png'
import { verticalScale } from 'utils/size'

const Container = styled.div`
  background: #202124;
  height: 100%;
  position: relative;
`

const CenterTree = styled.div`
  padding-top: ${verticalScale(258)}px;
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

      <CenterTree>
        <img src={xmasTree} style={{
          height: verticalScale(660) + 'px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}/>
      </CenterTree>
    </Container>
  )
}

export default XmasWelcomeScreen
