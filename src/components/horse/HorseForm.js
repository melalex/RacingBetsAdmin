/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class HorseForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity.id === undefined) ? 0 : this.props.entity.id;
        this.props.onSave({
            id: id,
            name: values.name,
            trainer: values.trainer.id,
            owner: values.owner.id,
            birthday: new Date(values.birthday).getTime(),
            gender: values.gender
        })
    }

    render() {
        return (
            <AvForm onValidSubmit={this.onSave.bind(this)} model={this.props.entity}>
                <AvGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <AvField type="text" name="name" id="name" placeholder="Horse's name" minLength="4"
                                 maxLength="45"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="trainer" sm={2}>Trainer</Label>
                    <Col sm={10}>
                        <AvField type="number" name="trainer.id" id="trainer" placeholder="Horse's trainer"
                                 min="1"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="owner" sm={2}>Trainer</Label>
                    <Col sm={10}>
                        <AvField type="number" name="owner.id" id="owner" placeholder="Horse's owner" min="1"
                                 required/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="birthday" sm={2}>Birthday</Label>
                    <Col sm={10}>
                        <AvField type="date" name="birthday" id="birthday" required
                                 value={dateFromTimestampForm(this.props.entity.birthday)}/>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Label for="gender" sm={2}>Gender</Label>
                    <Col sm={10}>
                        <AvField type="select" name="gender" id="gender">
                            <option>mare</option>
                            <option>stallion</option>
                        </AvField>
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

HorseForm.propTypes = {
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
    onSave: PropTypes.func.isRequired,
};