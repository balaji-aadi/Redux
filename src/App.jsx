import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import './App.css'
import { Provider } from 'react-redux'
import store from './Store/store'

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
