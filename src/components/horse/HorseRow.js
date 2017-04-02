/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import fullName from '../../util/fullName'
import {Button} from 'reactstrap';
import {HORSE_MODE_VIEW, HORSE_MODE_EDIT, HORSE_MODE_DELETE} from '../../constants/Horse'

export default class HorseRow extends Component {

    onClickView(id) {
        this.props.changeMode(HORSE_MODE_VIEW, id);
    }

    onClickEdit(id) {
        this.props.changeMode(HORSE_MODE_EDIT, id);
    }

    onClickDelete(id) {
        this.props.changeMode(HORSE_MODE_DELETE, id);
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
                    <Button outline color="info" onClick={() => this.onClickView(id)}>View</Button>
                    <Button outline color="primary" onClick={() => this.onClickEdit(id)}>Edit</Button>
                    <Button outline color="danger" onClick={() => this.onClickDelete(id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}

HorseRow.propTypes	=	{
    entity:	PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        trainer: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.date,
        }).isRequired,
        owner: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            birthday: PropTypes.date,
        }).isRequired,
        birthday: PropTypes.date.isRequired,
        gender: PropTypes.string.isRequired
    }).isRequired,
    changeMode:	PropTypes.func.isRequired
};