/**
 * Base layout component 
 *
 */
import React from "react"
import Helmet from "react-helmet"

import "./base.css"

import Header from "./components/header/header"
import Footer from "./components/footer/footer"

const Base = ({ children }) => {
  return (
    <>
        <Helmet>
            <title>GraphicLab</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
        </Helmet>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Base