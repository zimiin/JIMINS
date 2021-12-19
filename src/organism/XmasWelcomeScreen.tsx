import LightBulb from 'atom/LightBulb'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import xmasTree from 'images/xmas_tree.png'
import { BROWSER_HEIGHT, BROWSER_WIDTH, verticalScale } from 'utils/size'

const Container = styled.div`
  background: #202124;
  height: 100%;
  position: relative;
`

const CenterTree = styled.div`
  padding-top: ${verticalScale(258)}px;
`

type LightBulbBoxType = {
  top?: number;
  left?: number;
}

const LightBulbBox = styled.div<LightBulbBoxType>`
  position: absolute;
  top: ${props => props.top ? props.top + 'px' : '100px'};
  left: ${props => props.left ? props.left + 'px' : '200px'};
`

const lightBulbColors = ['#538FE4', '#FF7A76', '#45CC7B', '#FFDD7B']

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function XmasWelcomeScreen() {
  const lightBulbs = useMemo(() => {
    const result = []
    const rectHeight = 200
    const rectWidth = 250
    const noCol = Math.floor(BROWSER_WIDTH / rectWidth)
    const noRow = Math.floor(BROWSER_HEIGHT / rectHeight)

    for (let i = 0; i < noRow; i++) {
      for (let j = 0; j < noCol; j++) {
        if (getRandomInt(2) === 0) {
          result.push(
            <LightBulbBox
              top={rectHeight * i + getRandomArbitrary(15, rectHeight - 14) + (BROWSER_HEIGHT % rectHeight) / 2}
              left={rectWidth * j + getRandomArbitrary(15, rectWidth - 14) + (BROWSER_WIDTH % rectWidth) / 2}
            >
              <LightBulb
                color={lightBulbColors[getRandomInt(4)]}
              />
            </LightBulbBox>
          )
        }
      }
    }

    return result
  }, [window.innerHeight, window.innerWidth])

  return (
    <Container>
      {lightBulbs}

      <CenterTree>
        <img src={xmasTree} style={{
          height: verticalScale(660) + 'px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          position: 'relative',
          zIndex: '100'
        }}/>
      </CenterTree>
    </Container>
  )
}

export default XmasWelcomeScreen
