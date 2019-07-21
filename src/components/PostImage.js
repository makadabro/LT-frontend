import React, { Component } from 'react'
import axios from 'axios'
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

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
        expectedUsername:'Allan Kretzmann',
        expectdPassword:'{90518kre}',
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
        .then(() => {this.updateList(); document.getElementById('form').reset(); this.setState({
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
        const {username, expectedUsername, password, expectdPassword } = this.state;
        if(username === expectedUsername && password === expectdPassword){
            this.setState({
                ...this.state,
                authorized: true
            })  
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
                    <ButtonGroup key={image._id}>
                    <Button onClick={() => this.handleClick(image._id)}className="button">{image.name}</Button>
                    <Button onClick={()=>this.deleteImage(image._id)}className="button"id={image._id} style={{textDecoration:"bold"}}>X</Button>
                    </ButtonGroup>
                )
            })
        }else{
            list = null;
        }
        if(this.state.authorized){
        return (
            <>
            <Form id="form" onSubmit={this.handleSubmit}>
                <style>
                    {`
                        .input{
                            background-color: rgba(0,0,0,0);
                            border: 2px solid #57FFBF;
                            color: white;
                        }
                        .input:focus{
                            background-color: rgba(0,0,0,0);
                            border: 2px solid blue;
                            color: white;
                        }
                        label{
                            color: #57FFBF;
                        }
                        .button{
                            background-color: #8d22c9;
                            color:#57FFBF;
                            margin-left: 10px;
                        }
                        .button:focus{
                            background-color:#57FFBF ;
                            color:#8d22c9;
                        }
                        .button:hover{
                            background-color:#57FFBF ;
                            color:#8d22c9;
                        }
                    `}
                </style>
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input className="input" onChange={this.handleChange}type="text" id="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="size">Tamanho</Label>
                    <Input className="input"onChange={this.handleChange}type="text" id="size"/>
                </FormGroup>
                <FormGroup>
                    <Label for="price">Preço</Label>
                    <Input  className="input"onChange={this.handleChange}type="text" id="price"/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Informação adicional</Label>
                    <Input  className="input"onChange={this.handleChange}type="text" id="description"/>
                </FormGroup>
                <FormGroup>
                    <Label for="url">URL principal</Label>
                    <Input  className="input"onChange={this.handleChange}type="text" id="url"/>
                </FormGroup>
                <FormGroup>
                    <Label for="url1">URLs das fotos adicionais</Label>
                    <Input  className="input"onChange={this.handleChange}type="text" id="url1" />
                    <Input  className="input"onChange={this.handleChange}type="text" id="url2" />
                    <Input  className="input"onChange={this.handleChange}type="text" id="url3" />
                    <Input  className="input"onChange={this.handleChange}type="text" id="url4" />
                    <Input  className="input"onChange={this.handleChange}type="text" id="url5" />
                </FormGroup>
                <Button className="button" style={{fontSize:"1.5em"}}>Enviar</Button>
            </Form>
            <div style={{height:"5px", width:"100%", backgroundColor:"#57FFBF"}}/>
            {list}
            </>
        )}
        else{
           return (
               <Form onSubmit={this.auth}>
               <style>
                    {`
                        .input{
                            background-color: rgba(0,0,0,0);
                            border: 2px solid #57FFBF;
                            color: white;
                        }
                        .input:focus{
                            background-color: rgba(0,0,0,0);
                            border: 2px solid blue;
                            color: white;
                        }
                        label{
                            color: #57FFBF;
                        }
                        .button{
                            background-color: #8d22c9;
                            color:#57FFBF;
                            margin-left: 10px;
                        }
                        .button:focus{
                            background-color:#57FFBF ;
                            color:#8d22c9;
                        }
                        .button:hover{
                            background-color:#57FFBF ;
                            color:#8d22c9;
                        }
                    `}
                </style>
                   <FormGroup>
                        <Label for="username">Usuário</Label>
                        <Input className="input" onChange={this.handleChange} type="text" id="username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="url">Senha</Label>
                        <Input className="input" onChange={this.handleChange} type="password" id="password"/>
                    </FormGroup>
                    <Button className="button">Enviar</Button>                   
               </Form>
           );
        }
    }
}
