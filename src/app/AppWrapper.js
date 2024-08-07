import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../Footer/Footer'
import Nav from '../header/Nav'

const AppWrapper = () => {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path='/' element={ <Home /> } />
        </Routes>
        <Footer />
    </div>
  )
}

export default AppWrapper