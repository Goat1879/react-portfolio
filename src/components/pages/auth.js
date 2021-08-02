import React, { Component } from "react";
import Login from "../auth/login"
import loginImg from "../../../static/assets/images/auth/login.jpg"

export default class Auth extends Component {
    render() {
        return ( 
        <div className="auth-page-wrapper">
            <div
                className="Left-column"
                style={{
                    backgroundImage: `url(${loginImg})`
                }}    
            />

            <div className="right-column">
                <Login />     
            </div>
        </div>    
        );
    }
}