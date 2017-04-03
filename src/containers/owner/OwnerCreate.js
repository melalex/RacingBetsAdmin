/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import OwnerForm from '../../components/owner/OwnerForm'
import {connect} from 'react-redux'
import {createOwner} from '../../actions/Owner'

class OwnerCreate extends React.Component {
    render() {
        return (
            <OwnerForm onSave={this.props.onSave}/>
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
        onSave: bindActionCreators(createOwner, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerCreate)