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
                            <img
                                src={ data.contentfulStickerImages.image.fluid.src }
                                className={ "img" }
                                alt={ "sticker" }
                            />
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