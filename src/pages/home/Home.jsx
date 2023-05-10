import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide />
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem, ipsum dolor.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem, ipsum dolor.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem, ipsum dolor.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem, ipsum dolor.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Lorem, ipsum dolor.
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./img/1.mp4" controls></video>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home