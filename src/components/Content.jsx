import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardFour from '../pages/DashboardFour'
import DashboardOne from '../pages/DashboardOne'
import DashboardThree from '../pages/DashboardThree'
import DashboardTwo from '../pages/DashboardTwo'
import '../styles/content.css'

const Content = () => {
  return (
    <div className='content__container'>
      Content
      <Routes>
      <Route path="/"/>
      <Route path="/menu-dashboard-1"  element={<DashboardOne />}/>
      <Route path="/menu-dashboard-2"  element={<DashboardTwo />}/>
      <Route path="/menu-dashboard-3"  element={<DashboardThree />}/>
      <Route path="/menu-dashboard-4"  element={<DashboardFour />}/>
      </Routes>
    </div>
  )
}

export default Content