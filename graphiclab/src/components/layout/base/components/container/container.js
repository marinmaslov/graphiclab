/**
 * Container layout component 
 *
 */
import React from "react"

import "./container.css"

const Container = ({ children }) => {
  return (
    <section className="container">
        <div className="content">
            {children}
        </div>
    </section>
  )
}

export default Container
