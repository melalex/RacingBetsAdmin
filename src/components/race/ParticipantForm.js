/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {AvForm, AvField, AvGroup} from 'availity-reactstrap-validation';
import {Col, Button, FormGroup, Label, Collapse, Jumbotron, Row} from 'reactstrap';

export default class ParticipantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            participantInfo: '',
        };

        this.onSave = this.onSave.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onSave(event, values) {
        let id = (this.props.entity.id === undefined) ? 0 : this.props.entity.id;
        console.log(values);
        this.props.onSave(
            this.props.index,
            {
                id: id,
                number: Number(values.number ? values.number : 0),
                horse: Number(values.horse ? values.horse : 0),
                carriedWeight: Number(values.carriedWeight ? values.carriedWeight : 0),
                topSpeed: Number(values.topSpeed ? values.topSpeed : 0),
                officialRating: Number(values.officialRating ? values.officialRating : 0),
                jockey: Number(values.jockey ? values.jockey : 0),
                trainer: Number(values.trainer ? values.trainer : 0),
                place: Number(values.place ? values.place : 0),
            }
        );
        this.setState({
            ...this.state,
            participantInfo: 'Participants saved successfully'
        });
    }

    toggle() {
        this.setState({
            ...this.state,
            collapse: !this.state.collapse
        });
    }

    render() {
        let {
            number,
            horse,
            carriedWeight,
            topSpeed,
            officialRating,
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
                                             value={horse}
                                             placeholder="Horse's id"
                                             min={1}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="carriedWeight" sm={2}>Carried weight</Label>
                                <Col sm={10}>
                                    <AvField type="number"
                                             name="carriedWeight"
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
                                <Label for="jockey" sm={2}>Jockey</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="jockey"
                                             value={jockey}
                                             placeholder="Jockey's id"
                                             min={1}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="trainer" sm={2}>Trainer</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="trainer"
                                             value={trainer}
                                             placeholder="Trainer's id"
                                             min={1}
                                             required/>
                                </Col>
                            </AvGroup>

                            <AvGroup row>
                                <Label for="place" sm={2}>Place</Label>
                                <Col sm={10}>
                                    <AvField type="number" name="place"
                                             value={place}
                                             placeholder="place"
                                             min={1}/>
                                </Col>
                            </AvGroup>

                            <FormGroup check row>
                                <Row>
                                    <Col sm={{size: 2, offset: 2}}>
                                        <Button ref={input => this.click = input} color="primary">Save</Button>
                                    </Col>

                                    {
                                        this.state.participantInfo
                                            ?
                                            (
                                                <Col sm={{size: 6}}>
                                                    <p className="text-success">{this.state.participantInfo}</p>
                                                </Col>
                                            )
                                            : null
                                    }
                                </Row>
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