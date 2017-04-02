/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';

export default class HorseEdit extends Component {

    onSave(event, values) {
        this.props.onSave({
            name: values.name,
            trainer: values.trainer.id,
            owner: values.owner.id,
            birthday: values.birthday,
            gender: values.gender
        })
    }

    allRecords() {
        this.props.allRecords();
    }

    render() {
        return (
            <div>
                <Col sm={{size: 2, offset: 10}}>
                    <Button outline color="secondary" onClick={() => this.allRecords()}>All horses</Button>
                </Col>

                <AvForm onValidSubmit={this.onSave} model={this.props.entity}>
                    <AvFormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="txet" name="name" id="name" placeholder="Horse's name" minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="trainer" sm={2}>Trainer</Label>
                        <Col sm={10}>
                            <AvField type="number" name="trainer.id" id="trainer" placeholder="Horse's trainer" min="1"
                                     required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="owner" sm={2}>Trainer</Label>
                        <Col sm={10}>
                            <AvField type="number" name="owner.id" id="owner" placeholder="Horse's owner" min="1"
                                     required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="birthday" sm={2}>Birthday</Label>
                        <Col sm={10}>
                            <AvField type="date" name="birthday" id="birthday" required/>
                        </Col>
                    </AvFormGroup>
                    <AvFormGroup row>
                        <Label for="gender" sm={2}>Gender</Label>
                        <Col sm={10}>
                            <AvField type="select" name="gender" id="gender" required>
                                <option>mare</option>
                                <option>stallion</option>
                            </AvField>
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

HorseEdit.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        trainer: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.date,
        }).isRequired,
        owner: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.date,
        }).isRequired,
        birthday: PropTypes.date.isRequired,
        gender: PropTypes.string.isRequired
    }),
    onSave: PropTypes.func.isRequired,
    allRecords: PropTypes.func.isRequired
};