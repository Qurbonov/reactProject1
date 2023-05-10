import React from 'react'
import "./Featured.scss"
const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Lorem ipsum dolor sit amet.  </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" name="" id="" placeholder='lorem' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="man" />
                </div>
            </div>
        </div>
    )
}

export default Featured