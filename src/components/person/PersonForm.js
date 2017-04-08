/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class PersonForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity === undefined) ? 0 : this.props.entity.id;
        this.props.onSave({
            id: id,
            firstName: values.firstName,
            lastName: values.lastName,
            birthday: new Date(values.birthday).getTime(),
        })
    }

    render() {
        let {firstName, lastName, birthday} = this.props.entity === undefined ? {} : this.props.entity;
        return (
            <AvForm onValidSubmit={this.onSave.bind(this)} model={this.props.entity}>
                <AvGroup row>
                    <Label for="firstName" sm={2}>First name</Label>
                    <Col sm={10}>
                        <AvField name="firstName" id="firstName" placeholder="First name"
                                 value={firstName}
                                 minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="lastName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <AvField name="lastName" id="lastName" placeholder="Last Name"
                                 value={lastName}
                                 minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="birthday" sm={2}>Birthday</Label>
                    <Col sm={10}>
                        <AvField type="date" name="birthday" id="birthday" required
                                 value={dateFromTimestampForm(birthday)}/>
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

PersonForm.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        birthday: PropTypes.number,
    }),
    onSave: PropTypes.func.isRequired,
};