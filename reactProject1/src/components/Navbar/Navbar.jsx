import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">fiverr</span>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>menu1</span>
                    <span>menu2</span>
                    <span>menu3</span>
                    <span>menu4</span>
                    <span>menu5</span>
                    <button>join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar