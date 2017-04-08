/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import TrainerForm from '../../components/trainer/TrainerForm'
import {connect} from 'react-redux'
import {createTrainer} from '../../actions/Trainer'
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router";

class TrainerCreate extends React.Component {

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
                    <BreadcrumbItem><Link to="/trainer/list">Trainers</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Create</BreadcrumbItem>
                </Breadcrumb>

                <TrainerForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createTrainer, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCreate)