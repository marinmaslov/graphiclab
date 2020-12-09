/**
 * Newsletter
 */
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

import "./newsletter.css"

const Newsletter = ({ }) => {
    return (
        <section id="newsletter">
            <div className="container">
                <h2>Subscribe to our newsletter <i><FontAwesomeIcon icon={ faNewspaper }/></i></h2>
                <form>
                    <label>
                        E-mail:
                        <input type="email" placeholder="example@graphiclab.com"/>
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter