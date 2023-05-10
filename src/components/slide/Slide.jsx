import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data'
import './Slide.scss'

const Slide = () => {
    return (
        <div className="slide">
            <div className="container">
                <Carousel infiniteLoop centerMode showIndicators={false} dynamicHeight>
                    {cards.map(card => (
                        <CatCard item={card} key={card.id} />
                    ))}
                </Carousel>
            </div>
        </div >
    )
}

export default Slide;