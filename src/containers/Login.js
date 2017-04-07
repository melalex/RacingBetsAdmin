/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn} from '../actions/AppUser'
import {Button, Row, Container, Col, Jumbotron, Label, UncontrolledAlert} from 'reactstrap';
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import horseHead from '../img/horse-head-design.png'
import Progress from "react-progress-2";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.progress = this.progress.bind(this);
        this.signIn = this.signIn.bind(this);
        this.isProgressShown = false;
    }

    signIn(e, value) {
        this.props.signIn(value.login, value.password)
    }

    progress() {
        if (this.props.fetching) {
            Progress.show();
            this.isProgressShown = true;
        } else if (this.isProgressShown) {
            Progress.hide();
            this.isProgressShown = false;
        }
    }


    render() {
        let {errors} = this.props;
        this.progress();
        return (
            <Container>
                <Progress.Component/>
                <Row>
                    <Col sm={{size: 6, push: 2, pull: 2, offset: 1}}>
                        <Jumbotron>
                            <img src={horseHead} alt="boohoo" className="img-fluid"/>
                            <h3 className="text-center small-margin-top">Racing bets admin page</h3>
                            {
                                errors.length > 0
                                    ? errors.map((e, i) => <UncontrolledAlert key={i}
                                    color="danger"><strong>{e.message}</strong></UncontrolledAlert>)
                                    : null
                            }
                            <AvForm onValidSubmit={this.signIn}>
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

function mapStateToProps(state) {
    return {
        fetching: state.appUser.fetching,
        errors: state.appUser.errors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)