/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import JockeyForm from '../../components/jockey/JockeyForm'
import {connect} from 'react-redux'
import {createJockey} from '../../actions/Jockey'

class JockeyCreate extends React.Component {
    render() {
        return (
            <JockeyForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createJockey, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JockeyCreate)