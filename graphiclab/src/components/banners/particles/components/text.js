/**
 * Carousel component that is part of Banner 
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons'


import "./text.css"

const Text = ({ }) => {
    return (
        <>
        <div class="text">
            <h2>Get the Toothles sticker today!</h2>
            <p>Also check our other products! Tons of chocolate is needed for designing them and the gym subscription for losing those pounds won't pay on its own.</p>
            <div class="buttons">
                <button><FontAwesomeIcon icon={ faInfoCircle }/><span>See more</span></button>
                <button><FontAwesomeIcon icon={ faCreditCard }/><span>Buy</span></button>
            </div>
        </div>
        </>
    )
}

export default Text