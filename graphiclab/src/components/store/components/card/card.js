/**
 * Store Cards
 */
import React from "react"  
import { Link } from "gatsby"

const StoreCard = ({ product, categories }) => {
    return (
        <>
          <article id="product" className={ categories }>
            <div className="container">
              <Link key={ product.id } to={`/store/${ product.id }`} state={ product }> 
                <img src={product.image.fluid.src} />
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
        </>
    )
}

export default StoreCard