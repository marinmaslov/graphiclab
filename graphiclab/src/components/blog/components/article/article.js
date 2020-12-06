/**
 * Blog Article
 */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layout/base/base"
import { Link } from "gatsby"

export default ({ data }) => {

    const preparedDate = data.contentfulBlogPost.date.split("T")[0].split("-")

    if(preparedDate[2][0] === "0") {
        preparedDate[2] = preparedDate[2].substring(1)
    }

    switch(preparedDate[1]) {
        case "01":
            preparedDate[1] = "Jan"
            break
        case "02":
            preparedDate[1] = "Feb"
            break
        case "03":
            preparedDate[1] = "Mar"
            break
        case "04":
            preparedDate[1] = "Apr"
            break
        case "05":
            preparedDate[1] = "May"
            break
        case "06":
            preparedDate[1] = "Jun"
            break
        case "07":
            preparedDate[1] = "Jul"
            break
        case "08":
            preparedDate[1] = "Aug"
            break
        case "09":
            preparedDate[1] = "Sep"
            break
        case "10":
            preparedDate[1] = "Oct"
            break
        case "11":
            preparedDate[1] = "Nov"
            break
        case "12":
            preparedDate[1] = "Dec"
            break
    }

    return (
        <Layout>
            <div id="article">
                <div className="author">
                    <div className="container">
                        <img src={ data.contentfulBlogPost.author.image.fluid.src }  />
                        <p>Published by { data.contentfulBlogPost.author.name } { data.contentfulBlogPost.author.surname }</p>
                        <div className="divider">
                            <hr/>
                            <i class="fas fa-newspaper"></i>
                            <hr/>
                        </div>
                        <p>on { preparedDate[1] } { preparedDate[2] }, { preparedDate[0]}</p>
                    </div>
                </div>
                <div className="article">
                    <div className="heading">
                        <h2>{ data.contentfulBlogPost.title }</h2>
                        <figure>
                            <img src={data.contentfulBlogPost.image.fluid.src} />
                        </figure>
                    </div>
                    <div className="post">
                        <p>{data.contentfulBlogPost.text.text}</p>
                    </div>
                    
                    <div className="divider">
                        <hr/>
                        <i class="fas fa-ice-cream"></i>
                        <hr/>
                    </div>
                    <div class="categories">
                        <p>Tags:</p>
                        <div className="tags">
                            {data.contentfulBlogPost.category.map(({ name: tag }) => {
                                return  <button><Link to={"/blog/tag/" + tag.replace(" ", "-").toLowerCase()}># { tag }</Link></button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
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
}`