import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default class PostImage extends Component {

    state={
        name:'',
        url:'',
        url1:'',
        url2:'',
        url3:'',
        url4:'',
        url5:'',
        description:'',
        size:'',
        price:'',
        authorized : false,
        username:'',
        password:'',
        response:'',
        images:[]
    }

    updateList = () =>{
        axios.get(process.env.REACT_APP_API_URL + '/images')
        .then(res => {
            this.setState({ ...this.state, images: res.data })
        })
        .catch(err => console.log(err))
    }
    componentDidMount(){
        this.updateList();
    }

    handleChange = (e) =>{
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/images/add', {
            name: this.state.name,
            url:this.state.url,
            url1:this.state.url1,
            url2:this.state.url2,
            url3:this.state.url3,
            url4:this.state.url4,
            url5:this.state.url5,
            description:this.state.description,
            size:this.state.size,
            price:this.state.price,
        })
        .then(() => {this.updateList(); document.getElementById('form').reset(); alert('Salvo com sucesso'); this.setState({
            ...this.state,
            name:'',
            url:'',
            url1:'',
            url2:'',
            url3:'',
            url4:'',
            url5:'',
            description:'',
            size:'',
            price:''
        })})
        .catch(err => alert('Provavelmente há algum campo repetido / incompleto: ' + err))
    }

    auth = (e) =>{
        e.preventDefault();
        const {username, password} = this.state;
        const expectedUsername = process.env.REACT_APP_USER;
        const expectedPassword = process.env.REACT_APP_PASSWORD;
        if(username === expectedUsername && password === expectedPassword){
            this.setState({
                ...this.state,
                password:'',
                username:'',
                authorized: true
            });
            this.Username.value = "";
            this.Password.value = "";
        }else{
            alert('Credenciais incorretas.');
        }
    }

    deleteImage = (id) =>{
        axios.delete(process.env.REACT_APP_API_URL + '/images/' + id)
            .then(res => {
                this.updateList();
            })
            .catch(err => alert(err))
    }

    handleClick = (url) =>{
        window.location = '/product/' + url;
    }

    render() {
        let list;
        if(this.state.images.length !== 0){
            list = this.state.images.map(image => {
                return(
                    <li key={image._id}>
                    <div className="admin-product">
                        <button onClick={() => this.handleClick(image._id)}>{image.name}</button>
                        <button onClick={() => {window.location = '/edit/' + image._id}}><FontAwesomeIcon icon={faEdit}/></button>
                        <button onClick={() => this.deleteImage(image._id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                    </li>
                )
            })
        }else{
            list = null;
        }
        if(this.state.authorized){
        return (
            <>
            <form id="form" onSubmit={this.handleSubmit} autoComplete="off">
                <input autoComplete="false" name="hidden" type="text" style={{"display":"none"}}></input>
                    <div className="auth-div">
                    <input onChange={this.handleChange}type="text" id="name" placeholder="Nome"/></div>
                    <div className="auth-div">    
                    <input onChange={this.handleChange}type="text" id="size" placeholder="Tamanho"/></div>
                    <div className="auth-div">                  
                    <input onChange={this.handleChange}type="text" id="price" placeholder="Preço"/></div>  
                    <div className="auth-div">                 
                    <input onChange={this.handleChange}type="text" id="description" placeholder="Descrição"/></div>
                    <div className="auth-div">                  
                    <input onChange={this.handleChange}type="text" id="url" placeholder="URL da foto principal"/></div>
                    <div className="auth-div">               
                    <input onChange={this.handleChange}type="text" id="url1" placeholder="URL adicional" /></div>
                    <div className="auth-div">
                    <input onChange={this.handleChange}type="text" id="url2" placeholder="URL adicional" /></div>
                    <div className="auth-div">
                    <input onChange={this.handleChange}type="text" id="url3" placeholder="URL adicional" /></div>
                    <div className="auth-div">
                    <input onChange={this.handleChange}type="text" id="url4" placeholder="URL adicional" /></div>
                    <div className="auth-div">
                    <input onChange={this.handleChange}type="text" id="url5" placeholder="URL adicional" /></div>
                    <div className="auth-div">
                    <button>Salvar</button>
                    </div>
            </form>
            <ul className="admin-product-list">
            {list}
            </ul>
            
            </>
        )}
        else{
           return (
               <form className="auth-form" onSubmit={this.auth} autoComplete="off">
               <input autoComplete="false" name="hidden" type="text" style={{"display":"none"}}></input>
                    <div className="auth-div">
                    <input id="username" type="text" onChange={this.handleChange} placeholder="Usuário" ref={el => this.Username = el}/>
                    </div>
                    <div className="auth-div">
                    <input id="password" type="password" onChange={this.handleChange} placeholder="Senha" ref={el => this.Password = el}/>
                    </div>
                    <div className="auth-div">
                    <button onClick={this.auth}>Entrar</button>
                    </div>
               </form>
           );
        }
    }
}
