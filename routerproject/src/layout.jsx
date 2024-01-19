import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
function layout() {
  return (
    <>
    <Header/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default layout