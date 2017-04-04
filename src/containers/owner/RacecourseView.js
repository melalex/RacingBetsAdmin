/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router'

class RacecourseView extends React.Component {
    render() {
        let {entity, isFetching} = this.props;
        let {id, name, latitude, longitude, contact, clerk} = entity;
        return (
            isFetching ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/racecourse/list">Racecourses</Link></BreadcrumbItem>
                        <BreadcrumbItem active>View</BreadcrumbItem>
                    </Breadcrumb>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Latitude</td>
                            <td>{latitude}</td>
                        </tr>
                        <tr>
                            <td>Longitude</td>
                            <td>{longitude}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{contact}</td>
                        </tr>
                        <tr>
                            <td>Clerk</td>
                            <td>{clerk}</td>
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

export default connect(mapStateToProps)(RacecourseView)