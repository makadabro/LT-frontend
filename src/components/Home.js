import React, { Component } from 'react'
import ImageList from './ImageList'
import "../index.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    state = {
        search:''
    }

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }
    render() {
        return (
            <div>
                 <div className="searchBar">
                        <FontAwesomeIcon size="lg" icon={faSearch}/> 
                        <input onChange={this.handleChange}/>
                </div> 
                <ImageList search={this.state.search}/>    
                <footer className="footer"><p><a href="#navbar"><FontAwesomeIcon icon={faHome} size="2x"/></a></p></footer>  
            </div>
        )
    }
}
