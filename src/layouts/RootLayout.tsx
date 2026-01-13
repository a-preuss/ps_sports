import React from 'react'
import { Outlet } from 'react-router-dom'
//import './RootLayout.css'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';

function RootLayout() {
  return (
    <div className="root-layout">
        <ResponsiveAppBar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout