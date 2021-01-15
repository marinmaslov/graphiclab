/**
 * Banner component 
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./logout.css"

export default class Logout extends React.Component {
    render() {
        return (
            <>
            <section id="logout">
                <div class="container">
                    <h2 style={{ fontSize: "3em" }}>See you next time!</h2>
                    <a href="/" class="button"><i><FontAwesomeIcon icon={ faHome }/></i>Back to Home page</a>
                </div>
            </section>
            </>
        )
    }
}