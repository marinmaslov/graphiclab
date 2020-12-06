/**
 * Carousel component that is part of Banner 
 */
import React from "react"

import "./text.css"

const Text = ({ }) => {
    return (
        <>
        <div class="text">
            <h2>Get the Toothles sticker today!</h2>
            <p>Also check our other products! Tons of chocolate is needed for designing them and the gym subscription for losing those pounds won't pay on its own.</p>
            <div class="buttons">
                <button><i class="fas fa-info-circle"></i>See more</button>
                <button><i class="fas fa-credit-card"></i>Buy</button>
            </div>
        </div>
        </>
    )
}

export default Text