/**
 * Menu component of Header
 */
import React from "react"

import { Link } from "gatsby"

const Menu = ({ }) => {
    return (
        <div className="desktop-menu">
            <div id="desktop-menu" className="nav">
                <ul class="list">
                    <li>
                        <Link className="menu-item" to="/">
                            <i class="fas fa-home"></i><span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/blog/">
                            <i class="fas fa-book"></i><span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/contacts/">
                            <i class="fas fa-address-book"></i><span>Contacts</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/about/">
                            <i class="fas fa-info-circle"></i><span>About</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="menu-item" to="/store/">
                            <a href="/store/" class="shop"><i class="fas fa-shopping-cart"></i><span>Store</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link className="menu-item" to="/login/">
                            <a href="/" class="login"><i class="fas fa-user"></i><span>Log in</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Menu