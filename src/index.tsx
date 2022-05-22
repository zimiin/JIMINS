import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from 'page/IndexPage'
import NotFoundPage from 'page/NotFoundPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<IndexPage />}>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
