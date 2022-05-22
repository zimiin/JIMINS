import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from 'page/IndexPage'
import NotFoundPage from 'page/NotFoundPage'
import Wordle from 'wordle/Wordle'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexPage />}>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route path='/wordle' element={<Wordle />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
