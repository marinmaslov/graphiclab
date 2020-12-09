/**
 * Footer component 
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./footer.css"

import Highlight from "./highlights/highlights"
import Urls from "./urls/urls"
import Social from "./social/social"

const Footer = ({ }) => {
    return (
        <>
        <footer>
            <Highlight/>
            <Urls/>
            <Social/>
            <div class="copyright">
                <h2>GraphicLab's products are made with tons of chocolate.</h2>
                <p>Copyright 2019 GraphicLab. 'GraphicLab' is a registered trademark of GraphicLab Inc. All rights reserved.</p>
            </div>
            <StaticQuery on
                query = { query }
                render = { data => {
                    return (
                        <>
                            
                            <Img
                                fluid={ data.contentfulStickerImages.image.fluid }
                                className={ "image" }
                                alt={ "sticker" }
                            />
                        </>
                    )}  
                }
            /> 
        </footer>
        </>
    )
}

export default Footer

export const query = graphql`{
    contentfulStickerImages(name: {eq: "footer"}) {
        image {
            fluid(quality: 30, maxHeight: 300, maxWidth: 300) {
                src
            }
        }
    }
}`