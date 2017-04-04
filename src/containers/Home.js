/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ListGroup>
                    <ListGroupItem href="/horse/list">Horses</ListGroupItem>
                    <ListGroupItem href="/jockey/list">Jockeys</ListGroupItem>
                    <ListGroupItem href="/owner/list">Owners</ListGroupItem>
                    <ListGroupItem href="/race/list">Races</ListGroupItem>
                    <ListGroupItem href="/racecourse/list">Racecourses</ListGroupItem>
                    <ListGroupItem href="/trainer/list">Trainers</ListGroupItem>
                    <ListGroupItem href="/user/list">Users</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}