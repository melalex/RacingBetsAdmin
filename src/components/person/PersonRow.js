/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName} from '../../util'
import {Button, Col, Row} from 'reactstrap'
import Delete from '../shared/DeleteModal'
import {dateFromTimestamp} from "../../util";
import {Link} from "react-router";

export default class PersonRow extends Component {

    render() {
        let id = this.props.entity.id;
        let type = this.props.type;
        return (
            <tr>
                <td>{id}</td>
                <td>{fullName(this.props.entity)}</td>
                <td>{dateFromTimestamp(this.props.entity.birthday)}</td>
                <td>
                    <Row>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/" + type + "/view/" + id}
                                  className="btn btn-outline-info">View</Link>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Link type="button" to={"/" + type + "/edit/" + id}
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

PersonRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.number.isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};