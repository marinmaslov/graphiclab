/**
 * Logo component of Header
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const MainLogo = ({ }) => {
    return (
        <a href="/" class="logo">
            <StaticQuery on
                query = { query }
                render = { data => {
                    return (
                        <>
                            <BackgroundImage
                                Tag="span"
                                className={ "logo-image" }
                                alt={ "logo" }
                                fluid={ data.contentfulStickerImages.image.fluid }
                            >
                            </BackgroundImage>
                        </>
                    )}  
                } 
            /> 
            <span><strong>Graphic</strong>Lab</span>
        </a>
    )
}

export default MainLogo

export const query = graphql`{
    contentfulStickerImages(name: {eq: "logo"}) {
        image {
            fluid(quality: 100) {
                src
            }
        }
    }
}`