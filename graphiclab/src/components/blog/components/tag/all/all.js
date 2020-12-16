/**
 * Blog
 */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../../../layout/base/base"
import BlogCategories from "../../categories/categories"
import BlogCard from "../../card/card"
  
export default class Blog extends React.Component {
    render(){
        const posts = this.props.data.allContentfulBlogPost.edges
        
        const { currentPageAll, numPagesAll } = this.props.pageContext
        const isFirst = currentPageAll === 1
        const isSecond = currentPageAll === 2
        const isLast = currentPageAll === numPagesAll
        const prevPage = currentPageAll - 1 === 1 ? "/" : (currentPageAll - 1).toString()
        const nextPage = (currentPageAll + 1).toString()

        return (
            <>
            <Layout isContainer={false} isVisible={ true } parents={ ["Home", "Blog", "Tag"] } current={ "All" }>
                <div className="blog-tag-margin"></div>
                <BlogCategories tag="All" position="down"/>

                <div id="store-tag-page-top">
                    <h3>All posts:</h3>
                    <h3>Page: { currentPageAll } / { numPagesAll }</h3>
                </div>

                    <section id="blog-cards">
                        {posts.map(({ node: article }) => {
                            return <BlogCard key={ article.id } article={ article }/>
                        })}
                    </section>

                    <section id="blog-pagination">
                        <div className="previous">
                            {!isFirst && !isSecond &&(
                                <Link to={`/blog/all/${prevPage}`} rel="prev">
                                    Prev
                                </Link>
                            )}
                            {!isFirst && isSecond &&(
                                <Link to={`/blog/all/`} rel="prev">
                                    Prev
                                </Link>
                            )}
                        </div>
                        <div className="numbering">
                            {Array.from({ length: numPagesAll }, (_, i) => (
                                <Link key={`pagination-number${i + 1}`} to={`/blog/all/${i === 0 ? "" : i + 1}`} className={currentPageAll == i + 1 ? "current-page" : ""}>
                                    {i + 1}
                                </Link>
                            ))}
                        </div>
                        <div className="next">
                            {!isLast && (
                                <Link to={`/blog/all/${nextPage}`} rel="next">
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