/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import React, { PropTypes, Component } from 'react'

export default class HorseRow extends Component {
    render() {
        return (
        <tr>
            <td>{this.props.id}</td>
        </tr>
        );
    }
}