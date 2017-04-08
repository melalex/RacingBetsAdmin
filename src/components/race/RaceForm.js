/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label} from 'reactstrap';
import {dateFromTimestampForm} from '../../util'

export default class RaceForm extends Component {
    constructor(props) {
        super(props);
        this.race = {};
        this.onSave = this.onSave.bind(this)
    }

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity === undefined) ? 0 : this.props.entity.id;
        console.log(this.input);
        console.log(this.form);
        // this.props.onSave({
        //     id: id
        // })
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
            raceStatus,
            minAge,
            minRating,
            maxRating,
            distance,
            participants,
            prizes,
        } = this.props.entity === undefined ? {} : this.props.entity;

        return (
            <div>
                <h2>Race properties</h2>
                <AvForm onValidSubmit={this.onSave} ref={form => this.form = form}>
                    <AvGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField name="name"
                                     value={name}
                                     placeholder="Race's name" minLength="4"
                                     maxLength="45"
                                     required/>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="racecourse" sm={2}>Racecourse</Label>
                        <Col sm={10}>
                            <AvField type="number" name="racecourse" id="racecourse"
                                     value={racecourse === undefined ? null : racecourse.id}
                                     placeholder="Racecourse's id"
                                     min={0}
                                     required/>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="start" sm={2}>Name</Label>
                        <Col sm={10}>
                            <AvField type="text" name="name"
                                     value={dateFromTimestampForm(start)}
                                     placeholder="Start time"
                                     required/>
                        </Col>
                    </AvGroup>

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
                                     required/>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="trackCondition" sm={2}>Track condition</Label>
                        <Col sm={10}>
                            <AvField type="select" name="trackCondition" value={trackCondition}
                                     placeholder="Track condition">
                                <option> </option>
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
                            <AvField type="select" name="raceType" value={raceType} placeholder="Race type">
                                <option>flat</option>
                                <option>jump</option>
                                <option>harness</option>
                            </AvField>
                        </Col>
                    </AvGroup>

                    <AvGroup row>
                        <Label for="raceStatus" sm={2}>Race status</Label>
                        <Col sm={10}>
                            <AvField type="select" name="raceStatus"
                                     value={raceStatus}
                                     placeholder="Race status"
                                     min={0}
                                     disabled>
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
                        <Col sm={{size: 10, offset: 2}}>
                            <Button ref={input => this.click = input} outline color="primary">Save</Button>
                        </Col>
                    </FormGroup>
                </AvForm>

                <h2>Participants</h2>

            </div>
        );
    }
};

RaceForm.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        racecourse: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            contact: PropTypes.string.isRequired,
            clerk: PropTypes.string.isRequired,
        }).isRequired,
        start: PropTypes.number.isRequired,
        minBet: PropTypes.number.isRequired,
        commission: PropTypes.number.isRequired,
        trackCondition: PropTypes.string.isRequired,
        raceType: PropTypes.string.isRequired,
        raceStatus: PropTypes.string.isRequired,
        minAge: PropTypes.number.isRequired,
        minRating: PropTypes.number.isRequired,
        maxRating: PropTypes.number.isRequired,
        distance: PropTypes.number.isRequired,
        participants: PropTypes.array.isRequired,
        prizes: PropTypes.object.isRequired
    }).isRequired,
    onSave: PropTypes.func.isRequired,
};