/**
 * Created by melalex on 4/8/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {route} from "../../util";

export default function edit(name, Component, getOne) {

    class HorseEdit extends React.Component {

        componentWillMount() {
            this.isProgressShown = false;
        }

        componentDidMount() {
            this.props.getOne(this.props.id)
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
            this.progress();
            return (
                this.props.fetching ? (
                    <h1 className="text-center no-result-text">Nothing to show</h1>
                ) : (
                    <div>
                        <h1>{name}</h1>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link href={route(name, 'list')}>{name}</Link></BreadcrumbItem>
                            <BreadcrumbItem active>View</BreadcrumbItem>
                        </Breadcrumb>

                        <Component entity={this.props.entity}/>
                    </div>
                )
            )
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
            getOne: bindActionCreators(getOne, dispatch)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(HorseEdit)
}