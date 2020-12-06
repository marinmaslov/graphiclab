/**
 * Banner blog component 
 */
import React from "react"

import "./banner.css"


import Text from "../custom/components/text"

const Banner = ({ image, headline, paragraph }) => {
    return (
        <>
            <div id="custom-banner" className={ image }>
                <div className="overlay">
                    <Text headline={headline} paragraph={paragraph}/>
                </div>
            </div>
        </>
    )
}

export default Banner