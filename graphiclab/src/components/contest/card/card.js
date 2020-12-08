/**
 * Contest Cards
 */
import React from "react"
import { Link } from "gatsby"

const ContestCard = ({ product }) => {
    return (
        <div className="card">
          <Link key={ product.id } to={`/store/${ product.product.id }`} aria-label={product.name} >
            <img src={product.product.image.fluid.src} alt={product.name} />
          </Link>
          <hr/>
          <Link key={ product.id } to={`/store/${ product.product.id }`}>
            {product.name}
          </Link>
        </div>
    )
}

export default ContestCard
