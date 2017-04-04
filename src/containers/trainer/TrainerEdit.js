/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {connect} from 'react-redux'
import Loading from 'react-loading-animation'
import TrainerForm from '../../components/trainer/TrainerForm'
import {bindActionCreators} from 'redux'
import {updateTrainer, getOneTrainer} from '../../actions/Trainer'

class TrainerEdit extends React.Component {
    componentDidMount() {
        this.props.getOne(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id)
        }
    }

    render() {
        return (
            this.props.isFetching ? (
                <Loading/>
            ) : (
                <TrainerForm onSave={this.props.onSave} entity={this.props.entity}/>
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
        onSave: bindActionCreators(updateTrainer, dispatch),
        getOne: bindActionCreators(getOneTrainer, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainerEdit)