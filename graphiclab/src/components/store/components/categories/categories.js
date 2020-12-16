/**
 * Blog Categories
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHorse } from '@fortawesome/free-solid-svg-icons'

import "./categories.css"

const query = graphql `{
    categories: allContentfulProductCategories {
        edges {
            node {
                name
                relativePath
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
                                <i><FontAwesomeIcon icon={ faHorse }/></i>
                                <hr/>
                            </div>
                        )}
                        {tag != "All" ? 
                            <h3>Try out other tags:</h3> : <h3>Filter our products:</h3>
                        }
                        <div className="categories">
                            { toAll && (
                                <Link to={`/store/tag/all`} className={tag == "All" ? "underline" : ""}>All</Link>
                            )}

                            { !toAll && (
                                <Link to={`/store/`} className={tag == "All" ? "underline" : ""}>All</Link>
                            )}
                            {data.categories.edges.map(({ node: category }) => {
                                let isTag = false;
                                if(tag == category.name) {
                                    console.log(tag + ", " + category.name);
                                    isTag = true;
                                }
                                return <Link key={category.name} to={`/store/tag/${category.relativePath.toLowerCase()}`} className={isTag ? "underline" : ""}>{category.name}</Link>
                            })}
                        </div>
                        {position == "down" && (
                            <div className="divider">
                                <hr/>
                                <i><FontAwesomeIcon icon={ faHorse }/></i>
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