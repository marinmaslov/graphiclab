/**
 * Menu component of Header
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { isLoggedIn, logout  } from "../../../../../../login/services/auth"

import { Link, navigate } from "gatsby"

const Menu = ({ }) => {
    return (
        <div className="desktop-menu">
            <div id="desktop-menu" className="nav">
                <ul class="list">
                    <li>
                        <Link className="menu-item" to="/">
                            {/* <FontAwesomeIcon icon={ faHome }/> */}
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/blog/">
                            {/* <FontAwesomeIcon icon={ faBook }/> */}
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/contacts/">
                            {/* <FontAwesomeIcon icon={ faAddressBook }/> */}
                            Contacts
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/about/">
                            {/* <FontAwesomeIcon icon={ faInfoCircle }/> */}
                            About
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="menu-item shop" to="/store/">
                            <FontAwesomeIcon icon={ faShoppingCart }/><span>Store</span>
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn() ? (
                            <Link className="menu-item login" to="/" onClick={event => {
                                logout(() => navigate(`/logout/`))
                            }}>
                                <FontAwesomeIcon icon={ faSignOutAlt }/><span>Log out</span>
                            </Link>
                        ) : (
                            <Link className="menu-item login" to="/login/">
                                <FontAwesomeIcon icon={ faUser }/><span>Log in</span>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Menu