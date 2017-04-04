/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HorseForm from '../../components/horse/HorseForm'
import {updateHorse} from '../../actions/Horse'
import Loading from 'react-loading-animation'

class HorseEdit extends React.Component {
    render() {
        return (
            this.props.isFetching ? (
                <Loading/>
            ) : (
                <HorseForm onSave={this.props.onSave} entity={this.props.entity}/>
            )
        )
    }
}

function mapStateToProps(state) {
    return {
        entity: state.crud.entity,
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(updateHorse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseEdit)