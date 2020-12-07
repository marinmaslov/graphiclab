/**
 * Carousel component that is part of Banner 
 */
import React from "react"

const Text = ({ headline, paragraph }) => {
    return (
        <>
        <div class="text">
            <h2>{ headline }</h2>
            <p>{ paragraph }</p>
        </div>
        </>
    )
}

export default Text