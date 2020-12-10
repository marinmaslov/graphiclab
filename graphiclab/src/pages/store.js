/**
 * Store
 */
import React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import useHasMounted from "../components/hooks/useHasMounted/useHasMounted"
import Layout from "../components/layout/base/base"
import Banner from "../components/banners/custom/banner"
import Categories from "../components/store/components/categories/categories"
import StoreCard from "../components/store/components/card/card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../components/store/store.css"

function getSearchResults(query) {
    const index = window.__FLEXSEARCH__.en.index
    const store = window.__FLEXSEARCH__.en.store
    
    if (!query || !index) {
      return []
    } else {
      let results = []

      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })
  
      results = Array.from(new Set(results))
  
      const nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)
      return nodes
    }
}

const DisplayProducts = ({ products }) =>
    products.map(product => {
        return (
            <StoreCard id={ product.id } />
        )
    }
)

const Store = ({ data }) => {
    const { nodes: products } = data.products
    const [query, setQuery] = useState("")
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null
    }

    const filtered_products = getSearchResults(query)
     
    return (
        <>
            <Helmet>
                <title>Store - GraphicLab</title>
            </Helmet>
            <Layout isContainer={false}>
                
                <Banner name="store" />

                <Categories tag="All" position="down"/>

                

                <div id="store-top">
                    <div>
                        {!query && 
                            <h3>All products:</h3>
                        }
                        
                        {query && filtered_products.length > 0 ? (
                            <>
                                <h3>Results for:</h3>
                                <p>{query}</p>
                            </>
                        ) : null}
                    </div>
                    <section id="store-search">
                        <h3>Or search for something particular:</h3>
                        <div className="search-container">
                            <i><FontAwesomeIcon icon={ faSearch }/></i>
                            <input  type="search" 
                                    placeholder="Searching for something?" 
                                    value={query || ""} 
                                    onChange={event => setQuery(event.target.value)} 
                                    className="search"
                            />
                        </div>
                    </section>
                </div>


                

                {query && filtered_products.length > 0 ? (
                    <section id="store-cards">
                        <div className="products">
                            <DisplayProducts products={ filtered_products } />
                        </div>
                    </section>
                ) : null}

                {query && filtered_products.length === 0 ? (
                    <section id="found-result-container">
                        <div>
                            <p className="no-results">
                                No results for{" "}
                                <span className="text-purple-600 font-semibold">{ query }</span>
                            </p>
                        </div>
                    </section>
                ) : null}

                {!query && 
                    <section id="store-cards">
                        <div className="products">
                            <DisplayProducts products={ products } />
                        </div>
                    </section>
                }

            </Layout>
        </>
    )
}
export default Store

export const query = graphql`{
    products: allContentfulStoreProduct {
        nodes {
            id
            name
            category {
                name
            }
            image {
                fluid(quality: 90, maxHeight: 300, maxWidth: 300) {
                    src
                }
            }
            price
        }
    }
}`