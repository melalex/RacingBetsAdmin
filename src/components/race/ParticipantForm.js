/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label, Collapse, Jumbotron} from 'reactstrap';

export default class ParticipantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false};

        this.onSave = this.onSave.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onSave(event, values) {
        event.preventDefault();
        let id = (this.props.entity === undefined) ? 0 : this.props.entity.id;
        this.props.onSave(
            this.props.index,
            {
                id: id,
                number: values.number,
                horse: values.horse,
                carriedWeight: values.carriedWeight,
                topSpeed: values.topSpeed,
                officialRating: values.officialRating,
                odds: values.odds,
                jockey: values.jockey,
                trainer: values.trainer,
                place: values.place,
            }
        )
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        let {
            number,
            horse,
            carriedWeight,
            topSpeed,
            officialRating,
            odds,
            jockey,
            trainer,
            place
        } = this.props.entity === undefined ? {} : this.props.entity;

        return (
            <div className="small-margin-top">
                <Button color="info" onClick={this.toggle} block>
                    {'Participant #' + (this.props.index + 1)}
                </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Jumbotron>
                        <AvForm onValidSubmit={this.onSave} ref={form => this.form = form}>
                            <AvGroup row>
                                <Label for="number" sm={2}>Number</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="number"
                                             value={number}
                                             placeholder="Number"
                                             min={0}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="horse" sm={2}>Horse</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="horse"
                                             value={horse === undefined ? null : horse.id}
                                             placeholder="Horse's id"
                                             min={0}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="racecourse" sm={2}>Carried weight</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="carriedWeight"
                                             value={carriedWeight}
                                             placeholder="Carried weight"
                                             min={0}/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="topSpeed" sm={2}>Top speed</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="topSpeed"
                                             value={topSpeed}
                                             placeholder="Top speed"
                                             min={0}/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="officialRating" sm={2}>Official rating</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="officialRating"
                                             value={officialRating}
                                             placeholder="Official rating"
                                             min={0}/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="odds" sm={2}>Odds</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="odds"
                                             value={odds}
                                             placeholder="Odds"
                                             min={0}
                                             disabled/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="jockey" sm={2}>Jockey</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="jockey"
                                             value={jockey === undefined ? null : jockey.id}
                                             placeholder="Jockey's id"
                                             min={0}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="trainer" sm={2}>Trainer</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="trainer"
                                             value={trainer === undefined ? null : trainer.id}
                                             placeholder="Trainer's id"
                                             min={0}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="place" sm={2}>Place</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="place"
                                             value={place === undefined ? null : place.id}
                                             placeholder="place"
                                             min={0}/>
                                </Col>
                            </AvGroup>

                            <FormGroup check row>
                                <Col sm={{size: 10, offset: 2}}>
                                    <Button ref={input => this.click = input} color="primary">Save</Button>
                                </Col>
                            </FormGroup>
                        </AvForm>
                    </Jumbotron>
                </Collapse>
            </div>
        );
    }
};

ParticipantForm.propTypes = {
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
    onSave: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};