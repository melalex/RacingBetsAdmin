/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HorseForm from '../../components/horse/HorseForm'
import {updateHorse} from '../../actions/Horse'

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
            <HorseForm onSave={this.props.onSave} entity={{}}/>
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
        onSave: bindActionCreators(updateHorse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseEdit)