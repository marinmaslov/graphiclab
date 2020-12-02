/**
 * Menu component of Header
 */
import React from "react"

import { Link } from "gatsby"

import "./menu.css"

export default class SmallMenu extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isOpen: false,
        }
    }

    closeMenu = () => {
        this.setState({ isOpen: false })
    }

    handleMenuButtonClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isOpen } = this.state.isOpen
        return (
            <>
                <p className={`mobile-menu-icon ${this.state.isOpen ? "hide" : "show"}`} onClick={this.handleMenuButtonClick}><i class="fas fa-bars"></i></p>
                <nav id="mobile-menu" className={this.state.isOpen ? "show" : "hide"}>
                    <div className="content">
                        <p className="mobile-menu-icon" onClick={this.handleMenuButtonClick}><i class="fas fa-times"></i></p>
                        <br/>
                        <Link className="menu-item" to="/" onClick={() => this.closeMenu() }>
                            <p>Home</p>
                        </Link>
                        <Link className="menu-item" to="/blog" onClick={() => this.closeMenu() }>
                            <p>Blog</p>
                        </Link>
                        <Link className="menu-item" to="/contacts" onClick={() => this.closeMenu() }>
                            <p>Contacts</p>
                        </Link>
                        <Link className="menu-item" to="/about" onClick={() => this.closeMenu() }>
                            <p>About</p>
                        </Link>

                        <br/>
                        <Link className="menu-item" to="/store" onClick={() => this.closeMenu() }>
                            <p className="shop"><i class="fas fa-shopping-cart"></i> Store</p>
                        </Link>
                        <Link className="menu-item" to="/login" onClick={() => this.closeMenu() }>
                            <p className="login"><i class="fas fa-user"></i> Login</p>
                        </Link>
                    </div>
                </nav>
            </>
        )
    }
}