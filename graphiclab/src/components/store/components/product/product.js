/**
 * Blog Article
 */
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../../layout/base/base";

import "./product.css"

export default ({ data }) => {
    return (
        <Layout>
            <section id="single-product">
                <div class="container">
                    <div class="menu">
                        <div class="content">
                            <h2>{ data.contentfulStoreProduct.name }</h2>
                            <p>{ data.contentfulStoreProduct.description.description }</p>
                            <h3>${ data.contentfulStoreProduct.price }</h3>
                            <div class="buttons">
                                <button class="buy"><i class="fas fa-money-bill-wave"></i>Buy now</button>
                                <button class="chart"><i class="fas fa-cart-plus"></i>Add to chart</button>
                            </div>
                        </div>
                        <img src={data.contentfulStoreProduct.image.fluid.src} alt={ data.contentfulStoreProduct.name } />
                    </div>
                    <div className="divider">
                        <hr/>
                        <i class="fas fa-dragon"></i>
                        <hr/>
                    </div>
                    <div class="categories">
                        <p>Categories:</p>
                        <div className="buttons">
                        {data.contentfulStoreProduct.category.map(({ name: category }) => {
                                        return  <button><Link to={"/store/tag/" + category.replace(" ", "-").toLowerCase()}>#{ category }</Link></button>
                        })}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($id: String!) {
    contentfulStoreProduct(id: { eq: $id }) {
        id
        name
        image {
            fluid(quality: 30, maxHeight: 480, maxWidth: 480) {
                src
            }
        }
        description {
            description
        }
        price
        category {
            name
        }
    }
}`