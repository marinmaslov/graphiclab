/**
 * Footer component 
 */
import React from "react"

import "./footer.css"

import Highlight from "./highlights/highlights"
import Urls from "./urls/urls"
import Social from "./social/social"

const Footer = ({ }) => {
    return (
        <>
        <footer>
            <Highlight/>
            <Urls/>
            <Social/>
            <div class="copyright">
                <h2>GraphicLab's products are made with tons of chocolate.</h2>
                <p>Copyright 2019 GraphicLab. 'GraphicLab' is a registered trademark of GraphicLab Inc. All rights reserved.</p>
            </div>
            <div class="image"></div>
        </footer>
        </>
    )
}

export default Footer