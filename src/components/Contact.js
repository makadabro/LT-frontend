import React, { Component } from 'react'
import axios from 'axios'
import '../index.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <style>
                    {`
                        .custom-card{
                            background-color:rgba(0,0,0,0);
                            border: 2px solid #57FFBF;
                            border-radius:25px;
                            margin:5px;
                        }
                        p{
                            margin: 0 auto;
                            text-size:1em;
                            width:100%;
                            text-align: center;
                        }
                        .h1{
                            margin: 0 auto;
                            font-size:1.2em;
                            width:100%;
                            text-align: center;
                            color:#57FFBF;
                        }
                        img{
                            border-radius:50%;
                            width:50%;
                            margin:0 auto;
                        }
                        center{
                            margin:10px;
                        }
                    `}
                </style>
                <div className="custom-card">
                    <p className="h1">Telefones para contato</p>
                    <p>(18)99624-1620</p>
                    <p>(18)99618-4541</p>
                    <p>(18)99708-7496</p>
                </div>
                <center>
                <img alt="profile" src="https://scontent-lga3-1.cdninstagram.com/vp/1dc78d49ffb308fb815bcceb4533d79a/5DCE116F/t51.2885-19/46789637_2305100543110209_8498865277981687808_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com"/>
                </center>        
            </div>
        )
    }
}
