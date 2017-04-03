/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import fullName from '../../util/fullName'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class HorseView extends React.Component {
    render() {
        let {entity, isFetching} = this.props;
        let {id, name, trainer, owner, birthday, gender} = entity;
        return (
            isFetching ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/horse/list">Horses</Link></BreadcrumbItem>
                        <BreadcrumbItem active>View</BreadcrumbItem>
                    </Breadcrumb>
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
                </div>
            )
        );
    }
}

function mapStateToProps(state) {
    return {
        entity: state.crud.entity,
        isFetching: state.crud.isFetching
    }
}

export default connect(mapStateToProps)(HorseView)