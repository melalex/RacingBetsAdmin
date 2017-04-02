/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from 'reactstrap';
import fullName from '../../util/fullName'

export default class HorseView extends Component {
    render() {
        let {id, name, trainer, owner, birthday, gender} = this.props.entity;
        return (
            <Table>
                <tbody>
                    <th>
                        <td>Id</td>
                        <td>{id}</td>
                    </th>
                    <th>
                        <td>Name</td>
                        <td>{name}</td>
                    </th>
                    <th>
                        <td>Trainer</td>
                        <td>{fullName(trainer)}</td>
                    </th>
                    <th>
                        <td>Owner</td>
                        <td>{fullName(owner)}</td>
                    </th>
                    <th>
                        <td>Birthday</td>
                        <td>{birthday}</td>
                    </th>
                    <th>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </th>
                </tbody>
            </Table>
        );
    }
};

HorseView.propTypes	=	{
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
};