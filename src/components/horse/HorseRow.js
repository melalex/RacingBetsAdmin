 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName} from '../../util'
import {Button} from 'reactstrap';
import {Link} from 'react-router'

export default class HorseRow extends Component {

    onClickDelete(id) {
        this.props.deleteEntity(id);
    }

    render() {
        let {id, name, trainer, owner, birthday, gender} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{fullName(trainer)}</td>
                <td>{fullName(owner)}</td>
                <td>{birthday}</td>
                <td>{gender}</td>
                <td>
                    <Link to={'/horse/view/' + id} className="btn-outline-info">View</Link>
                    <Link to={'/horse/edit/' + id} className="btn-outline-primary">Edit</Link>
                    <Button outline color="danger" onClick={() => this.onClickDelete(id)}>Delete</Button>
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
            birthday: PropTypes.instanceOf(Date),
        }).isRequired,
        owner: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.instanceOf(Date),
        }).isRequired,
        birthday: PropTypes.instanceOf(Date).isRequired,
        gender: PropTypes.string.isRequired
    }).isRequired,
    deleteEntity: PropTypes.func.isRequired,
};