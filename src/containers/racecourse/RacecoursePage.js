/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Breadcrumb, BreadcrumbItem, InputGroup, InputGroupButton, Input, Button, Container, Row, Col} from 'reactstrap';
import Loading from 'react-loading-animation'
import {getRacecourses, searchRacecourse, deleteRacecourse} from '../../actions/Racecourse'
import RacecourseList from '../../components/racecourse/RacecourseList'

export default class RacecoursePage extends React.Component {
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
                <h1>Racecourses</h1>

                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Racecourses</BreadcrumbItem>
                </Breadcrumb>

                <Container>
                    <Row>
                        <Col md={4}>
                            <InputGroup>
                                <Input type="text" ref={(input) => this.searchString = input} value={searchString}/>
                                <InputGroupButton>
                                    <Button color="primary" onClick={this.search}>Search</Button>
                                </InputGroupButton>
                            </InputGroup>
                        </Col>
                        <Col md={{size: 2, offset: 4}}>
                            <Link to="/racecourse/create" className="btn-outline-primary">Create</Link>
                        </Col>
                    </Row>
                </Container>

                {isFetching ? (
                    <Loading/>
                ) : (
                    <RacecourseList entities={content} page={page} limit={limit} count={count}
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
        getAll: bindActionCreators(getRacecourses, dispatch),
        search: bindActionCreators(searchRacecourse, dispatch),
        deleteEntity: bindActionCreators(deleteRacecourse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RacecoursePage)