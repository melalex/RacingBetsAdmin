/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn} from '../actions/AppUser'
import {Button, Row, Container, Col, Jumbotron, Label} from 'reactstrap';
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import horseHead from '../img/horse-head-design.png'

class Login extends React.Component {
    signIn(e, value) {
        this.props.signIn(value.login, value.password)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size: 6, push: 2, pull: 2, offset: 1}}>
                        <Jumbotron>
                            <img src={horseHead} alt="boohoo" className="img-fluid"/>
                            <h3 className="text-center small-margin-top">Racing bets admin page</h3>
                            <AvForm onValidSubmit={this.signIn.bind(this)}>
                                <AvGroup>
                                    <Label for="login">Login</Label>
                                    <AvField name="login" required minLength="1" maxLength="45"/>
                                </AvGroup>
                                <AvGroup>
                                    <Label for="password">Password</Label>
                                    <AvField type="password" name="password" required minLength="1" maxLength="45"/>
                                </AvGroup>
                                <Button color="primary" size="lg" block>Submit</Button>
                            </AvForm>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)