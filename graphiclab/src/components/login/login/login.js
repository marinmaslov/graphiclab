/**
 * Banner component 
 */
import React from "react"

import { navigate } from "gatsby"

import { isLoggedIn, handleLogin  } from "../services/auth"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import "./login.css"

let errorMessage = ""

export default class Login extends React.Component {
    state = {
        username: ``,
        password: ``
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/`)
        }
        return (
            <>
            <section id="login">
                <div class="container">
                    <h2 style={{ fontSize: "3em" }}>Log into your account!</h2>
                    <div class="inner-container" style={{ maxWidth: "394px", margin: "auto"}}>
                        <form>
                            <div>
                                <label for="username"><i><FontAwesomeIcon icon={ faUser }/></i></label>
                                <input type="text" placeholder="username" name="username" onChange={this.handleUpdate} required />
                            </div>
                            <div>
                                <label for="password"><i><FontAwesomeIcon icon={ faLock }/></i></label>
                                <input type="password" placeholder="password" onChange={this.handleUpdate} name="password" />
                            </div>
                            <button type="submit" value="login" onClick={handleLogin(this.state)}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
            </>
        )
    }
}