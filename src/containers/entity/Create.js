/**
 * Created by melalex on 4/8/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {route} from "../../util";

export default function create(name, Component, create) {

    class Create extends React.Component {

        componentWillMount() {
            this.isProgressShown = false;
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
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link href={route(name, 'list')}>{name}</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Create</BreadcrumbItem>
                    </Breadcrumb>

                    <Component onSave={this.props.onSave} entity={{}}/>
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            fetching: state.crud.fetching,
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            onSave: bindActionCreators(create, dispatch),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Create)
}