/**
 * Newsletter
 */
import React from "react"

import "./newsletter.css"

const Newsletter = ({ }) => {
    return (
        <section id="newsletter">
            <div className="container">
                <h2>Subscribe to our newsletter <i class="fas fa-newspaper"></i></h2>
                <form>
                    <input type="email" placeholder="example@graphiclab.com"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter