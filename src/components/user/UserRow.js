/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {fullName} from '../../util'
import UserPutMoneyModal from './UserPutMoneyModal'

export default class UserRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        let {id, login, email, balance} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{login}</td>
                <td>{email}</td>
                <td>{fullName(this.props.entity)}</td>
                <td>{balance}</td>
                <td>
                    <UserPutMoneyModal id={id} onUserPutMoney={this.props.putMoney}/>
                </td>
            </tr>
        );
    }
}

UserRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        isEmailConfirmed: PropTypes.bool.isRequired,
        balance: PropTypes.bool.isRequired,
        roles: PropTypes.array.isRequired
    }).isRequired,
    putMoney: PropTypes.func.isRequired,
};