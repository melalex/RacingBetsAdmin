/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import OwnerForm from '../../components/owner/OwnerForm'
import {connect} from 'react-redux'
import {createOwner} from '../../actions/Owner'
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router";

class OwnerCreate extends React.Component {

    componentWillMount() {
        this.isProgressShown = false;
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
        this.progress();
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/owner/list">Owners</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Create</BreadcrumbItem>
                </Breadcrumb>

                <OwnerForm onSave={this.props.onSave}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(createOwner, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerCreate)