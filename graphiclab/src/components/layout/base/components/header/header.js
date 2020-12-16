/**
 * Header component 
 */
import React from "react"

import "./header.css"

import Logo from "./logo/logo"
import Menu from "./menu/wide-screen/menu"
import SmallMenu from "./menu/small-screen/menu"
import Position from "./position/position"

const Header = ({ isVisible, parents, current, hideOnDesktop }) => {
    return (
        <>
            <header id="header">
                <div className="padding">
                    <div className="container">
                        <Logo/>
                        <Menu/> 
                        <SmallMenu/> 
                    </div>
                </div>
                <Position isVisible={isVisible} parents={parents} current={current} hideOnDesktop={hideOnDesktop}/>
            </header>
        </>
    )
}

export default Header