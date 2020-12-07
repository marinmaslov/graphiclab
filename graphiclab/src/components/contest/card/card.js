/**
 * Contest Cards
 */
import React from "react"
import { Link } from "gatsby"

const ContestCard = ({ product }) => {
    return (
        <div className="card">
          <img src={product.product.image.fluid.src} />
          <hr/>
          <Link key={ product.id } to={`/store/${ product.product.id }`}>
            {product.name}
          </Link>
        </div>
    )
}

export default ContestCard
