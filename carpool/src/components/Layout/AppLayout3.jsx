import React from 'react'
import Sidebar from '../../Admin/Sidebar'
import Headeradmin from '../../Admin/Header'
import { Outlet } from 'react-router-dom'

function AppLayout3() {
  return (
    <>
      <Sidebar />
      <Outlet/>
      <Headeradmin />
    </>
  )
}

export default AppLayout3