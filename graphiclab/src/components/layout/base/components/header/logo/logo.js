/**
 * Logo component of Header
 */
import React from "react"

import Logo from "../../../../../../images/logo/logo.png"

const MainLogo = ({ }) => {
    return (
        <>
            <a href="/" class="logo">
                <img src={ Logo } alt={ "logo" } />
                <span><strong>Graphic</strong>Lab</span>
            </a>
        </>
    )
}

export default MainLogo