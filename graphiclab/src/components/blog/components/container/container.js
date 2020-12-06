/**
 * Container Blog component 
 *
 */
import React from "react"

import "./container.css"

const InnerBlogContainer = ({ children }) => {
  return (
    <section className="inner-blog-container">
        <div className="inner-blog-content">
            {children}
        </div>
    </section>
  )
}

export default InnerBlogContainer
