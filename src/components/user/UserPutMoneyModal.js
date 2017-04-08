/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button, ModalFooter, ModalBody, Modal} from 'reactstrap';

export default class UserPutMoneyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            errors: false
        };

        this.toggle = this.toggle.bind(this);
        this.putMoneyAction = this.putMoneyAction.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            errors: false
        });
    }

    putMoneyAction() {
        if (this.amount.value) {
            this.props.onUserPutMoney(this.props.id, this.amount.value);
            this.toggle();
        }
    }

    render() {
        return (
            <div>
                <Button outline color="success" onClick={this.toggle}>Put money</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>How many?</ModalBody>
                    <ModalFooter>
                        <input type="number" ref={input => this.amount = input}/>

                        {
                            this.errors
                                ?
                                (
                                    <small className="form-text text-danger">
                                        Invalid input
                                    </small>
                                )
                                : null
                        }

                        <Button color="success" onClick={this.putMoneyAction}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

UserPutMoneyModal.PropTypes = {
    id: PropTypes.number.isRequired,
    onUserPutMoney: PropTypes.func.isRequired
};