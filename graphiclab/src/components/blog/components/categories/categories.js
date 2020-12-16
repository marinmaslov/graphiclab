/**
 * Blog Categories
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

const query = graphql `{
    categories: allContentfulBlogPostCategory {
        edges {
            node {
                name
            }
        }
    }
}`

const Categories = ({ tag, position, toAll }) =>  {
    return (
        <StaticQuery on
            query = { query }
            render = { data => {
                return (
                    <section id="store-filter">
                        {position == "up" && (
                            <div className="divider">
                                <hr/>
                                <i><FontAwesomeIcon icon={ faCat }/></i>
                                <hr/>
                            </div>
                        )}
                        {tag != "All" ? 
                            <h3>Try out other tags:</h3> : <h3>Filter our posts:</h3>
                        }
                        <div className="categories">
                            { toAll && (
                                <Link to={`/blog/tag/all/`} className={tag == "All" ? "underline" : ""}>All</Link>
                            )}

                            { !toAll && (
                                <Link to={`/blog/`} className={tag == "All" ? "underline" : ""}>All</Link>
                            )}

                            {data.categories.edges.map(({ node: category }) => {
                                let isTag = false;
                                if(tag == category.name) {
                                    console.log(tag + ", " + category.name);
                                    isTag = true;
                                }
                                return <Link key={category.name} to={`/blog/tag/${category.name.replace(" ", "-").toLowerCase()}` + "/"} className={isTag ? "underline" : ""}>{category.name}</Link>
                            })}
                        </div>
                        {position == "down" && (
                            <div className="divider">
                                <hr/>
                                <i><FontAwesomeIcon icon={ faCat }/></i>
                                <hr/>
                            </div>
                        )}
                    </section>
                )
            }}
        />
    )
}

export default Categories