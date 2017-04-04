/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HorseForm from '../../components/horse/HorseForm'
import {updateHorse, getOneHorse} from '../../actions/Horse'
import Loading from 'react-loading-animation'

class HorseEdit extends React.Component {
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
                <HorseForm onSave={this.props.onSave} entity={this.props.entity}/>
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
        onSave: bindActionCreators(updateHorse, dispatch),
        getOne: bindActionCreators(getOneHorse, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseEdit)