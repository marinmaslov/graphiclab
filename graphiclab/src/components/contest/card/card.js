/**
 * Contest Cards
 */
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ContestCard = ({ product }) => {
    return (
        <div className="card">
          <Link key={ product.id } to={`/store/${ product.product.id }`} aria-label={product.name} >
            <Img
              fluid={ product.product.image.fluid }
              className={ "img" }
              alt={ product.name }
            />
          </Link>
          <hr/>
          <Link key={ product.id } to={`/store/${ product.product.id }`}>
            {product.name}
          </Link>
        </div>
    )
}

export default ContestCard
