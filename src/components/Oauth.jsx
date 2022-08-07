// IMPORT REACT
import { useState, useEffect } from 'react';
import React from 'react'



// IMPORT CSS
import '../static//Oauth.css';



const Oauth = (props) => {
    return (
        <li className="links__item">
            <a className="links__link" href={props.redirect_uri}>
                <img className="links__icon" src={props.url} alt={props.service_name}/>
                <span className="links__text">Sign In Using {props.service_name}</span>
            </a>
        </li>
    )
}

export default Oauth