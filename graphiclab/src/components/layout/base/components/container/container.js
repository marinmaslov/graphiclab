/**
 * Container layout component 
 *
 */

import React from "react"
import Helmet from "react-helmet"

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
