/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Row} from 'reactstrap';
import Delete from '../shared/DeleteModal'
import {Link} from "react-router";

export default class RacecourseRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        let {id, name, latitude, longitude, contact, clerk} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td>{contact}</td>
                <td>{clerk}</td>
                <td>
                    <Row>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/racecourse/view/" + id}
                                  className="btn btn-outline-info">View</Link>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/racecourse/edit/" + id}
                                  className="btn btn-outline-primary">Edit</Link>
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

RacecourseRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        contact: PropTypes.string.isRequired,
        clerk: PropTypes.string.isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};