/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router'

export default class TrainerForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        this.props.onSave({
            firstName: values.firstName,
            lastName: values.lastName,
            birthday: values.birthday,
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/trainer/list">Trainers</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Edit</BreadcrumbItem>
                </Breadcrumb>

                <AvForm onValidSubmit={this.onSave} model={this.props.entity}>
                    <AvFormGroup row>
                        <Label for="firstName" sm={2}>First name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="firstName" id="firstName" placeholder="Trainer's first name"
                                     minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="lastName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="lastName" id="lastName" placeholder="Trainer's last Name"
                                     minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="birthday" sm={2}>Birthday</Label>
                        <Col sm={10}>
                            <AvField type="date" name="birthday" id="birthday" required/>
                        </Col>
                    </AvFormGroup>
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

TrainerForm.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.date.isRequired,
    }),
    onSave: PropTypes.func.isRequired,
};