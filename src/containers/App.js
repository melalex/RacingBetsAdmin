/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signOut} from '../actions/AppUser'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav, UncontrolledAlert} from 'reactstrap';

class App extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.signOut();
    }

    render() {
        let {errors, info} = this.props;
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
                {
                    errors.length > 0
                        ? errors.map(e => <UncontrolledAlert color="danger"><strong>{e}</strong></UncontrolledAlert>)
                        : null
                }
                {
                    info ? (<UncontrolledAlert color="success"><strong>{info}</strong></UncontrolledAlert>) : null
                }
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.crud.errors,
        info: state.crud.info,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(signOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)