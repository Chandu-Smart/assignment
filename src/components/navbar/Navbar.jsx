import React from 'react'
import logo from '../../data/EDYODA.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <img src={logo} alt="logo" />
                <span>Courses <i class="fa-sharp fa-solid fa-chevron-down"></i></span>
                <span>Programs <i class="fa-sharp fa-solid fa-chevron-down"></i></span>
            </div>
            <div className="right">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <span>Log in</span>
                <button>JOIN NOW</button>
            </div>
        </div>
    )
}

export default Navbar