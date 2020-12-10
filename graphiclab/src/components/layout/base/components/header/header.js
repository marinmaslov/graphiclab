/**
 * Header component 
 */
import React from "react"

import "./header.css"

import Logo from "./logo/logo"
import Menu from "./menu/wide-screen/menu"
import SmallMenu from "./menu/small-screen/menu"

const Header = ({ }) => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <Logo/>
                    <Menu/> 
                    <SmallMenu/> 
                </div>
            </header>
        </>
    )
}

export default Header