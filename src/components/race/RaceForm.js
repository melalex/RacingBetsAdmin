/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class RaceForm extends Component {

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity === undefined) ? 0 : this.props.entity.id;
        this.props.onSave({
            id: id
        })
    }

    render() {
        let {} = this.props.entity === undefined ? {} : this.props.entity;
        return (
            null
        );
    }
};

RaceForm.propTypes = {
    entity: PropTypes.shape({
    }),
    onSave: PropTypes.func.isRequired,
};