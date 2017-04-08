/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, FormGroup, Label} from "reactstrap";

export default class RacecourseView extends Component {

    render() {
        let {id, name, latitude, longitude, contact, clerk} = this.props.entity;
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
                    <Label for="latitude" sm={2}>Latitude</Label>
                    <Col sm={10}>
                        <p name="latitude" id="latitude" className="form-control-static">{latitude}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="longitude" sm={2}>Longitude</Label>
                    <Col sm={10}>
                        <p name="longitude" id="longitude" className="form-control-static">{longitude}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="contact" sm={2}>Contact</Label>
                    <Col sm={10}>
                        <p name="contact" id="contact" className="form-control-static">{contact}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="clerk" sm={2}>Clerk</Label>
                    <Col sm={10}>
                        <p name="clerk" id="longitude" className="form-control-static">{clerk}</p>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
};

RacecourseView.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        contact: PropTypes.string.isRequired,
        clerk: PropTypes.string.isRequired,
    }).isRequired,
};