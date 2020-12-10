/**
 * Carousel component that is part of Banner 
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "./carousel.css"

const Carousel = ({ }) => {
    return (
        <div class="carousel">
            <StaticQuery on
                query = { query }
                render = { data => {
                    return (
                        <>
                            <span className={"img"} alt={ "sticker" } style={{ backgroundImage: `url(${ data.contentfulStickerImages.image.fluid.src }` }}></span>
                        </>
                    )}  
                } 
            /> 
        </div>
    )
}

export default Carousel

export const query = graphql`{
    contentfulStickerImages(name: {eq: "banner"}) {
        image {
            fluid{
                src
            }
        }
    }
}`