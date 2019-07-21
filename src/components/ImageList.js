import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Input, Button, Card, CardBody, CardImg, CardTitle, UncontrolledPopover, PopoverBody, ButtonGroup } from 'reactstrap'

import '../index.css'
import { Link } from 'react-router-dom'

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

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    handleClick = (url) =>{
        window.location = '/product/' + url;
    }
    

    render() {
        let c = 0;
        const { images, search } = this.state;
        if(images && images.length){
            const searchQuery = images.filter(query => 
                query.name.toLowerCase().includes(search.toLowerCase())
            )
            if( searchQuery.length !== 0){
                return(
                    <>
                    <Navbar>
                        <Input onChange={this.handleChange} placeholder="Pesquisar"/>
                    </Navbar>
                    <div className="scrolling-wrapper">
                            {searchQuery.map(image => (
                                c++,
                                <div
                                    key = {image._id}
                                    className="C"
                                >
                                <CardImg className="img"
                                top={true}
                                
                                src={image.url}
                                />
                                <CardBody>
                                    <CardTitle style={{color:"#57FFBF"}}><p className="card-title">{image.name}</p></CardTitle>
                                    
                                    <ButtonGroup>
                                        <button id={'t' + c.toString()}>Info</button>
        
                                        <button onClick={() => {this.handleClick(image._id)}}>+Fotos</button>
                                    </ButtonGroup>
                                    
                                    <UncontrolledPopover trigger="focus" target ={'t' + c.toString()}>
                                        
                                        <PopoverBody className="info">
                                            Aluguel: R${image.price}
                                            <br/>
                                            {image.size ? 'Tamanho: ' + image.size : null}
                                            <br/>
                                            {image.description ? image.description : null}
                                        </PopoverBody>
                                   
                                </UncontrolledPopover>
                                </CardBody>
                                </div>
                            ))}
                    </div>
                    </>
                )
            } else {
                return (
                    <>
                     <Navbar>
                        <Input onChange={this.handleChange} placeholder="Pesquisar"/>
                    </Navbar>
                    <h1>Não há produtos em estoque.</h1>
                    </>
                )
            }
        }
        return (
             <Navbar>
                        <input onChange={this.handleChange} placeholder="Pesquisar"/>
            </Navbar>
        );
    }
}
