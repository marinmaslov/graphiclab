/**
 * Carousel component that is part of Banner 
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import "./carousel.css"

const Carousel = ({ }) => {
    return (
        <div class="carousel">
            <StaticQuery on
                query = { query }
                render = { data => {
                    return (
                        <>
                            <BackgroundImage
                                Tag="span"
                                className={ "img" }
                                alt={ "sticker" }
                                fluid={ data.contentfulStickerImages.image.fluid }
                            >
                            </BackgroundImage>
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