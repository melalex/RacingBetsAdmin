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
                    <ListGroupItem tag="a" href="/horse/list">Horses</ListGroupItem>
                    <ListGroupItem tag="a" href="/jockey/list">Jockeys</ListGroupItem>
                    <ListGroupItem tag="a" href="/owner/list">Owners</ListGroupItem>
                    <ListGroupItem tag="a" href="/race/list">Races</ListGroupItem>
                    <ListGroupItem tag="a" href="/racecourse/list">Racecourses</ListGroupItem>
                    <ListGroupItem tag="a" href="/trainer/list">Trainers</ListGroupItem>
                    <ListGroupItem tag="a" href="/user/list">Users</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}