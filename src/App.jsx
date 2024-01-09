import './scss/global.scss';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Products from './pages/Products';
import Form from './pages/Form';
import Nav from './pages/Nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
