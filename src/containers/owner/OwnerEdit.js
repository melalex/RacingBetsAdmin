/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import Loading from 'react-loading-animation'
import {connect} from 'react-redux'
import OwnerForm from '../../components/owner/OwnerForm'
import {bindActionCreators} from 'redux'
import {updateOwner, getOneOwner} from '../../actions/Owner'

class OwnerEdit extends React.Component {
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
                <OwnerForm onSave={this.props.onSave} entity={this.props.entity}/>
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
        onSave: bindActionCreators(updateOwner, dispatch),
        getOne: bindActionCreators(getOneOwner, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerEdit)