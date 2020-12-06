/**
 * Blog Tag
 */
import React from "react"
import { Link, graphql } from "gatsby"

import "../../../blog/blog.css"
import Layout from "../../../layout/base/base"
import BlogCard from "../card/card"
import BlogCategories from "../categories/categories"

export default class BlogTag extends React.Component {
    render(){
        const posts = this.props.data.allContentfulBlogPost.edges
            
        const { currentPage, numTagPosts, id } = this.props.pageContext
        const isFirst = currentPage === 1
        const isSecond = currentPage === 2
        const isLast = currentPage === numTagPosts
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()

        return (
            <Layout>
                <section id="blog-tag-page">
                    <h3>The tag you're browsing is: <span>#{id}</span></h3>
                    <h4>Page: { currentPage } / { numTagPosts }</h4>
                </section>

                <BlogCategories tag={id} position="up"/>
                
                <section id="blog-cards">
                        {posts.map(({ node: article }) => {
                            return <BlogCard key={ article.id } article={ article }/>
                        })}
                </section>

                <section id="blog-pagination">
                    <div className="previous">
                        {!isFirst && isSecond && (
                            <Link to={`/blog/tag/` + id.replace(" ", "-").toLowerCase() + `${prevPage}`} rel="prev">
                                Prev
                            </Link>
                        )}
                        {!isFirst && !isSecond && (
                            <Link to={`/blog/tag/` + id.replace(" ", "-").toLowerCase() + `/${prevPage}`} rel="prev">
                                Prev
                            </Link>
                        )}
                    </div>
                    <div className="numbering">
                        {Array.from({ length: numTagPosts }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={`/blog/tag/` + id.replace(" ", "-").toLowerCase() + `/${i === 0 ? "" : i + 1}`} className={currentPage == i + 1 ? "current-page" : ""}>
                                {i + 1}
                            </Link>
                        ))}
                    </div>
                    <div className="next">
                        {!isLast && (
                            <Link to={`/blog/tag/` + id.replace(" ", "-").toLowerCase() + `/${nextPage}`} rel="next">
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
        allContentfulBlogPost(limit: $limit, skip: $skip, filter: {category: {elemMatch: {name: {eq: $id}}}}) {
            edges {
                node {
                    id
                    title
                    image {
                        fluid {
                            src
                        }
                    }
                    text {
                        text
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