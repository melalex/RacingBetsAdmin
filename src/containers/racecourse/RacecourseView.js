/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {updateRacecourse, getOneRacecourse} from '../../actions/Racecourse'

class RacecourseView extends React.Component {

    componentWillMount() {
        this.props.getOne(this.props.id);
        this.firstFetch = true;
        this.isProgressShown = false;
    }

    componentDidMount() {
        this.firstFetch = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id)
        }
    }

    progress() {
        if (this.props.fetching) {
            this.props.showProgress();
            this.isProgressShown = true
        } else if (this.isProgressShown) {
            this.props.hideProgress();
            this.isProgressShown = false
        }
    }


    render() {
        let {entity, fetching} = this.props;
        let {id, name, latitude, longitude, contact, clerk} = entity;
        return (
            fetching || this.firstFetch ? (
                <h1 className="text-center no-result-text">Nothing to show</h1>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
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
        fetching: state.crud.fetching,
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