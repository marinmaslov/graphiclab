/**
 * Blog Categories
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import "./categories.css"

const query = graphql `{
    categories: allContentfulProductCategories {
        edges {
            node {
                name
            }
        }
    }
}`

const Categories = ({ tag, position }) =>  {
    return (
        <StaticQuery on
            query = { query }
            render = { data => {
                return (
                    <section id="store-filter">
                        {position == "up" && (
                            <div className="divider">
                                <hr/>
                                <i class="fas fa-horse"></i>
                                <hr/>
                            </div>
                        )}
                        {tag != "All" ? 
                            <h3>Try out other tags:</h3> : <h3>Filter our products:</h3>
                        }
                        <div className="categories">
                            <Link to={`/store/`} className={tag == "All" ? "underline" : ""}>All</Link>
                            {data.categories.edges.map(({ node: category }) => {
                                let isTag = false;
                                if(tag == category.name) {
                                    console.log(tag + ", " + category.name);
                                    isTag = true;
                                }
                                return <Link key={category.name} to={`/store/tag/${category.name.replace(" ", "-").toLowerCase()}`} className={isTag ? "underline" : ""}>{category.name}</Link>
                            })}
                        </div>
                        {position == "down" && (
                            <div className="divider">
                                <hr/>
                                <i class="fas fa-horse"></i>
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