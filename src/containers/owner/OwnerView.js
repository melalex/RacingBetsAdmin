/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {getOneOwner} from '../../actions/Owner'
import {dateFromTimestamp} from "../../util";

class OwnerView extends React.Component {
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
        let {id, firstName, lastName, birthday} = entity;

        this.progress();

        return (
            fetching || this.firstFetch ? (
                <h1 className="text-center no-result-text">Nothing to show</h1>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/owner/list">Owners</Link></BreadcrumbItem>
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
                            <td>{dateFromTimestamp(birthday)}</td>
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
        getOne: bindActionCreators(getOneOwner, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerView)