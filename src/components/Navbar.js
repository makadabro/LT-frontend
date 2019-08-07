import React, { Component } from 'react'
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav" id="navbar">
               <a href="/"><h2>lojinha da trupe</h2></a>
               <ul>
                   <li className="contact-mobile-link"><a href="/contact"><FontAwesomeIcon size="2x" icon={faPhoneAlt} color="white"/></a></li>
                   <li className="contact-desktop-link"><a href="/contact">contato</a></li>
               </ul>
            </div>
        )
    }
}
