/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import TrainerForm from '../../components/trainer/TrainerForm'
import {connect} from 'react-redux'
import {createTrainer} from '../../actions/Trainer'

class TrainerCreate extends React.Component {
    render() {
        return (
            <TrainerForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createTrainer, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCreate)