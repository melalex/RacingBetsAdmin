/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button, Col, Row} from 'reactstrap'
import Delete from '../shared/DeleteModal'
import {dateTimeFromTimestamp} from '../../util';
import {Link} from "react-router";

export default class RaceRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        let {id, name, racecourse, start, raceStatus} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{racecourse.name}</td>
                <td>{dateTimeFromTimestamp(start)}</td>
                <td>{raceStatus}</td>
                <td>
                    <Row>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/race/view/" + id} className="btn btn-outline-info">View</Link>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/race/edit/" + id} className="btn btn-outline-primary">Edit</Link>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Delete onDelete={() => this.props.deleteEntity(id)}/>
                        </Col>
                    </Row>
                </td>
            </tr>
        );
    }
}

RaceRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        racecourse: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            contact: PropTypes.string.isRequired,
            clerk: PropTypes.string.isRequired,
        }).isRequired,
        start: PropTypes.number.isRequired,
        minBet: PropTypes.number.isRequired,
        commission: PropTypes.number.isRequired,
        trackCondition: PropTypes.string,
        raceType: PropTypes.string.isRequired,
        raceStatus: PropTypes.string.isRequired,
        minAge: PropTypes.number.isRequired,
        minRating: PropTypes.number.isRequired,
        maxRating: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
        participants: PropTypes.array.isRequired,
        prizes: PropTypes.object.isRequired
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};