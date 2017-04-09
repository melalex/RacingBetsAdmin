/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label, Jumbotron, Row} from 'reactstrap';
import ParticipantForm from './ParticipantForm'
import DateTimePicker from 'react-datetime'

export default class RaceForm extends Component {
    constructor(props) {
        super(props);
        let {participants, prizes} = this.props.entity === undefined ? {} : this.props.entity;

        this.state = {
            raceInfo: '',
            prizeInfo: '',
            raceProperties: RaceForm.mapRaceToProperties(this.props.entity),
            participants: RaceForm.mapParticipants(participants),
            prizes: prizes === undefined ? [null] : RaceForm.mapPrizesMapToArray(prizes),
        };

        this.onSaveRace = this.onSaveRace.bind(this);
        this.onSavePrizes = this.onSavePrizes.bind(this);
        this.onSaveParticipant = this.onSaveParticipant.bind(this);

        this.onAddParticipant = this.onAddParticipant.bind(this);
        this.onAddPrize = this.onAddPrize.bind(this);
    }

    static mapPrizesMapToArray(prizes) {
        return Object.values(prizes);
    }

    static mapRaceToProperties(race) {
        if (race) {
            return {
                ...race,
                racecourse: race.racecourse ? (race.racecourse.id ? race.racecourse.id : race.racecourse) : null
            }
        } else {
            return {}
        }
    }

    static mapParticipants(participants) {
        if (participants) {
            return participants.map(e => {
                return {
                    ...e,
                    horse: e.horse ? (e.horse.id ? e.horse.id : e.horse) : null,
                    jockey: e.jockey ? (e.jockey.id ? e.jockey.id : e.jockey) : null,
                    trainer: e.trainer ? (e.trainer.id ? e.trainer.id : e.trainer) : null
                }
            })
        } else {
            return [{}]
        }
    }

    static mapPrizesArrayToMap(prizes) {
        let result = {};
        for (let i = 0; i < prizes.length; i++) {
            result[i + 1] = prizes[i];
        }
        return result;
    }

    onSaveRace(event, values) {
        let id = (this.props.entity.id === undefined) ? 0 : this.props.entity.id;
        this.setState({
            ...this.state,
            raceInfo: 'Race properties saved successfully',
            raceProperties: {
                id: id,
                name: values.name,
                racecourse: values.racecourse,
                start: new Date(this.start.state.inputValue).getTime(),
                minBet: values.minBet,
                commission: values.commission,
                trackCondition: values.trackCondition,
                raceType: values.raceType,
                minAge: values.minAge,
                minRating: values.minRating,
                maxRating: values.maxRating,
                distance: values.distance,
            }
        });
    }

    onSaveParticipant(index, participant) {
        this.state.participants[index] = participant;
    }

    onSavePrizes(event, values) {
        this.setState({
            ...this.state,
            prizeInfo: 'Prizes saved successfully',
            prizes: RaceForm.mapPrizesMapToArray(values)
        });
    }

    onAddParticipant() {
        let participants = this.state.participants.slice();
        participants.push({});
        this.setState({
            ...this.state,
            participants: participants,
        });
    }

    onAddPrize() {
        let prizes = this.state.prizes.slice();
        prizes.push(null);
        this.setState({
            ...this.state,
            prizes: prizes
        });
    }


    get race() {
        return {
            ...this.state.raceProperties,
            participants: this.state.participants,
            prizes: RaceForm.mapPrizesArrayToMap(this.state.prizes)
        }
    }

    render() {
        let {
            name,
            racecourse,
            start,
            minBet,
            commission,
            trackCondition,
            raceType,
            minAge,
            minRating,
            maxRating,
            distance,
        } = this.state.raceProperties;

        let participants = this.state.participants.map((e, i) => <ParticipantForm key={i} index={i} entity={e}
                                                                                  onSave={this.onSaveParticipant}/>);
        let prizes = this.state.prizes.map((e, i) => {
            return (
                <AvGroup key={'prize#' + (i + 1)} row>
                    <Label for={'' + i} sm={2}>{'Prize #' + (i + 1)}</Label>
                    <Col sm={10}>
                        <AvField type="number" name={'' + i}
                                 value={e}
                                 placeholder={'Prize for participant with place ' + (i + 1)}
                                 min={0}
                                 required/>
                    </Col>
                </AvGroup>
            )
        });

        let isNew = this.props.entity.id === undefined;

        return (
            <div>
                <h2 className="big-margin-top">Race properties</h2>
                <hr/>

                <Jumbotron>
                    <AvForm onValidSubmit={this.onSaveRace} className="table-margin">
                        <AvGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <AvField type="text"
                                         name="name"
                                         value={name}
                                         placeholder="Race's name"
                                         minLength="4"
                                         maxLength="45"
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="racecourse" sm={2}>Racecourse</Label>
                            <Col sm={10}>
                                <AvField type="number" name="racecourse"
                                         value={racecourse}
                                         placeholder="Racecourse's id"
                                         min={1}
                                         required/>
                            </Col>
                        </AvGroup>

                        <FormGroup row>
                            <Label for="start" sm={2}>Start</Label>
                            <Col sm={10}>
                                <DateTimePicker name="start"
                                                ref={dateTime => this.start = dateTime}
                                                defaultValue={start ? new Date(start) : new Date()}
                                                dateFormat="M/D/YYYY"
                                                timeFormat="H:MM"/>
                            </Col>
                        </FormGroup>

                        <AvGroup row>
                            <Label for="minBet" sm={2}>Min bet</Label>
                            <Col sm={10}>
                                <AvField type="number" name="minBet"
                                         value={minBet}
                                         placeholder="Min bet"
                                         min={0}
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="commission" sm={2}>Commission</Label>
                            <Col sm={10}>
                                <AvField type="number" name="commission"
                                         value={commission}
                                         placeholder="Commission"
                                         min={0}
                                         max={1}
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="trackCondition" sm={2}>Track condition</Label>
                            <Col sm={10}>
                                <AvField type="select" name="trackCondition" value={trackCondition}>
                                    <option>{''}</option>
                                    <option>Hard</option>
                                    <option>Firm</option>
                                    <option>Good to firm</option>
                                    <option>Good</option>
                                    <option>Good to soft</option>
                                    <option>Soft</option>
                                    <option>Heavy</option>
                                    <option>Fast</option>
                                    <option>Standard to fast</option>
                                    <option>Standard</option>
                                    <option>Standard to slow</option>
                                    <option>Slow</option>
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="raceType" sm={2}>Race type</Label>
                            <Col sm={10}>
                                <AvField type="select" name="raceType" value={raceType} required>
                                    <option>{''}</option>
                                    <option>flat</option>
                                    <option>jump</option>
                                    <option>harness</option>
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="minAge" sm={2}>Min age</Label>
                            <Col sm={10}>
                                <AvField type="number" name="minAge"
                                         value={minAge}
                                         placeholder="Min age"
                                         min={0}
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="minRating" sm={2}>Min rating</Label>
                            <Col sm={10}>
                                <AvField type="number" name="minRating"
                                         value={minRating}
                                         placeholder="Min rating"
                                         min={0}
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="maxRating" sm={2}>Max rating</Label>
                            <Col sm={10}>
                                <AvField type="number" name="maxRating"
                                         value={maxRating}
                                         placeholder="Max rating"
                                         min={0}
                                         required/>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="distance" sm={2}>Distance</Label>
                            <Col sm={10}>
                                <AvField type="number" name="distance"
                                         value={distance}
                                         placeholder="Distance"
                                         min={0}
                                         required/>
                            </Col>
                        </AvGroup>


                        <FormGroup check row>
                            <Row>
                                <Col sm={{size: 2, offset: 2}}>
                                    <Button color="primary">Save</Button>
                                </Col>

                                {
                                    this.state.raceInfo
                                        ?
                                        (
                                            <Col sm={{size: 6}}>
                                                <p className="text-success">{this.state.raceInfo}</p>
                                            </Col>
                                        )
                                        : null
                                }
                            </Row>
                        </FormGroup>
                    </AvForm>
                </Jumbotron>

                <h2 className="big-margin-top">Prizes</h2>
                <hr/>
                <Jumbotron>
                    <AvForm onValidSubmit={this.onSavePrizes}>
                        {prizes}

                        <FormGroup check row>
                            <Row>
                                <Col sm={{size: 2, offset: 2}}>
                                    <Button color="primary">Save</Button>
                                </Col>

                                {
                                    this.state.prizeInfo
                                        ?
                                        (
                                            <Col sm={{size: 6}}>
                                                <p className="text-success">{this.state.prizeInfo}</p>
                                            </Col>
                                        )
                                        : null
                                }
                            </Row>
                        </FormGroup>
                    </AvForm>
                </Jumbotron>

                {
                    isNew ? (
                        <Button outline className="elem-margin" color="success" onClick={this.onAddPrize}>
                            Add prize
                        </Button>
                    ) : null
                }

                <h2 className="big-margin-top">Participants</h2>
                <hr/>
                {participants}

                {
                    isNew ? (
                        <Button outline className="elem-margin" color="success" onClick={this.onAddParticipant}>
                            Add participant
                        </Button>
                    ) : null
                }
            </div>
        );
    }
};

RaceForm.propTypes = {
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