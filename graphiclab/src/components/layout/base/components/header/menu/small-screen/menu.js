/**
 * Menu component of Header
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faBook, faAddressBook, faInfoCircle, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

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
                <p className={`mobile-menu-icon ${this.state.isOpen ? "hide" : "show"}`} onClick={this.handleMenuButtonClick}><FontAwesomeIcon icon={ faBars }/></p>
                <nav id="mobile-menu" className={this.state.isOpen ? "show" : "hide"}>
                    <div className="content">
                        <p className="mobile-menu-icon" onClick={this.handleMenuButtonClick}><FontAwesomeIcon icon={ faTimes }/></p>
                        <br/>
                        <Link className="menu-item" to="/" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><FontAwesomeIcon icon={ faHome }/><span>Home</span></p>
                        </Link>
                        <Link className="menu-item" to="/blog" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><FontAwesomeIcon icon={ faBook }/><span>Blog</span></p>
                        </Link>
                        <Link className="menu-item" to="/contacts" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><FontAwesomeIcon icon={ faAddressBook }/><span>Contacts</span></p>
                        </Link>
                        <Link className="menu-item" to="/about" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><FontAwesomeIcon icon={ faInfoCircle }/><span>About</span></p>
                        </Link>
                        <Link className="menu-item" to="/store" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element shop"><FontAwesomeIcon icon={ faShoppingCart }/><span>Store</span></p>
                        </Link>
                        <Link className="menu-item" to="/login" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element login"><FontAwesomeIcon icon={ faUser }/><span>Login</span></p>
                        </Link>
                    </div>
                </nav>
            </>
        )
    }
}