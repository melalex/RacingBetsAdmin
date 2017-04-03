/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Nav} from 'reactstrap';
import alert from "bootstrap/js/src/alert";

export default class App extends Component {
    logout(e) {
        e.preventDefault();
        alert('logout')
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/">Racing Bets Admin</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            User Name
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={this.logout}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}
