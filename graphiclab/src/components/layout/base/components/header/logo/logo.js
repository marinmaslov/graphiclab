/**
 * Logo component of Header
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"

const MainLogo = ({ }) => {
    return (
        <a href="/" class="logo">
            <StaticQuery on
                query = { query }
                render = { data => {
                    return (
                        <>
                            <span className={"logo-image"} style={{ backgroundImage: `url(${ data.contentfulStickerImages.image.fluid.src }` }}></span>
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
            fluid(quality: 30, maxHeight: 40, maxWidth: 40) {
                src
            }
        }
    }
}`