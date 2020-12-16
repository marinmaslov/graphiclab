/**
 * Position component 
 */
import React from "react"
import { Link } from "gatsby"

import "./position.css"

const Position = ({ isVisible, parents, current }) => {
    let path = "/"
    return (
        <>
        { isVisible && (
            <div id="position">
                <div className="position-container">
                    {   
                        parents.map( parent => {
                            { if (parent != "Home" && parent != "Posts" && parent != "Product" && parent != "Tag") {
                                path += parent.toLowerCase() + "/"
                            }}
                            return  <>
                                        <Link to={`${ path }`} rel="parents">
                                            { parent }
                                        </Link>
                                        <p> / </p>  
                                    </>
                    })}
                    <p className="current">{ current }</p>
                </div>
            </div>
        )}
        </>
    )
}

export default Position