/**
 * Banner component 
 */
import React, { Suspense } from "react"
import lazy from 'react-lazy-ssr';

import Text from "../particles/components/text"
import Carousel from "../particles/components/carousel"

import "./banner.css"

import Particles from "./components/particles/particles"

const Banner = ({ }) => {
    return (
        <>
        <section id="banner">
            <Suspense fallback={""}>
              <Particles />
            </Suspense>
            <div class="container">
                <Text/>
                <Carousel/>
            </div>
        </section>
        </>
    )
}

export default Banner