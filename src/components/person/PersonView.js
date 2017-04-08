/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, Label, FormGroup} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class PersonView extends Component {

    render() {
        let {id, firstName, lastName, birthday} = this.props.entity;
        return (
            <Form>
                <FormGroup row>
                    <Label for="id" sm={2}>Id</Label>
                    <Col sm={10}>
                        <p name="id" id="id" className="form-control-static">{id}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="firstName" sm={2}>First name</Label>
                    <Col sm={10}>
                        <p name="firstName" id="firstName" className="form-control-static">{firstName}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="lastName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <p name="lastName" id="lastName" className="form-control-static">{lastName}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="birthday" sm={2}>Birthday</Label>
                    <Col sm={10}>
                        <p name="birthday" id="birthday" className="form-control-static">{dateFromTimestampForm(birthday)}</p>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
};

PersonView.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.number.isRequired,
    }).isRequired,
};