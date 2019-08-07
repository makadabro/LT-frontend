import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

export default class EditProduct extends Component {

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
        expectedUsername:'Allan Kretzmann',
        expectdPassword:'9.332622e+157',
        username:'',
        password:'',
        response:'',
        image:[]
    }

    updateList = () =>{
        axios.get(process.env.REACT_APP_API_URL +  '/images/' + this.props.match.params.id)
            .then(res => {
                this.setState({ 
                    ...this.state,
                    image: res.data,
                    name:res.data.name,
                    url:res.data.url,
                    url1:res.data.url1,
                    url2:res.data.url2,
                    url3:res.data.url3,
                    url4:res.data.url4,
                    url5:res.data.url5,
                    description:res.data.description,
                    size:res.data.size,
                    price:res.data.price,
                })
            })
            .catch(err => console.log('Error: ' + err))
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
        axios.post(process.env.REACT_APP_API_URL + '/images/update/' + this.state.image._id, {
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
        .then(() => {window.location = '/admin'})
        .catch(err => alert('Provavelmente há algum campo repetido / incompleto: ' + err))
    }

    auth = (e) =>{
        e.preventDefault();
        const {username, expectedUsername, password, expectdPassword } = this.state;
        if(username === expectedUsername && password === expectdPassword){
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


    handleClick = (url) =>{
        window.location = '/product/' + url;
    }

    render() {
        if(this.state.authorized && this.state.image){
        return (
           
            <form onSubmit={this.handleSubmit}>
                    <div className="auth-div">
                        Editando {this.state.image.name}
                    </div>
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
            
        )}
        else{
           return (
               <form className="auth-form" onSubmit={this.auth}>
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
