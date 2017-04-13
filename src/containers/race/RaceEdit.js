/**
 * Created by melalex on 4/8/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, Button, Col, Row} from 'reactstrap';
import {startRace, rejectRace, finishRace, updateRace, getOneRace} from '../../actions/Race'
import RaceForm from "../../components/race/RaceForm";

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.onStart = this.onStart.bind(this);
        this.onReject = this.onReject.bind(this);
        this.onFinish = this.onFinish.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        this.isProgressShown = false;
    }

    componentDidMount() {
        this.props.getOne(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.getOne(nextProps.id);
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

    onStart() {
        this.props.onStart(this.form.race);
    }

    onReject() {
        this.props.onReject(this.form.race);
    }

    onFinish() {
        this.props.onFinish(this.form.race);
    }

    onUpdate() {
        this.props.onUpdate(this.form.race);
    }

    render() {
        this.progress();
        return (
            <div>
                <h1>Race</h1>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/race/list'>Race</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Edit</BreadcrumbItem>
                </Breadcrumb>

                {
                    this.props.fetching || !this.props.entity ? (
                        <h1 className="text-center no-result-text">Nothing to show</h1>
                    ) : (
                        <div>
                            <RaceForm entity={this.props.entity} ref={form => this.form = form}/>

                            <h2 className="big-margin-top">Action</h2>
                            <hr/>
                            <Row className="elem-margin big-margin-bot">
                                {
                                    this.props.entity.raceStatus === 'scheduled' ? (
                                        <Col md={{size: 4}}>
                                            <Button color="warning"
                                                    onClick={this.onStart}
                                                    outline
                                                    block>
                                                Start
                                            </Button>
                                        </Col>
                                    ) : (
                                        this.props.entity.raceStatus === 'riding' ? (
                                            <Col md={{size: 4}}>
                                                <Button color="warning"
                                                        onClick={this.onFinish}
                                                        outline
                                                        block>
                                                    Finish
                                                </Button>
                                            </Col>
                                        ) : (
                                            < Col md={{size: 4}}>

                                            </Col>
                                        )
                                    )
                                }

                                <Col md={{size: 4}}>
                                    <Button color="success"
                                            onClick={this.onUpdate}
                                            outline
                                            block>
                                        Update
                                    </Button>
                                </Col>

                                {
                                    this.props.entity.raceStatus !== 'finished'
                                    && this.props.entity.raceStatus !== 'rejected' ? (
                                        <Col md={{size: 4}}>
                                            <Button color="danger"
                                                    onClick={this.onReject}
                                                    outline
                                                    block>
                                                Reject
                                            </Button>
                                        </Col>
                                    ) : null
                                }
                            </Row>
                        </div>

                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        entity: state.crud.entity,
        fetching: state.crud.fetching,
        errors: state.crud.errors,
        id: ownProps.params.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onStart: bindActionCreators(startRace, dispatch),
        onReject: bindActionCreators(rejectRace, dispatch),
        onFinish: bindActionCreators(finishRace, dispatch),
        onUpdate: bindActionCreators(updateRace, dispatch),
        getOne: bindActionCreators(getOneRace, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
