/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import Loading from 'react-loading-animation'
import {connect} from 'react-redux'
import JockeyForm from '../../components/jockey/JockeyForm'
import {updateJockey} from '../../actions/Jockey'

class JockeyCreate extends React.Component {
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

function mapStateToProps(state) {
    return {
        entity: state.crud.entity,
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(updateJockey, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JockeyCreate)