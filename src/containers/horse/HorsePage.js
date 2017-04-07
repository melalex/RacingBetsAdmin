/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, InputGroup, InputGroupButton, Input, Button, Container, Row, Col} from 'reactstrap';
import {getHorses, searchHorse, deleteHorse} from '../../actions/Horse'
import HorseList from '../../components/horse/HorseList'

class HorsePage extends React.Component {
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

        console.log(this.props);

        this.progress();

        return (
            <div>
                <h1>Horses</h1>

                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Horses</BreadcrumbItem>
                </Breadcrumb>

                <Container>
                    <Row>
                        <Col md={4}>
                            <InputGroup>
                                <Input type="text" ref={(input) => this.searchString = input} value={searchString}
                                       placeholder="Type a name..."/>
                                <InputGroupButton>
                                    <Button color="primary" onClick={this.search}>
                                        Search
                                    </Button>
                                </InputGroupButton>
                            </InputGroup>
                        </Col>
                        <Col md={{size: 2}}>
                            <Button href="/horse/create" outline color="primary">
                                Create
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <HorseList entities={content} page={page} limit={limit} count={count}
                           deleteEntity={this.props.deleteEntity}
                           fetchEntities={this.fetchEntities}/>
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
        getAll: bindActionCreators(getHorses, dispatch),
        search: bindActionCreators(searchHorse, dispatch),
        deleteEntity: bindActionCreators(deleteHorse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HorsePage)