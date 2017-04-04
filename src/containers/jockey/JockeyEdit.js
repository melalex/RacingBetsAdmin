/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import Loading from 'react-loading-animation'
import {connect} from 'react-redux'
import JockeyForm from '../../components/jockey/JockeyForm'
import {updateJockey, getOneJockey} from '../../actions/Jockey'

class JockeyEdit extends React.Component {
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
                <JockeyForm onSave={this.props.onSave} entity={this.props.entity}/>
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
        onSave: bindActionCreators(updateJockey, dispatch),
        getOne: bindActionCreators(getOneJockey, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JockeyEdit)