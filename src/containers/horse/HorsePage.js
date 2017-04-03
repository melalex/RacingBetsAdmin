/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import * as actions from '../../actions/Horse'
import HorseList from '../../components/horse/HorseList'

export default class HorsePage extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Horses</BreadcrumbItem>
                </Breadcrumb>
                {}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        content: state.crud.content,
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        entityActions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorsePage)