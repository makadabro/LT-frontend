import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../index.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="Card flex center">
                <h2>Fale com a gente</h2>
               
                <div className="contact-info">
                    <p><FontAwesomeIcon icon={faWhatsapp} size="lg"/>: (18) 996241620</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} size="lg"/>: (18) 996184541</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} size="lg"/>: (18) 997087496</p>
                    <p style={{"margin":"0"}}><a href="https://www.instagram.com/lojinhadatrupe/?hl=pt-br"><FontAwesomeIcon icon={faInstagram} size="3x"/></a></p>
                </div>

                <img alt="profile" className="profile" src="../assets/Profile.jpg"/>
            </div>
        )
    }
}
