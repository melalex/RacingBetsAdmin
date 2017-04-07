/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {Table, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {fullName, dateFromTimestamp} from '../../util'
import {connect} from 'react-redux'
import {getOneHorse} from '../../actions/Horse'
import {Link} from 'react-router'

class HorseView extends React.Component {
    componentWillMount() {
        this.props.getOne(this.props.id);
        this.firstFetch = true;
        this.isProgressShown = false;
    }

    componentDidMount() {
        this.firstFetch = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id)
        }
    }

    progress() {
        if (this.props.fetching) {
            this.props.showProgress();
            this.isProgressShown = true
        } else if (this.isProgressShown) {
            this.props.hideProgress();
            this.isProgressShown = false
        }
    }

    render() {
        let {entity, fetching} = this.props;
        let {id, name, trainer, owner, birthday, gender} = entity;

        this.progress();

        return (
            fetching || this.firstFetch ? (
                <h1 className="text-center no-result-text">Nothing to show</h1>
            ) : (
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
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
                            <td>{dateFromTimestamp(birthday)}</td>
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
        fetching: state.crud.fetching,
        id: ownProps.params.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getOne: bindActionCreators(getOneHorse, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorseView)