/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import RacecourseForm from '../../components/racecourse/RacecourseForm'
import {updateRacecourse, getOneRacecourse} from '../../actions/Racecourse'
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router";

class RacecourseEdit extends React.Component {

    componentWillMount() {
        this.isProgressShown = false;
    }

    componentDidMount() {
        this.props.getOne(this.props.id)
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
        this.progress();
        return (
            this.props.fetching ? (
                <h1 className="text-center no-result-text">Nothing to show</h1>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/racecourse/list">Racecourse</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Edit</BreadcrumbItem>
                    </Breadcrumb>

                    <RacecourseForm onSave={this.props.onSave} entity={this.props.entity}/>
                </div>
            )
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(RacecourseEdit)