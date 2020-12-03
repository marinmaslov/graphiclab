/**
 * Store Article
 */
import React from "react"
import { graphql, StaticQuery } from "gatsby"

import "./store.css"
import StoreCard from "./components/card/card"

const query = graphql `{
    products: allContentfulStoreProduct(sort: {fields: price, order: ASC}) {
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
    categories: allContentfulProductCategories {
        edges {
            node {
                name
            }
        }
    }
}`

  
export default class Store extends React.Component {

    state = {
        categories: {
            "available": false,
            "gift": false,
            "home": false,
            "school": false,
            "work": false,
            "medium": false,
            "large": false,
            "small": false
        }
    }
    
    filterElements(search) {
         // Set state of Search do default
        if(!search) {
            document.querySelector(".no-result").classList.add("hide")
            document.querySelector("#store-search").classList.remove("green")
            document.querySelector("#store-search").classList.remove("red")
            document.querySelector("#store-search input").value = ""
        }

        let products = document.querySelectorAll("#store-cards article")
        products.forEach( product => {
                let check = false
                let checkIfNoneSelected = false

                product.classList.forEach( clazz => {
                    for(const keys in this.state.categories) {
                        if(keys === clazz && this.state.categories[keys]) {
                            check = true
                        }
                    }
                })

                for(const keys in this.state.categories) {
                    if(!this.state.categories[keys]){
                        checkIfNoneSelected = true
                    } else {
                        checkIfNoneSelected = false
                    }
                }

                let checkAll = false
                for(const keys in this.state.categories) {
                    if(this.state.categories[keys]) {
                        checkAll = true
                    }                
                }

                if(checkAll) {
                    if(check) {
                        product.classList.remove("hide")
                        //product.style.display = "block"
                    } else {
                        product.classList.add("hide")
                        //product.style.display = "none"
                    }
                } else {
                    product.classList.remove("hide")
                    //product.style.display = "block"
                }
        })
    }

    handleInputChange = event => {
        const target = event.target
        const className = target.className.toLowerCase()

        let currentState = this.state.categories
        currentState[className] = target.checked

        this.setState(
            { categories: currentState }
        )

        this.filterElements(false)
    }

    handleSearch = event => {
        this.setState({
            categories: {
                "available": false,
                "gift": false,
                "home": false,
                "school": false,
                "work": false,
                "medium": false,
                "large": false,
                "small": false
            }
        })

        // Set state of Filter do default
        let filters = document.querySelectorAll("#store-filter .categories input")
        filters.forEach( filter => {
            if(filter.checked){
                filter.checked = false
            } 
        })
        this.filterElements(true)

        const input = document.querySelector(".search").value
        const posts = document.querySelectorAll("#store-cards article")

        posts.forEach( e => {
            if(e.innerHTML.includes(input)){
                e.classList.remove("hide")
            } else {
                e.classList.add("hide")
            }
        })

        let counter = document.querySelectorAll("#store-cards article").length
        posts.forEach( e => {
            if(e.classList.value.includes("hide")){
                counter--;
            } 
        })

        if(counter > 0){
            document.querySelector(".no-result").classList.add("hide")
            document.querySelector("#store-search").classList.add("green")
            document.querySelector("#store-search").classList.remove("red")
        } else {
            document.querySelector(".no-result").classList.remove("hide")
            document.querySelector("#store-search").classList.add("red")
            document.querySelector("#store-search").classList.remove("green")
        }

        if(document.querySelector("#store-search .search-container input").value === "") {
            document.querySelector("#store-search").classList.remove("red")
            document.querySelector("#store-search").classList.remove("green")
        }
    }

    render() {        
        return (
            <>
                <StaticQuery on
                    query = { query }
                    render = { data => {
                        return (
                            <>
                            <section id="store-filter">
                                <h3>Filter our products:</h3>
                                <div className="categories">
                                    {data.categories.edges.map(({ node: category }) => {
                                        return  <>
                                                <input type="checkbox" className={category.name} checked={this.state.checked} onChange={ this.handleInputChange }/>
                                                <label>{ category.name }</label>
                                                </>
                                    })}
                                </div>
                                <div className="divider">
                                    <hr/>
                                    <i class="fas fa-horse"></i>
                                    <hr/>
                                </div>
                                <h3>...or search for something particular:</h3>
                            </section>

                            <section id="store-search">
                                <div className="search-container">
                                <input type="text" onKeyUp={ this.handleSearch } placeholder="Go ahead, type 'Unicorn'. We know you want it..." className="search"/>
                                </div>
                            </section>

                            <section id="no-result-container" class="no-result hide">
                                <p>Ha Ha Dummy, there are no Unicorns!</p>
                                {/* <img src={Image} /> */}
                            </section>
                            
                            <section id="store-cards">
                                <div className="products">
                                    {data.products.edges.map(({ node: product }) => {
                                        let classList = product.category
                                        let categories = "";
                                        classList.forEach( category => {
                                            categories += category.name + " "
                                        })
                                        return <StoreCard product={product} categories={ categories.toLowerCase() }/>
                                    })}
                                </div>
                            </section>

                            </>
                        )
                    }}
                />
                </>
            )
        
    }
}