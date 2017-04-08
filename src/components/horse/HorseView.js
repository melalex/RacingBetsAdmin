/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, FormGroup, Label} from "reactstrap";
import {dateFromTimestampForm, fullName} from '../../util'

export default class HorseView extends Component {

    render() {
        let {id, name, owner, trainer, birthday, gender} = this.props.entity;

        return (
            <Form>
                <FormGroup row>
                    <Label for="id" sm={2}>Id</Label>
                    <Col sm={10}>
                        <p name="id" id="id" className="form-control-static">{id}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <p name="name" id="name" className="form-control-static">{name}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="owner" sm={2}>Owner</Label>
                    <Col sm={10}>
                        <p name="owner" id="owner" className="form-control-static">{fullName(owner)}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="trainer" sm={2}>Trainer</Label>
                    <Col sm={10}>
                        <p name="trainer" id="trainer" className="form-control-static">{fullName(trainer)}</p>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="birthday" sm={2}>Birthday</Label>
                    <Col sm={10}>
                        <p name="birthday" id="birthday" className="form-control-static">{dateFromTimestampForm(birthday)}</p>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="gender" sm={2}>Gender</Label>
                    <Col sm={10}>
                        <p name="gender" id="gender" className="form-control-static">{gender}</p>
                    </Col>
                </FormGroup>

            </Form>

        );
    }
};

HorseView.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        trainer: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            birthday: PropTypes.number,
        }),
        owner: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            birthday: PropTypes.number,
        }),
        birthday: PropTypes.number,
        gender: PropTypes.string
    }),
};