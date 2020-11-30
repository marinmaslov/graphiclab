import React from "react"

import "./404.css"

const PageNotFound = ({ }) => (
    <section id="page-not-found">
        <div class="container">
            <div class="image-1"></div>
            <div class="content">
                <h2>404</h2>
                <h3>page not found</h3>
                <p>Either you typed something wrong or aliens obducted this page.</p>
                <a href="/" class="button"><i class="fas fa-home"></i>Home page</a>
            </div>
            <div class="image-2"></div>
        </div>
        <div class="alien"></div>
    </section>
)

export default PageNotFound