 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button} from 'reactstrap';
import {Link} from 'react-router'

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
                    <Link to={'/racecourse/view/' + id} className="btn-outline-info">View</Link>
                    <Link to={'/racecourse/edit/' + id} className="btn-outline-primary">Edit</Link>
                    <Button outline color="danger" onClick={e => this.onClickDelete(e, id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}

 RacecourseRow.propTypes = {
     entity: PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string.isRequired,
         latitude: PropTypes.float.isRequired,
         longitude: PropTypes.float.isRequired,
         contact: PropTypes.string.isRequired,
         clerk: PropTypes.string.isRequired,
     }),
    deleteEntity: PropTypes.func.isRequired,
};