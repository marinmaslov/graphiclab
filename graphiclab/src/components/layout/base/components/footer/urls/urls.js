/**
 * Urls component that is part of the site Footer
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBalanceScale, faBullhorn } from '@fortawesome/free-solid-svg-icons'

import { Link } from "gatsby"

const Urls = ({ }) => {
    return (
        <>
        <div class="urls">
            <div class="section">
                <h3><i><FontAwesomeIcon icon={ faBuilding }/></i>Company</h3>
                <Link className="menu-item" to="/about/">
                    <p>About us</p>
                </Link>
                <Link className="menu-item" to="/contacts/">
                    <p>Contact us</p>
                </Link>
            </div>
            <div class="section">
                <h3><i><FontAwesomeIcon icon={ faBullhorn }/></i>Community</h3>
                <Link className="menu-item" to="/blog/">
                    <p>GraphicLab's blog</p>
                </Link>
                <a href="https://www.youtube.com/user/breakdesignsco"><p>Vlog</p></a>
            </div>
            <div class="section">
                <h3><i><FontAwesomeIcon icon={ faBalanceScale }/></i>Legal</h3>
                <Link className="menu-item" to="/privacy-policy/">
                    <p>Privacy Policy</p>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Urls