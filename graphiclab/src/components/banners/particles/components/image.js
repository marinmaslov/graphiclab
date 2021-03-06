import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "stickers/sticker_003.png" }) {
        childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={"img"}/>
}

export default Image
