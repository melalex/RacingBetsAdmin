/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signOut} from '../actions/AppUser'
import {Navbar, NavbarBrand, NavItem, NavLink, Nav, UncontrolledAlert, Collapse} from 'reactstrap';
import Progress from "react-progress-2";

class App extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.signOut();
    }

    render() {
        let {errors, info, login} = this.props;

        let children = React.Children.map(this.props.children,
            child => React.cloneElement(child, {
                showProgress: Progress.show,
                hideProgress: Progress.hide,
            })
        );
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarBrand href="/">Racing Bets Admin</NavbarBrand>
                    <Collapse isOpen={false} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink disabled>{login}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.logout.bind(this)}>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Progress.Component/>
                {
                    errors.length > 0
                        ? errors.map(e => <UncontrolledAlert color="danger"><strong>{e}</strong></UncontrolledAlert>)
                        : null
                }
                {
                    info ? (<UncontrolledAlert color="success"><strong>{info}</strong></UncontrolledAlert>) : null
                }
                <div className="container big-margin-top">
                    {children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.crud.errors,
        info: state.crud.info,
        login: state.appUser.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(signOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)