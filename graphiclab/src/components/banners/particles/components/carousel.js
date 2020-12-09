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
                            <img src={ data.contentfulStickerImages.image.fluid.src } alt={ "sticker" }/>
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
            fluid(quality: 30, maxHeight: 300, maxWidth: 300) {
                src
            }
        }
    }
}`