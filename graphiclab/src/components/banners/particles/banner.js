/**
 * Banner component 
 */
import React from "react"

import Text from "../particles/components/text"
import Carousel from "../particles/components/carousel"

import "./banner.css"

import Particles from "./components/particles/particles"

const Banner = ({ }) => {
    return (
        <>
        <section id="banner">
            <Particles />
            <div class="container">
                <Text/>
                <Carousel/>
            </div>
        </section>
        </>
    )
}

export default Banner