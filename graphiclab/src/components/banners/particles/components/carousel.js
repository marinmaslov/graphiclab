/**
 * Carousel component that is part of Banner 
 */
import React from "react"

import "./carousel.css"
import Image from "../../../../images/stickers/sticker_003.png"

const Carousel = ({ }) => {
    return (
        <>
        <div class="carousel">
            <img src={Image} alt={ "sticker" }/>
        </div>
        </>
    )
}

export default Carousel