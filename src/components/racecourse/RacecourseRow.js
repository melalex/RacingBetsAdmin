 /**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button} from 'reactstrap';

export default class RacecourseRow extends Component {

    onClickDelete(e, id) {
        e.preventDefault();
        this.props.deleteEntity(id);
    }

    render() {
        let {id, name, latitude, longitude, contact, clerk} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td>{contact}</td>
                <td>{clerk}</td>
                <td>
                    <Button outline color="info" href="/racecourse/view/">
                        View
                    </Button>
                    <Button outline color="primary" href="/racecourse/edit/">
                        Edit
                    </Button>
                    <Button outline color="danger" onClick={() => this.onClickDelete.bind(this)(id)}>
                        Delete
                    </Button>
                </td>
            </tr>
        );
    }
}

 RacecourseRow.propTypes = {
     entity: PropTypes.shape({
         id: PropTypes.number,
         name: PropTypes.string.isRequired,
         latitude: PropTypes.number.isRequired,
         longitude: PropTypes.number.isRequired,
         contact: PropTypes.string.isRequired,
         clerk: PropTypes.string.isRequired,
     }),
    deleteEntity: PropTypes.func.isRequired,
};