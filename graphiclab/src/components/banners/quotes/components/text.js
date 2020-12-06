/**
 * Carousel component that is part of Banner 
 */
import React from "react"

import "./text.css"

const Text = ({ quote, author }) => {
    return (
        <>
        <div class="text">
            <h2>"{ quote }"</h2>
            <p>- { author }</p>
        </div>
        </>
    )
}

export default Text