 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
 import {fullName} from '../../util'
import {Button} from 'reactstrap';
import {Link} from 'react-router'

export default class JockeyRow extends Component {

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
                <td>{this.props.entity.birthday}</td>
                <td>
                    <Link to={'/jockey/view/' + id} className="btn-outline-info">View</Link>
                    <Link to={'/jockey/edit/' + id} className="btn-outline-primary">Edit</Link>
                    <Button outline color="danger" onClick={e => this.onClickDelete.bind(this)(e, id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}

 JockeyRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        birthday: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};