/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Loading from 'react-loading-animation'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {updateRacecourse, getOneRacecourse} from '../../actions/Racecourse'

class RacecourseView extends React.Component {
    componentDidMount() {
        this.props.getOne(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id)
        }
    }

    render() {
        let {entity, isFetching} = this.props;
        let {id, name, latitude, longitude, contact, clerk} = entity;
        return (
            isFetching ? (
                <Loading/>
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

function mapStateToProps(state, ownProps) {
    return {
        entity: state.crud.entity,
        isFetching: state.crud.isFetching,
        id: ownProps.params.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(updateRacecourse, dispatch),
        getOne: bindActionCreators(getOneRacecourse, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RacecourseView)