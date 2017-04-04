/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Loading from 'react-loading-animation'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {updateTrainer, getOneTrainer} from '../../actions/Trainer'

class TrainerView extends React.Component {
    componentDidMount() {
        this.props.getOne(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id)
        }
    }

    render() {
        let {entity, isFetching} = this.props;
        let {id, firstName, lastName, birthday} = entity;
        return (
            isFetching ? (
                <Loading/>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/trainer/list">Trainers</Link></BreadcrumbItem>
                        <BreadcrumbItem active>View</BreadcrumbItem>
                    </Breadcrumb>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>First name</td>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>{birthday}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            )
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainerView)