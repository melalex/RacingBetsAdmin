/**
 * Created by melalex on 4/7/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button, ModalFooter, ModalBody, Modal} from 'reactstrap';

export default class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    deleteAction() {
        this.props.onDelete();
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button outline color="danger" onClick={this.toggle}>Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>Are you sure?</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.deleteAction}>Yes</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

DeleteModal.PropTypes = {
    onDelete: PropTypes.func.isRequired
};