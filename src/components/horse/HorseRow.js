 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName} from '../../util'
import {Button} from 'reactstrap';

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
                    <Button outline color="info" href="/horse/view/">
                        View
                    </Button>
                    <Button outline color="primary" href="/horse/edit/">
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