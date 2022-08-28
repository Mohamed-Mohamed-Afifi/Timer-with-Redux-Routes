import React from 'react'
// import { NavLink } from 'react-router-dom'
import './home.css'
import { Routes, NavLink, Outlet } from 'react-router-dom';
import Routers from './route';
// import CountComponent from './CountComponent';
function Home() {
    return (
        <div>

            <header className='col-12 text-center my-4 bg-light'>Please Select on App</header>

            <nav className='d-flex col-12 justify-content-center container'>
                <Routers />
            </nav>

            <section className='section'>
                <Outlet />
            </section>

            <footer className='col-12 text-center my-4 bg-light'>Footer</footer>
        </div>
    )
}

export default Home