/**
 * Header component 
 */
import React from "react"

import "./header.css"

import Logo from "../header/components/logo"
import Menu from "../header/components/menu"
import SmallMenu from "../header/components/small-menu"

import useWindowSize from "../header/components/useWindowSize"

const Header = ({ }) => {
    const { width } = useWindowSize()
    if( width <= 960 ) {
        return (
            <>
                <header id="header">
                    <div class="container">
                        <Logo/>
                        <SmallMenu/> 
                    </div>
                </header>
            </>
        )
    } else {
        return (
            <>
                <header id="header">
                    <div class="container">
                        <Logo/>
                        <Menu/> 
                    </div>
                </header>
            </>
        )
    }
}

export default Header