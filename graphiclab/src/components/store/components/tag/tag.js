/**
 * Blog Tag
 */
import React from "react"
import { Link, graphql } from "gatsby"

import "../../../blog/blog.css"
import Layout from "../../../layout/base/base"
import StoreCard from "../card/card"
import StoreCategories from "../categories/categories"

import "./tag.css"

export default class BlogTag extends React.Component {
    render(){
        const products = this.props.data.allContentfulStoreProduct.edges
        console.log(products)
        const { currentPage, numTagProducts, id } = this.props.pageContext
        const isFirst = currentPage === 1
        const isSecond = currentPage === 2
        const isLast = currentPage === numTagProducts
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()

        return (
            <Layout>
                <section id="store-tag-page">
                    <h3>The tag you're browsing is: <span>#{id}</span></h3>
                    <h4>Page: { currentPage } / { numTagProducts }</h4>
                </section>

                <StoreCategories tag={id} position="up"/>

                <section id="store-cards">
                    <div className="products">
                        {products.map(({ node: product }) => {
                            return <StoreCard id={ product.id } />
                        })}
                    </div>
                </section>

                <section id="store-pagination">
                    <div className="previous">
                        {!isFirst && isSecond && (
                            <Link to={`/store/tag/` + id.replace(" ", "-").toLowerCase() + `${prevPage}`} rel="prev">
                                Prev
                            </Link>
                        )}
                        {!isFirst && !isSecond && (
                            <Link to={`/store/tag/` + id.replace(" ", "-").toLowerCase() + `/${prevPage}`} rel="prev">
                                Prev
                            </Link>
                        )}
                    </div>
                    <div className="numbering">
                        {Array.from({ length: numTagProducts }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={`/store/tag/` + id.replace(" ", "-").toLowerCase() + `/${i === 0 ? "" : i + 1}`} className={currentPage == i + 1 ? "current-page" : ""}>
                                {i + 1}
                            </Link>
                        ))}
                    </div>
                    <div className="next">
                        {!isLast && (
                            <Link to={`/store/tag/` + id.replace(" ", "-").toLowerCase() + `/${nextPage}`} rel="next">
                                Next
                            </Link>
                        )}
                    </div>
                </section>
            </Layout>
        )
    }
}

export const query = graphql`
    query($skip: Int!, $limit: Int!, $id: String!) {
        allContentfulStoreProduct(limit: $limit, skip: $skip, filter: {category: {elemMatch: {name: {eq: $id}}}}) {
            edges {
                node {
                    id
                    name
                    category {
                        name
                    }
                    image {
                        fluid(quality: 30, maxHeight: 300, maxWidth: 300) {
                            src
                        }
                    }
                    price
                }
            }
        }
    }
`