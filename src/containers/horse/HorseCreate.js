/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HorseForm from '../../components/horse/HorseForm'
import {createHorse} from '../../actions/Horse'
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router";

class HorseEdit extends React.Component {

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
                    <BreadcrumbItem><Link to="/horse/list">Horses</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Create</BreadcrumbItem>
                </Breadcrumb>
                <HorseForm onSave={this.props.onSave} entity={{}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.crud.fetching,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(createHorse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseEdit)