/**
 * Banner blog component 
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Text from "../custom/components/text"

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
                                                <div id="custom-banner" className={ name } style={{ backgroundImage: `url(${image.image.fluid.src})` }}>
                                                    <div className={`overlay  ${ name === "quote" && "center" }`}>
                                                        <Text headline={image.headline.headline} paragraph={image.paragraph.paragraph}/>
                                                    </div>
                                                </div>
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
                    fluid(quality: 90) {
                        src
                    }
                }
            }
        }
    }
}
`