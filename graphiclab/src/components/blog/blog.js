/**
 * Blog
 */
import React from "react"
import { Link, graphql } from "gatsby"

import "./blog.css"
import Layout from "../layout/base/base"
import Banner from "../banners/custom/banner"
import BlogCategories from "./components/categories/categories"
import BlogCard from "./components/card/card"
  
export default class Blog extends React.Component {
    render(){
        const posts = this.props.data.allContentfulBlogPost.edges
        
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isSecond = currentPage === 2
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()

        return (
            <>
            <Layout isContainer={ false } isVisible={ true } parents={ ["Home"] } current={ "Blog" }>
                {isFirst && (
                    <Banner name="blog" />
                )}

                {!isFirst && (
                    <div className="blog-tag-margin"></div>
                )}
                
                <BlogCategories tag="All" position="down"/>

                <div id="store-tag-page-top">
                    <h3>All posts:</h3>
                    <h3>Page: { currentPage } / { numPages }</h3>
                </div>

                    <section id="blog-cards">
                        {posts.map(({ node: article }) => {
                            return <BlogCard key={ article.id } article={ article }/>
                        })}
                    </section>

                    <section id="blog-pagination">
                        <div className="previous">
                            {!isFirst && !isSecond &&(
                                <Link to={`/blog/${prevPage}`} rel="prev">
                                    Prev
                                </Link>
                            )}
                            {!isFirst && isSecond &&(
                                <Link to={`/blog/`} rel="prev">
                                    Prev
                                </Link>
                            )}
                        </div>
                        <div className="numbering">
                            {Array.from({ length: numPages }, (_, i) => (
                                <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`} className={currentPage == i + 1 ? "current-page" : ""}>
                                    {i + 1}
                                </Link>
                            ))}
                        </div>
                        <div className="next">
                            {!isLast && (
                                <Link to={`/blog/${nextPage}`} rel="next">
                                    Next
                                </Link>
                            )}
                        </div>
                    </section>
            </Layout>
            </>
        )
    }
}

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(limit: $limit, skip: $skip, sort: {order: DESC, fields: date}) {
            edges {
                node {
                    id
                    title
                    image {
                        fluid(quality: 100, maxWidth: 1200) {
                            src
                        }
                    }
                    text {
                        raw
                    }
                    intro {
                        intro
                    }
                    date
                    category {
                        name
                        relativePath
                    }
                    author {
                        name
                        surname
                        image {
                            fluid {
                            src
                            }
                        }
                    }
                }
            }
        }
    }
`