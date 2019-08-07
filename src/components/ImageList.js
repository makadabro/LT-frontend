import React, { Component } from 'react'
import axios from 'axios'
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave, faTag } from '@fortawesome/free-solid-svg-icons'

export default class ImageList extends Component {
    state ={
        images:[],
        search:''
    }
    
    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + '/images')
        .then(res => {
            this.setState({ ...this.state, images: res.data })
        })
        .catch(err => console.log(err))
    }

    handleClick = (url) =>{
        window.location = '/product/' + url;
    }
    
    render() {
        const { images } = this.state;
        const { search } = this.props;
        if(images && images.length){
            const searchQuery = images.filter(query => 
                query.name.toLowerCase().includes(search.toLowerCase())
            )
            if( searchQuery.length !== 0){
                return(
                    <>
                   
                    <div className="scrolling-wrapper">
                            {searchQuery.map(image => (
                               
                                <div key = {image._id}  className="Card">
                                    <input type="checkbox" name="" className="toggler"/>
                                    <div className="toggle">+</div>
                                    <div className="imgBox">
                                        <img src={image.url} alt=" "/>
                                    </div>
                                    <div className="details">
                                        <div className="cont">
                                            {image.name}
                                                    <div>{image.size ? <FontAwesomeIcon icon={faTag}/> : null}{image.size ? ' ' + image.size : null}</div>
                                                    <div><FontAwesomeIcon icon={faMoneyBillWave}/>{' R$' + image.price}</div>
                                            {image.description ? image.description : null}
                                            <br/>
                                                    <button className="more-btn" onClick={() => this.handleClick(image._id)}>Mais Fotos</button>
                                        </div>
                                    </div>                               
                                </div>
                            ))}
                    </div>
                    </>
                )
            } else {
                return (
                    <>
                    <h1>Não há produtos em estoque.</h1>
                    </>
                )
            }
        }
        return  <div className="loader">
        <div className="loading-spinner"></div>
        </div>;
    }
}
