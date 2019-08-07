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
                    <p><FontAwesomeIcon icon={faWhatsapp} size="lg"/>: (18) 996241620</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} size="lg"/>: (18) 996241620</p>
                    <p style={{"margin":"0"}}><a href="https://www.instagram.com/lojinhadatrupe/?hl=pt-br"><FontAwesomeIcon icon={faInstagram} size="3x"/></a></p>
                </div>

                <img alt="profile" className="profile" src="https://scontent-lga3-1.cdninstagram.com/vp/1dc78d49ffb308fb815bcceb4533d79a/5DCE116F/t51.2885-19/46789637_2305100543110209_8498865277981687808_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com"/>
            </div>
        )
    }
}
