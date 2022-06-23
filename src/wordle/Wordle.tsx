import React, { useState } from 'react'
import './Wordle.css'

const MAX_ATTEMPT = 6
const MAX_LETTER = 5

const Wordle = () => {
  const [words, setWords] = useState<string[]>(Array(MAX_ATTEMPT * MAX_LETTER).fill(''))
  const [attempt, setAttempt] = useState(0)

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    // attempt 처리
    console.log('hihihi')
    console.log(e.key)
  }

  return (
    <div className='wordle-container' onKeyDown={handleKeyDown} tabIndex={0}>
      <h1 className='font-bold underline'>Hello wordle</h1>
      <div className=''>
        {words.map((letter, letterIdx) => (
          <div className='block' key={`letter-${letterIdx}`}>{letter}</div>
        ))}
      </div>
    </div>
  )
}

export default Wordle
