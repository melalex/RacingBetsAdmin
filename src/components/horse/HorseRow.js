/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName, dateFromTimestamp} from '../../util'
import {Row, Col} from 'reactstrap'
import Delete from '../shared/DeleteModal'
import {Link} from "react-router";

export default class HorseRow extends Component {

    render() {
        let {id, name, trainer, owner, birthday, gender} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{fullName(trainer)}</td>
                <td>{fullName(owner)}</td>
                <td>{dateFromTimestamp(birthday)}</td>
                <td>{gender}</td>
                <td>
                    <Row>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/horse/view/" + id} className="btn btn-outline-info">View</Link>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/horse/edit/" + id} className="btn btn-outline-primary">Edit</Link>
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

HorseRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        trainer: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.number,
        }).isRequired,
        owner: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.number,
        }).isRequired,
        birthday: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};