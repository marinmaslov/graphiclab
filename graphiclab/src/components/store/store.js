/**
 * Store Article
 */
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/base/base"
import Banner from "../banners/custom/banner"
import "./store.css"
import StoreCard from "./components/card/card"

export default class Store extends React.Component {
    render() {       
        const products = this.props.data.allContentfulStoreProduct.edges

        const { currentPage, numProducts } = this.props.pageContext
        const isFirst = currentPage === 1
        const isSecond = currentPage === 2
        const isLast = currentPage === numProducts
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
     
        return (
            <Layout isContainer={false}>
                {isFirst && (
                    <Banner name="store" />
                )}

                <section id="store-cards">
                    <div className="products">
                        {products.map(({ node: product }) => {
                            return <StoreCard product={product} />
                        })}
                    </div>
                </section>


                <section id="blog-pagination">
                    <div className="previous">
                        {!isFirst && !isSecond &&(
                            <Link to={`/store/${prevPage}`} rel="prev">
                                Prev
                            </Link>
                        )}
                        {!isFirst && isSecond &&(
                            <Link to={`/store/`} rel="prev">
                                Prev
                            </Link>
                        )}
                    </div>
                    <div className="numbering">
                        {Array.from({ length: numProducts }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={`/store/${i === 0 ? "" : i + 1}`} className={currentPage == i + 1 ? "current-page" : ""}>
                                {i + 1}
                            </Link>
                        ))}
                    </div>
                    <div className="next">
                        {!isLast && (
                            <Link to={`/store/${nextPage}`} rel="next">
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
    query($skip: Int!, $limit: Int!) {
        allContentfulStoreProduct(limit: $limit, skip: $skip) {
            edges {
                node {
                    id
                    name
                    category {
                        name
                    }
                    image {
                        fluid {
                            src
                        }
                    }
                    price
                }
            }
        }
    }
`