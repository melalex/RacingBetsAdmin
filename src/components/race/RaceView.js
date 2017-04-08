/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, Label, FormGroup} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class RaceView extends Component {

    render() {
        let {} = this.props.entity;
        return (
            null
        );
    }
};

RaceView.propTypes = {
    entity: PropTypes.shape({
    }).isRequired,
};