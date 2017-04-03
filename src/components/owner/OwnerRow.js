 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import fullName from '../../util/fullName'
import {Button} from 'reactstrap';
import {Link} from 'react-router'

export default class OwnerRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.entity.id}</td>
                <td>{fullName(this.props.entity)}</td>
                <td>{this.props.entity.birthday}</td>
                <td>
                    <Link to={'/owner/view/' + id} className="btn-outline-info">View</Link>
                    <Link to={'/owner/edit/' + id} className="btn-outline-primary">Edit</Link>
                    <Button outline color="danger" onClick={e => this.onClickDelete(e, id)}>Delete</Button>
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
        birthday: PropTypes.date.isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};