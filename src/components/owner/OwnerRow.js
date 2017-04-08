/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName} from '../../util'
import {Button, Col, Row} from 'reactstrap'
import Delete from '../shared/DeleteModal'
import {dateFromTimestamp} from "../../util";

export default class OwnerRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        let id = this.props.entity.id;
        return (
            <tr>
                <td>{id}</td>
                <td>{fullName(this.props.entity)}</td>
                <td>{dateFromTimestamp(this.props.entity.birthday)}</td>
                <td>
                    <Row>
                        <Col md={{size: 2, offset: 1}}>
                            <Button outline color="info" href={"/owner/view/" + id}>
                                View
                            </Button>
                        </Col>
                        <Col md={{size: 2, offset: 1}}>
                            <Button outline color="primary" href={"/owner/edit/" + id}>
                                Edit
                            </Button>
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

OwnerRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.number.isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};