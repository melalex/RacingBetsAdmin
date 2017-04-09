/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Form, Label, FormGroup, Jumbotron, Col, Collapse, Button} from 'reactstrap';

export default class ParticipantView extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false};

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        let {
            id,
            number,
            horse,
            carriedWeight,
            topSpeed,
            officialRating,
            odds,
            jockey,
            trainer,
            place
        } = this.props.entity;

        return (
            <div className="small-margin-top">
                <Button color="info" onClick={this.toggle} block>
                    {'Participant #' + (this.props.index + 1)}
                </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Jumbotron>
                        <Form>
                            <FormGroup row>
                                <Label for="id" sm={2}>Id</Label>
                                <Col sm={10}>
                                    <p name="id" className="form-control-static">{id}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="number" sm={2}>Number</Label>
                                <Col sm={10}>
                                    <p name="number" className="form-control-static">{number}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="horse" sm={2}>Horse</Label>
                                <Col sm={10}>
                                    <p name="horse" className="form-control-static">{horse.id}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="carriedWeight" sm={2}>Carried weight</Label>
                                <Col sm={10}>
                                    <p name="carriedWeight" className="form-control-static">{carriedWeight}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="topSpeed" sm={2}>Top speed</Label>
                                <Col sm={10}>
                                    <p name="topSpeed" className="form-control-static">{topSpeed}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="officialRating" sm={2}>Official rating</Label>
                                <Col sm={10}>
                                    <p name="officialRating" className="form-control-static">{officialRating}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="odds" sm={2}>Odds</Label>
                                <Col sm={10}>
                                    <p name="odds" className="form-control-static">{odds}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="jockey" sm={2}>Jockey</Label>
                                <Col sm={10}>
                                    <p name="jockey" className="form-control-static">{jockey}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="trainer" sm={2}>Trainer</Label>
                                <Col sm={10}>
                                    <p name="trainer" className="form-control-static">{trainer}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="place" sm={2}>Place</Label>
                                <Col sm={10}>
                                    <p name="place" className="form-control-static">{place}</p>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Jumbotron>
                </Collapse>
            </div>
        );
    }
};

ParticipantView.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        number: PropTypes.number,
        horse: PropTypes.object,
        carriedWeight: PropTypes.number,
        topSpeed: PropTypes.number,
        officialRating: PropTypes.number,
        odds: PropTypes.number,
        jockey: PropTypes.object,
        trainer: PropTypes.object,
        place: PropTypes.number,
    }).isRequired,
    index: PropTypes.number.isRequired
};