/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from 'reactstrap';
import HorseRow from 'HorseRow';
import {FormText} from 'reactstrap';

export default class HorseList extends Component {
    render() {
        let rows = this.props.entities.map((entity, i) => <HorseRow key={i}
                                                                    entity={entity}
                                                                    deleteEntity={this.props.deleteEntity}/>);
        return (
            rows.length === 0
                ?
                <FormText color="muted">No horses found</FormText>
                :
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
        )
    }
}

HorseList.propTypes = {
    entities: PropTypes.array.isRequired,
    fetchEntities: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    deleteEntity: PropTypes.func.isRequired
};