/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react';
import {Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from "react-router";

export default class Home extends React.Component {
    render() {
        return (
            <div className="table-margin">
                <h1>Menu</h1>

                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>

                <ListGroup>
                    <ListGroupItem tag="a"><Link to="/horse/list">Horses</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/jockey/list">Jockeys</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/owner/list">Owners</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/race/list">Races</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/racecourse/list">Racecourses</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/trainer/list">Trainers</Link></ListGroupItem>
                    <ListGroupItem tag="a"><Link to="/user/list">Users</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}