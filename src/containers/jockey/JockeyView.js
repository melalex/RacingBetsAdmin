/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import fullName from '../../util/fullName'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class JockeyView extends React.Component {
    render() {
        let {entity, isFetching} = this.props;
        let {id, firstName, lastName, birthday} = entity;
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
                        <tr>
                            <td>Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>{birthday}</td>
                        </tr>
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

export default connect(mapStateToProps)(JockeyView)