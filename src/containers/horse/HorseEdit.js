/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';
import {connect} from 'react-redux'

export default class HorseEdit extends React.Component {

    onSave(event, values) {
        event.preventDefault();
        this.props.onSave({
            name: values.name,
            trainer: values.trainer.id,
            owner: values.owner.id,
            birthday: values.birthday,
            gender: values.gender
        })
    }

    render() {
        let {entity, isFetching} = this.props;
        return (
            isFetching ? (
                <h3>Loading...</h3>
            ) : (
                <AvForm onValidSubmit={this.onSave} model={entity}>
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
            )
        );
    }
};

function mapStateToProps(state) {
    return {
        entity: state.entity,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(HorseEdit)