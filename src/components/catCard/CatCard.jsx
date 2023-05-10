import React from 'react'
import "./CatCard.scss"
import { Link } from 'react-router-dom'

const CatCard = ({ item }) => {
    return (
        <Link to="/gigs?cat=design">
            <div className="catCard">
                <img src={item.img} alt="" />
                <spam className="desc">{item.desc}</spam>
                <spam className="title">{item.title}</spam>
            </div>
        </Link>
    )
}

export default CatCard;