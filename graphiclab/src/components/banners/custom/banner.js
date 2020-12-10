/**
 * Banner blog component 
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Text from "../custom/components/text"
import BackgroundImage from 'gatsby-background-image'

import "./banner.css"

const Banner = ({ name }) => {
    return (
        <StaticQuery on
            query = { query }
            render = { data => {
                return (
                    <>
                        {data.images.edges.map(({ node: image }) => {
                            return <>
                                        { name === image.name &&
                                            <>
                                                <BackgroundImage
                                                    Tag="div"
                                                    className={ name }
                                                    id="custom-banner"
                                                    fluid={ image.image.fluid }
                                                >
                                                    <div className={`overlay  ${ name === "quote" && "center" }`}>
                                                        <Text headline={image.headline.headline} paragraph={image.paragraph.paragraph}/>
                                                    </div>
                                                </BackgroundImage>
                                            </>
                                        }
                                    </>
                        })}
                    </>
                )}  
            } 
        /> 
    )
}

export default Banner

export const query = graphql`{
    images: allContentfulBannerImages {
        edges {
            node {
                name
                headline {
                    headline
                }
                paragraph {
                    paragraph
                }
                image {
                    fluid(quality: 100, maxWidth: 1200) {
                        src
                    }
                    file {
                        url
                    }
                }
            }
        }
    }
}
`