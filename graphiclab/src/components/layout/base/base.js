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
        <Helmet
          htmlAttributes = {{
            lang: "en"
          }}
        >
            <meta charset="utf-8"></meta>
            <title>GraphicLab</title>
            <meta name="description" content="GraphicLab a place where happiness is guaranteed!"></meta>
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