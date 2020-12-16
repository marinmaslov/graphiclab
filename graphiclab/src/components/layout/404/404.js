import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import "./404.css"

const PageNotFound = ({ }) => (
    <section id="page-not-found">
        <div class="not-found-container">
            <div class="image-1"></div>
            <div class="content">
                <h2>404</h2>
                <h3>page not found</h3>
                <p>Either you typed something wrong or aliens abducted this page.</p>
                <a href="/" class="button"><i><FontAwesomeIcon icon={ faHome }/></i>Home page</a>
            </div>
            <div class="image-2"></div>
        </div>
        <div class="alien"></div>
    </section>
)

export default PageNotFound