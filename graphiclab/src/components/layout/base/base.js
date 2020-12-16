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

const Base = ({ children, isContainer, isVisible, parents, current, hideOnDesktop }) => {
  return (
    <>
        <Helmet
          htmlAttributes = {{
            lang: "en"
          }}
        >
            <meta charset="utf-8"></meta>
            
            <meta name="description" content="GraphicLab a place where happiness is guaranteed!"></meta>
        </Helmet>
        <Header isVisible={isVisible} parents={parents} current={current} hideOnDesktop={hideOnDesktop}/>
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