/**
 * Created by melalex on 4/8/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from 'reactstrap';
import UserRow from '../user/UserRow';
import Pager from '../shared/Pager'

export default class UserList extends Component {

    render() {
        let {entities, page, limit, count, putMoney} = this.props;
        let rows = entities.map((entity, i) => <UserRow key={i} entity={entity} putMoney={putMoney}/>);
        return (
            rows.length === 0
                ?
                <h1 className="text-center no-result-text">Nothing to show</h1>
                :
                <div className="table-margin">
                    <Table hover>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Login</td>
                            <td>Email</td>
                            <td>Full name</td>
                            <td>Balance</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </Table>
                    <Pager page={page} count={count} limit={limit} changePage={this.props.fetchEntities}/>
                </div>
        )
    }
}

UserList.propTypes = {
    entities: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    putMoney: PropTypes.func.isRequired,
    fetchEntities: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};