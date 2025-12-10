import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <h1>PS Sports</h1>
            <nav>
                <NavLink to={"/"}></NavLink>
                <NavLink to={"/cadastro"}></NavLink>
                <NavLink to={"/dashboard"}></NavLink>
                <NavLink to={"/gestao"}></NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout