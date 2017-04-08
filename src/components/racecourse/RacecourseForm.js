/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';

export default class RacecourseForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity === undefined) ? 0 : this.props.entity.id;
        this.props.onSave({
            id: id,
            name: values.name,
            latitude: values.latitude,
            longitude: values.longitude,
            contact: values.contact,
            clerk: values.clerk,
        })
    }

    render() {
        let {name, latitude, longitude, contact, clerk} = this.props.entity === undefined ? {} : this.props.entity;

        return (
            <AvForm onValidSubmit={this.onSave.bind(this)}>
                <AvGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <AvField type="text" name="name" id="name" placeholder="Racecourse's name"
                                 value={name}
                                 minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>

                <AvGroup row>
                    <Label for="latitude" sm={2}>Latitude</Label>
                    <Col sm={10}>
                        <AvField type="number" name="latitude" id="latitude" placeholder="Racecourse's latitude"
                                 value={latitude}
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="longitude" sm={2}>Longitude</Label>
                    <Col sm={10}>
                        <AvField type="number" name="longitude" id="longitude" placeholder="Racecourse's longitude"
                                 value={longitude}
                                 required/>
                    </Col>
                </AvGroup>

                <AvGroup row>
                    <Label for="contact" sm={2}>Contact</Label>
                    <Col sm={10}>
                        <AvField type="text" name="contact" id="contact" placeholder="Racecourse's contact"
                                 value={contact}
                                 minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="clerk" sm={2}>Clerk</Label>
                    <Col sm={10}>
                        <AvField type="text" name="clerk" id="clerk" placeholder="Racecourse's clerk"
                                 value={clerk}
                                 minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>

                <FormGroup check row>
                    <Col sm={{size: 10, offset: 2}}>
                        <Button outline color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </AvForm>
        );
    }
};

RacecourseForm.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        contact: PropTypes.string,
        clerk: PropTypes.string,
    }),
    onSave: PropTypes.func.isRequired,
};