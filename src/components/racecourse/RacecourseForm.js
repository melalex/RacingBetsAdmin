/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router'

export default class RacecourseForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        this.props.onSave({
            name: values.name,
            latitude: values.latitude,
            longitude: values.longitude,
            contact: values.contact,
            clerk: values.clerk,
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/racecourse/list">Racecourses</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Edit</BreadcrumbItem>
                </Breadcrumb>

                <AvForm onValidSubmit={this.onSave} model={this.props.entity}>
                    <AvGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="name" id="name" placeholder="Racecourse's name"
                                     minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="latitude" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="number" name="latitude" id="latitude" placeholder="Racecourse's latitude"
                                     required/>
                        </Col>
                    </AvGroup>
                    <AvGroup row>
                        <Label for="longitude" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="number" name="longitude" id="longitude" placeholder="Racecourse's longitude"
                                     required/>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="contact" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="contact" id="contact" placeholder="Racecourse's contact"
                                     minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvGroup>
                    <AvGroup row>
                        <Label for="clerk" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="clerk" id="clerk" placeholder="Racecourse's clerk"
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
            </div>
        );
    }
};

RacecourseForm.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        contact: PropTypes.string.isRequired,
        clerk: PropTypes.string.isRequired,
    }),
    onSave: PropTypes.func.isRequired,
};