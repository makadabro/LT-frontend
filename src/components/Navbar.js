import React, { Component } from 'react'
import { Navbar, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../index.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar">
                    <NavbarBrand className="navbar-brand" href='/'>Lojinha da Trupe</NavbarBrand>
                            <Nav className="ml-auto">
                            <div className="n">
                                <NavItem>
                                    <NavLink href='/'>Roupas</NavLink>
                                </NavItem>
                                </div>
                                <NavItem>
                                    <NavLink href='/contact' >Contato</NavLink>
                                </NavItem>
                            </Nav>
                </Navbar>
            </div>
        )
    }
}
