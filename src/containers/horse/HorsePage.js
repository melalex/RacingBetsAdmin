/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import HorseList from '../../components/horse/HorseList'

export default class HorsePage extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Horses</BreadcrumbItem>
                </Breadcrumb>

            </div>
        );
    }
}