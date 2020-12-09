/**
 * Home page product contest
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Card from "./card/card"

import "./contest.css"

const query = graphql`{
    stickers: allContentfulProductContest(limit: 3, sort: {fields: [year, month], order: DESC}) {
        edges {
            node {
                id
                name
                product {
                    id
                    image {
                        fluid(quality: 30, maxHeight: 300, maxWidth: 300) {
                          src
                        }
                    }
                }
            }
        }
    },
    shirts: allContentfulShirtContest(limit: 3, sort: {fields: [year, month], order: DESC}) {
        edges {
            node {
                id
                name
                product {
                    id
                    image {
                        fluid(quality: 30, maxHeight: 300, maxWidth: 300) {
                          src
                        }
                    }
                }
            }
        }
    }
}`

const Contest = ({ contest }) => {
    return (
        <StaticQuery on
        query = { query }
        render = { data => {
            return (
                <section id="contest">
                    <div className="heading">
                            { contest === "sticker" &&
                                <> 
                                    <h1>Sticker contest</h1>
                                    <p>The three best stickers of the month based on your choice.</p>
                                </>
                            } 
                            { contest === "shirt" &&
                                <> 
                                    <h1>Shirt contest</h1>
                                    <p>The three best T-shirts of the month based on your choice.</p>
                                </>
                            } 
                    </div>
                    <div className="container">
                        <div className="cards">
                            { contest === "sticker" &&
                                <> 
                                    {data.stickers.edges.map(({ node: product }) => {
                                        return <Card key={ product.id } product={ product }/>
                                    })}
                                </>
                            } 
                            { contest === "shirt" &&
                                <> 
                                    {data.shirts.edges.map(({ node: product }) => {
                                        return <Card key={ product.id } product={ product }/>
                                    })}
                                </>
                            } 
                        </div>
                    </div>
                </section>
            )
        }}
        />

    )
}

export default Contest