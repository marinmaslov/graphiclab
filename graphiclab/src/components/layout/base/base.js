/**
 * Base layout component 
 *
 */
import React from "react"
import Helmet from "react-helmet"

import "./base.css"

import Container from "./components/container/container"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

const Base = ({ children, isContainer }) => {
  return (
    <>
        <Helmet>
            <meta charset="utf-8"></meta>
            <title>GraphicLab</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
            <link rel="shortcut icon" href="../../../images/favicon/favicon.ico" type="image/x-icon"></link>
            <link rel="icon" href="../../../images/favicon/favicon.ico" type="image/x-icon"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        </Helmet>
        <Header/>
          {isContainer && (
              <Container>
              <main>
                {children}
              </main>
            </Container>
          )}
          {!isContainer && (
              <main>
              {children}
            </main>
          )}
        <Footer/>
    </>
  )
}

export default Base