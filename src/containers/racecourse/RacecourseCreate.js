/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import RacecourseForm from '../../components/racecourse/RacecourseForm'
import {connect} from 'react-redux'
import {createRacecourse} from '../../actions/Racecourse'

class RacecourseCreate extends React.Component {
    render() {
        return (
            <RacecourseForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createRacecourse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RacecourseCreate)