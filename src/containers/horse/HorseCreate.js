/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import HorseForm from '../../components/horse/HorseForm'
import {connect} from 'react-redux'
import {createHorse} from '../../actions/Horse'

class HorseCreate extends React.Component {
    render() {
        return (
            <HorseForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createHorse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseCreate)