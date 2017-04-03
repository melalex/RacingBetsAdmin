/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TrainerForm from '../../components/trainer/TrainerForm'
import {updateTrainer} from '../../actions/Trainer'

class TrainerCreate extends React.Component {
    render() {
        return (
            this.props.isFetching ? (
                <h3>Loading...</h3>
            ) : (
                <TrainerForm onSave={this.props.onSave} entity={this.props.entity}/>
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
        onSave: bindActionCreators(updateTrainer, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerCreate)