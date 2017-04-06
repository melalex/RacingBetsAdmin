/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn} from '../actions/AppUser'
import {Button, Row, Container, Col} from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';

class Login extends React.Component {
    signIn(e, value) {
        this.props.signIn(value.login, value.password)
    }

    render() {
        return (
            <div className="card">
                <Container>
                    <Row>
                        <Col sm={{size: 6, push: 2, pull: 2, offset: 1}}>
                            <h3 className="text-center">Sign in</h3>
                            <AvForm onValidSubmit={this.signIn.bind(this)}>
                                <AvField name="login" required minLength="1" maxLength="45"/>
                                <AvField type="password" name="password" required minLength="1" maxLength="45"/>
                                <Button color="primary" size="lg" block>Submit</Button>
                            </AvForm>
                        </Col>
                    </Row>
                </Container>
            </div>
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