/**
 * Menu component of Header
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { Link, navigate } from "gatsby"

import { isLoggedIn, logout  } from "../../../../../../login/services/auth"

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
                            <p className="menu-item-element menu-item-plain"><span>Home</span></p>
                        </Link>
                        <Link className="menu-item" to="/blog" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><span>Blog</span></p>
                        </Link>
                        <Link className="menu-item" to="/contacts" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><span>Contacts</span></p>
                        </Link>
                        <Link className="menu-item" to="/about" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element menu-item-plain"><span>About</span></p>
                        </Link>
                        <Link className="menu-item" to="/store" onClick={() => this.closeMenu() }>
                            <p className="menu-item-element shop"><i><FontAwesomeIcon icon={ faShoppingCart }/></i><span>Store</span></p>
                        </Link>
                        
                        {isLoggedIn() ? (
                            <Link className="menu-item" to="/login" onClick={event => {
                                this.closeMenu()
                                logout(() => navigate(`/logout/`))
                            }}>
                                <p className="menu-item-element login"><i><FontAwesomeIcon icon={ faSignOutAlt }/></i><span>Log out</span></p>
                            </Link>
                        ) : (
                            <Link className="menu-item" to="/login" onClick={() => this.closeMenu() }>
                                <p className="menu-item-element login"><i><FontAwesomeIcon icon={ faUser }/></i><span>Log in</span></p>
                            </Link>
                        )}
                    </div>
                </nav>
            </>
        )
    }
}