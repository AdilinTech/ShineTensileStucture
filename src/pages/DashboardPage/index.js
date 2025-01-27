import React from 'react'
import Header from '../../common/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../common/footer/Footer'

const DashBoardPage = () => {
  return (
    <div>
        <Header />
        <div>

        <Outlet></Outlet>

        </div>
        <Footer />
    </div>
  )
}

export default DashBoardPage