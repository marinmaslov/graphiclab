/**
 * Banner blog component 
 */
import React from "react"

import "./banner.css"


import Text from "./components/text"

const Quote = ({ image, quote, author }) => {
    return (
        <>
            <div id="custom-banner" className={ image }>
                <div className="overlay center">
                    <Text quote={quote} author={author}/>
                </div>
            </div>
        </>
    )
}

export default Quote