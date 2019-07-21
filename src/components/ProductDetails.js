import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Nav, NavItem, CardImg, ButtonGroup, Button, UncontrolledPopover, PopoverBody } from 'reactstrap'
import '../index.css'

export default class ProductDetails extends Component {
    state = {
        image:[],
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + '/images/' + this.props.match.params.id)
            .then(res => {
                this.setState({ image: res.data })
                const { url1, url2, url3, url4, url5 } = this.state.image;
            })
            .catch(err => console.log('Error: ' + err))
    }

    handleClick = () =>{
        window.location = '/contact'
    }

    render() {
        if(this.state.image){
            const { description, price, size, url, url1, url2, url3, url4, url5 } = this.state.image;
            return (
                
                        <div className="scrolling-wrapper">
                                    <ButtonGroup>
                                        <button id="toggler">Info</button>
                                        <button onClick={this.handleClick}>Alugar</button>
                                    </ButtonGroup>
                                    <UncontrolledPopover trigger="focus" target ="toggler">
                                        
                                        <PopoverBody className="info">
                                            Aluguel: R${price}
                                            <br/>
                                            {size ? 'Tamanho: ' + size : null}
                                            <br/>
                                            {description ? description : null}
                                        </PopoverBody>
                                   
                                </UncontrolledPopover>
                            <div
                                        key = {this.state.image._id}
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={this.state.image.url}
                                    />
                            </div> 
                            {url1 ? 
                                <div
                                       
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={url1}
                                    />
                            </div> : null}
                            {url2 ? 
                                <div
                                       
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={url2}
                                    />
                            </div> : null}
                            {url3 ? 
                                <div
                                       
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={url3}
                                    />
                            </div> : null}
                            {url4 ? 
                                <div
                                       
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={url4}
                                    />
                            </div> : null}
                            {url5 ? 
                                <div
                                       
                                        className="C"
                                    >
                                    <CardImg className="img"
                                    top={true}
                                    
                                    src={url5}
                                    />
                            </div> : null}
                        </div>       
            )
        }else {return null}
    }
}
