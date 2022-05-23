import React, { useState } from 'react'
import './Wordle.css'

const MAX_ATTEMPT = 6
const MAX_LETTER = 5

const Wordle = () => {
  const [words, setWords] = useState<string[][]>(Array(MAX_ATTEMPT).fill(Array(MAX_LETTER).fill('')))

  return (
    <div className='wordle-container'>
      <h1 className='font-bold underline'>Hello wordle</h1>
      <div>
        {words.map((word) => (
          <div className='block-row'>
            {word.map((letter) => (
              <div className='block'>{letter}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wordle
