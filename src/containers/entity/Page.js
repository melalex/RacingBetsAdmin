/**
 * Created by melalex on 4/8/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, Button, Container, Row, Col} from 'reactstrap';
import {route} from "../../util";


export default function page(name, Component, get, search, remove) {

    class Page extends React.Component {

        constructor(props) {
            super(props);
            this.fetchEntities = this.fetchEntities.bind(this);
            this.search = this.search.bind(this);
            this.progress = this.progress.bind(this);
        }

        componentWillMount() {
            this.isProgressShown = false;
        }

        componentDidMount() {
            this.fetchEntities(1)
        }

        fetchEntities(page) {
            if (this.searchString.value) {
                this.props.search(this.searchString.value, page)
            } else {
                this.props.getAll(page)
            }
        }

        search(e) {
            e.preventDefault();
            this.fetchEntities(1)
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
            let {content, page, count, limit, searchString} = this.props;

            this.progress();

            return (
                <div>
                    <h1>{name}</h1>

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{name}</BreadcrumbItem>
                    </Breadcrumb>

                    <Container>
                        <Row>
                            <Col md={4}>
                                <form onSubmit={this.search}>
                                    <div className="input-group">
                                        <input type="text" defaultValue={searchString}
                                               className="form-control"
                                               placeholder="Search for..." ref={input => this.searchString = input}/>
                                        <span className="input-group-btn">
                                    <button className="btn btn-primary" type="submit">Search</button>
                                    </span>
                                    </div>
                                </form>
                            </Col>
                            <Col md={{size: 2}}>
                                <Button href={route(name, 'create')} outline color="primary">
                                    Create
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                    <Component {...this.props} entities={content} page={page} limit={limit} count={count}
                               deleteEntity={this.props.deleteEntity} fetchEntities={this.fetchEntities}/>
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
            fetching: state.crud.fetching
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getAll: bindActionCreators(get, dispatch),
            search: bindActionCreators(search, dispatch),
            deleteEntity: bindActionCreators(remove, dispatch),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Page)
}