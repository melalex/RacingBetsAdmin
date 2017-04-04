/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Loading from 'react-loading-animation'
import fullName from '../../util/fullName'
import {connect} from 'react-redux'
import {getOneHorse} from '../../actions/Horse'
import {Link} from 'react-router'

class HorseView extends React.Component {
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
        let {id, name, trainer, owner, birthday, gender} = entity;
        return (
            isFetching ? (
                <Loading/>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/horse/list">Horses</Link></BreadcrumbItem>
                        <BreadcrumbItem active>View</BreadcrumbItem>
                    </Breadcrumb>
                    <Table>
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Trainer</td>
                            <td>{fullName(trainer)}</td>
                        </tr>
                        <tr>
                            <td>Owner</td>
                            <td>{fullName(owner)}</td>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <td>{birthday}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender}</td>
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
        getOne: bindActionCreators(getOneHorse, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseView)