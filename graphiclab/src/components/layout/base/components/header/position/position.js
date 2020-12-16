/**
 * Position component 
 */
import React from "react"
import { Link } from "gatsby"

import "./position.css"

const Position = ({ isVisible, parents, current, hideOnDesktop }) => {
    let path = "/"
    let newName900 = current
    let newName700 = current
    let newName500 = current
    let newName400 = current
    if(isVisible && current.length > 20) {
        newName900 = current.slice(0,20) + "..."
        newName700 = current.slice(0,16) + "..."
        newName500 = current.slice(0,12) + "..."
        newName400 = current.slice(0,8) + "..."
    }
    console.log(hideOnDesktop)
    return (
        <>
        { isVisible && (
            <div id="position" className={`hide-${ hideOnDesktop ? 'desktop' : ''}`}>
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
                    <p className="current small-screen-900">{ newName900 }</p>
                    <p className="current small-screen-700">{ newName700 }</p>
                    <p className="current small-screen-500">{ newName500 }</p>
                    <p className="current small-screen-400">{ newName400 }</p>
                    <p className="current big-screen">{ current }</p>
                </div>
            </div>
        )}
        </>
    )
}

export default Position