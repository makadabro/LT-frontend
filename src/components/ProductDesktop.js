import React, { Component } from 'react'
import 'react-id-swiper/lib/styles/css/swiper.css';
import Swiper from 'react-id-swiper'
import axios from 'axios'
import '../index.css'
import { UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap'

export default class ProductDesktop extends Component {
    state = {
        image:[]
    }

    componentDidMount(){
        axios.get(process.env.REACT_APP_API_URL + '/images/' + this.props.match.params.id)
            .then(res => {
                this.setState({ 
                    ...this.state,
                    image: res.data 
                })
            })
            .catch(err => console.log('Error: ' + err))
    }

    handleClick = () =>{
        window.location = '/contact'
    }

    showInfo = () =>{
        const info = document.getElementById('info');
        info.classList.toggle('hide');
    }

     params = {
        effect: 'coverflow',
        grabCursor: true,
         loop: true,
         coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
         navigation: {
            nextEl: '.swiper-button-next.swiper-button-white',
            prevEl: '.swiper-button-prev.swiper-button-white',
          },
      }

    render() {
            console.log(this.state.image);
            if(this.state.image){
                const { name, description, price, size, url, url1, url2, url3, url4, url5 } = this.state.image;
             
            if(url5) {
                return(
                    <>
                <Swiper {...this.params}>
                    <div >
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url1} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url2} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url3} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url4} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url5} alt=""/>
                    </div>
                </Swiper>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="top">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                )
            }else if(url4){
                return(
                    <>
                    <Swiper {...this.params}>
                    <div >
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url1} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url2} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url3} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url4} alt=""/>
                    </div>
                    </Swiper>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="top">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                )
            }else if(url3){
                return(
                    <>
                    <Swiper {...this.params}>
                    <div >
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url1} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url2} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url3} alt=""/>
                    </div>
                    </Swiper>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="top">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                )
            }else if(url2){
                return(
                    <>
                    <Swiper {...this.params}>
                    <div >
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url1} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url2} alt=""/>
                    </div>
                    </Swiper>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="top">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                )
            }else if(url1){
                return(
                    <>
                    <Swiper {...this.params} id="swiper">
                    <div >
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div >
                        <img className="slide-img" src={url1} alt=""/>
                    </div>
                    </Swiper>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="top">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                )
            }else{
                return(
                   <>
                    <div className="Card center">
                        <img className="slide-img" src={url} alt=""/>
                    </div>
                    <div className="btn-container">
                    <button onClick={this.handleClick} className="alugar">Alugar</button>
                    <button className="showInfo" id="showInfoDesktop">Info</button>
                    </div>
                    <UncontrolledPopover trigger="focus" target="showInfoDesktop" placement="bottom">
                        <PopoverHeader>{name}</PopoverHeader>
                        <PopoverBody>
                            <ul>
                                <li>R${price}</li>
                                <li>{size}</li>
                                <li>{description}</li>
                            </ul>
                        </PopoverBody>
                    </UncontrolledPopover>
                    </>
                    
                )
            }
        }
    }
}
