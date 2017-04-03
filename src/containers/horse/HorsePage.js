/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Breadcrumb, BreadcrumbItem, InputGroup, InputGroupButton, Input, Button} from 'reactstrap';
import * as actions from '../../actions/Horse'
import HorseList from '../../components/horse/HorseList'

export default class HorsePage extends React.Component {
    fetchEntities(page) {
        if (this.searchString) {
            this.props.entityActions.searchHorse(this.searchString, page)
        } else {
            this.props.entityActions.getHorses(page)
        }
    }

    search(e) {
        e.preventDefault();
        this.fetchEntities(1)
    }

    render() {
        let {content, page, count, limit, isFetching} = this.props;
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Horses</BreadcrumbItem>
                </Breadcrumb>

                <InputGroup>
                    <Input type="text" ref={(input) => this.searchString = input} value={}/>
                    <InputGroupButton>
                        <Button color="primary" onClick={this.search}>Search</Button>
                    </InputGroupButton>
                </InputGroup>


                {isFetching ? (
                    <h3>Loading...</h3>
                ) : (
                    <HorseList entities={content} page={page} limit={limit} count={count}
                               deleteEntity={this.props.entityActions.deleteHorse}
                               fetchEntities={this.fetchEntities}/>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        content: state.crud.content,
        page: state.crud.page,
        count: state.crud.count,
        limit: state.crud.limit,
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        entityActions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorsePage)