/**
 * Created by melalex on 4/9/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import RaceForm from '../../components/race/RaceForm'

class RaceCreate extends React.Component {

    constructor(props) {
        super(props);

        this.onCrete = this.onCrete.bind(this);
    }

    componentWillMount() {
        this.isProgressShown = false;
    }

    onCrete() {
        console.log(this.form);
        let race = this.form.race;
        console.log(race);
    }

    progress() {
        if (this.props.fetching) {
            this.props.showProgress();
            this.isProgressShown = true
        } else if (this.isProgressShown) {
            this.props.hideProgress();
            this.isProgressShown = false
        }
    }

    render() {
        this.progress();
        return (
            <div>
                <h1>Race</h1>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link href='/race/list'>Race</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Create</BreadcrumbItem>
                </Breadcrumb>

                <RaceForm entity={{}} ref={form => this.form = form}/>

                <h2 className="big-margin-top">Action</h2>
                <hr/>
                <Button className="elem-margin" color="success" onClick={this.onCrete} block>Create</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.crud.fetching,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         onSave: bindActionCreators(create, dispatch),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RaceCreate);
export default connect(mapStateToProps)(RaceCreate);
