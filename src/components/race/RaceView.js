/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, Form, Label, FormGroup} from 'reactstrap';
import {dateTimeFromTimestamp} from '../../util'
import ParticipantView from './ParticipantView'

export default class RaceView extends Component {

    render() {
        let {
            id,
            name,
            racecourse,
            start,
            minBet,
            commission,
            trackCondition,
            raceType,
            raceStatus,
            minAge,
            minRating,
            maxRating,
            distance,
            participants,
            prizes
        } = this.props.entity;

        participants = participants ? participants : [];
        prizes = prizes ? prizes : [];
        racecourse = racecourse ? racecourse : {};

        let participantsView = participants.map((e, i) => <ParticipantView key={i} entity={e} index={i}/>);

        let prizesView = Object.values(prizes).map((e, i) => {
            return (
                <FormGroup key={'prize#' + (i + 1)} row>
                    <Label for={'' + i} sm={2}>{'Prize #' + (i + 1)}</Label>
                    <Col sm={10}>
                        <p name={'' + i} className="form-control-static">{e}</p>
                    </Col>
                </FormGroup>
            )
        });

        return (
            <div className="big-margin-bot">
                <h2 className="big-margin-top">Race properties</h2>
                <hr/>

                <Form>
                    <FormGroup row>
                        <Label for="id" sm={2}>Id</Label>
                        <Col sm={10}>
                            <p name="id" id="id" className="form-control-static">{id}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <p name="name" className="form-control-static">{name}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="racecourse" sm={2}>Racecourse</Label>
                        <Col sm={10}>
                            <p name="racecourse" className="form-control-static">{racecourse.id}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="start" sm={2}>Start</Label>
                        <Col sm={10}>
                            <p name="start" className="form-control-static">{dateTimeFromTimestamp(start)}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="minBet" sm={2}>Min bet</Label>
                        <Col sm={10}>
                            <p name="minBet" className="form-control-static">{minBet}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="commission" sm={2}>Commission</Label>
                        <Col sm={10}>
                            <p name="commission" className="form-control-static">{commission}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="trackCondition" sm={2}>Track condition</Label>
                        <Col sm={10}>
                            <p name="trackCondition" className="form-control-static">{trackCondition}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="raceType" sm={2}>Race type</Label>
                        <Col sm={10}>
                            <p name="raceType" className="form-control-static">{raceType}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="raceStatus" sm={2}>Race status</Label>
                        <Col sm={10}>
                            <p name="raceStatus" className="form-control-static">{raceStatus}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="minAge" sm={2}>Min age</Label>
                        <Col sm={10}>
                            <p name="minAge" className="form-control-static">{minAge}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="minRating" sm={2}>Min Rating</Label>
                        <Col sm={10}>
                            <p name="minRating" className="form-control-static">{minRating}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="maxRating" sm={2}>Max Rating</Label>
                        <Col sm={10}>
                            <p name="maxRating" className="form-control-static">{maxRating}</p>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="distance" sm={2}>Distance</Label>
                        <Col sm={10}>
                            <p name="distance" className="form-control-static">{distance}</p>
                        </Col>
                    </FormGroup>
                </Form>

                <h2 className="big-margin-top">Prizes</h2>
                <hr/>
                <Form>
                    {prizesView}
                </Form>

                <h2 className="big-margin-top">Participants</h2>
                <hr/>
                {participantsView}

            </div>
        );
    }
};

RaceView.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        racecourse: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            contact: PropTypes.string,
            clerk: PropTypes.string,
        }),
        start: PropTypes.number,
        minBet: PropTypes.number,
        commission: PropTypes.number,
        trackCondition: PropTypes.string,
        raceType: PropTypes.string,
        raceStatus: PropTypes.string,
        minAge: PropTypes.number,
        minRating: PropTypes.number,
        maxRating: PropTypes.number,
        distance: PropTypes.number,
        participants: PropTypes.array,
        prizes: PropTypes.object
    }).isRequired,
};