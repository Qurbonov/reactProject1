import React, { useEffect, useState } from 'react'
import './Navbar.scss'
// import { Link } from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive); 
        }
    }, [])


    return (

        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                    <span className="text">fiverr</span>
                    {/* </Link> */}
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
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>test</span>
                        <span>test2</span>
                        <span>test3</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar