/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from 'reactstrap';
import TrainerRow from '../trainer/TrainerRow';
import Pager from '../shared/Pager'

export default class TrainerList extends Component {

    render() {
        let {entities, page, limit, count, deleteEntity} = this.props;
        let rows = entities.map((entity, i) => <TrainerRow key={i} entity={entity} deleteEntity={deleteEntity}/>);
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
                            <td>Name</td>
                            <td>Birthday</td>
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

TrainerList.propTypes = {
    entities: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    deleteEntity: PropTypes.func.isRequired,
    fetchEntities: PropTypes.func.isRequired
};