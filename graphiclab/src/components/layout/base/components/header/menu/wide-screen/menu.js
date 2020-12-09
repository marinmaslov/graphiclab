/**
 * Menu component of Header
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBook, faAddressBook, faInfoCircle, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'


import { Link } from "gatsby"

const Menu = ({ }) => {
    return (
        <div className="desktop-menu">
            <div id="desktop-menu" className="nav">
                <ul class="list">
                    <li>
                        <Link className="menu-item" to="/">
                            <FontAwesomeIcon icon={ faHome }/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/blog/">
                            <FontAwesomeIcon icon={ faBook }/>
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/contacts/">
                            <FontAwesomeIcon icon={ faAddressBook }/>
                            <span>Contacts</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/about/">
                            <FontAwesomeIcon icon={ faInfoCircle }/>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="menu-item" to="/store/">
                            <a href="/store/" class="shop"><FontAwesomeIcon icon={ faShoppingCart }/><span>Store</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/login/">
                            <a href="/" class="login"><FontAwesomeIcon icon={ faUser }/><span>Log in</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Menu