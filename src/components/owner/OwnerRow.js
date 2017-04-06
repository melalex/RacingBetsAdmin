/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react';
import {fullName} from '../../util';
import {Button} from 'reactstrap';

export default class OwnerRow extends Component {

    onClickDelete(e, id) {
        this.props.deleteEntity(id);
    }

    render() {
        let id = this.props.entity.id;
        return (
            <tr>
                <td>{id}</td>
                <td>{fullName(this.props.entity)}</td>
                <td>{this.props.entity.birthday.bind(this)}</td>
                <td>
                    <Button outline color="info" href="/owner/view/">
                        View
                    </Button>
                    <Button outline color="primary" href="/owner/edit/">
                        Edit
                    </Button>
                    <Button outline color="danger" onClick={() => this.onClickDelete.bind(this)(id)}>
                        Delete
                    </Button>
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
        birthday: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};