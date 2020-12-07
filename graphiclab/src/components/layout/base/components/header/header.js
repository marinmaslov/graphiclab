/**
 * Header component 
 */
import React from "react"

import "./header.css"

import Logo from "./logo/logo"
import Menu from "./menu/wide-screen/menu"
import SmallMenu from "./menu/small-screen/menu"

import useWindowSize from "./menu/resizer/resizer"

const Header = ({ }) => {
    const { width } = useWindowSize()
    if( width >= 960 ) {
        return (
            <>
                <header id="header">
                    <div className="container">
                        <Logo/>
                        <Menu/> 
                    </div>
                </header>
            </>
        )
    } 
    return (
        <>
            <header id="header">
                <div className="container">
                    <Logo/>
                    <SmallMenu/> 
                </div>
            </header>
        </>
    )
}

export default Header