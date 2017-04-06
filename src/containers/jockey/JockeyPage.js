/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, InputGroup, InputGroupButton, Input, Button, Container, Row, Col} from 'reactstrap';
import Loading from 'react-loading-animation'
import {getJockeys, searchJockey, deleteJockey} from '../../actions/Jockey'
import JockeyList from '../../components/jockey/JockeyList'

class JockeyPage extends React.Component {
    constructor(props) {
        super(props);
        this.fetchEntities = this.fetchEntities.bind(this);
        this.search = this.fetchEntities.bind(this);
    }

    fetchEntities(page) {
        if (this.searchString) {
            this.props.search(this.searchString, page)
        } else {
            this.props.getAll(page)
        }
    }

    search(e) {
        e.preventDefault();
        this.fetchEntities(1)
    }

    render() {
        let {content, page, count, limit, searchString, isFetching} = this.props;
        return (
            <div>
                <h1>Jockeys</h1>

                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Jockeys</BreadcrumbItem>
                </Breadcrumb>

                <Container>
                    <Row>
                        <Col md={4}>
                            <InputGroup>
                                <Input type="text" ref={(input) => this.searchString = input} value={searchString}
                                       placeholder="Type a name..."/>
                                <InputGroupButton>
                                    <Button color="primary" onClick={this.search.bind(this)}>
                                        Search
                                    </Button>
                                </InputGroupButton>
                            </InputGroup>
                        </Col>
                        <Col md={{size: 2}}>
                            <Button href="/jockey/create" outline color="primary">Create</Button>
                        </Col>
                    </Row>
                </Container>

                {isFetching ? (
                    <Loading/>
                ) : (
                    <JockeyList entities={content} page={page} limit={limit} count={count}
                                deleteEntity={this.props.deleteEntity}
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
        searchString: state.crud.searchString,
        isFetching: state.crud.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAll: bindActionCreators(getJockeys, dispatch),
        search: bindActionCreators(searchJockey, dispatch),
        deleteEntity: bindActionCreators(deleteJockey, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JockeyPage)