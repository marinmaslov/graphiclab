/**
 * Store Cards
 */
import React from "react"  
import { Link, StaticQuery } from "gatsby"

import "./card.css"

const StoreCard = ({ id }) => {
    return (
      <StaticQuery on
            query = { query }
            render = { data => {
                return (
                    <>
                      {data.products.edges.map(({ node: product }) => {
                        return  <>
                                  { id === product.id &&
                                      <article id="product">
                                      <div className="container">
                                        <Link key={ product.id } to={`/store/${ product.id }`} state={ product }> 
                                          <img src={ product.image.fluid.src } alt={ product.name } />
                                        </Link>
                          
                                        <hr/>
                          
                                        <Link key={ product.id } to={`/store/${ product.id }`} state={ product }>
                                            <h2>{product.name}</h2>
                                        </Link>
                          
                                        <div className="cart">
                                          <p>${product.price}</p>
                                          <button><i class="fas fa-cart-plus"></i>Add to chart</button>
                                        </div>              
                                      </div>
                                    </article>
                                  }
                                </>
                      })}
                    </>
                )}  
            } 
        /> 
    )
}

export default StoreCard

export const query = graphql`{
  products: allContentfulStoreProduct {
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
}`