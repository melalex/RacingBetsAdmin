/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table} from 'reactstrap';
import fullName from '../../util/fullName'
import {connect} from 'react-redux'

class HorseView extends React.Component {
    render() {
        let {entity, isFetching} = this.props;
        let {id, name, trainer, owner, birthday, gender} = entity;
        return (
            isFetching ? (
                <h3>Loading...</h3>
            ) : (
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
            )
        );
    }
}

function mapStateToProps(state) {
    return {
        entity: state.entity,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(HorseView)