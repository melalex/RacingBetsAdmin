/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from 'reactstrap';
import HorseRow from '../horse/HorseRow';
import {FormText} from 'reactstrap';
import Pager from '../shared/Pager'

export default class HorseList extends Component {

    render() {
        let {entities, page, limit, count, deleteEntity} = this.props;
        let rows = entities.map((entity, i) => <HorseRow key={i} entity={entity} deleteEntity={deleteEntity}/>);
        return (
            rows.length === 0
                ?
                <FormText color="muted">Nothing to show</FormText>
                :
                <div>
                    <Table hover>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Trainer's name</td>
                            <td>Owner's name</td>
                            <td>Birthday</td>
                            <td>Gender</td>
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

HorseList.propTypes = {
    entities: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    deleteEntity: PropTypes.func.isRequired,
    fetchEntities: PropTypes.func.isRequired
};