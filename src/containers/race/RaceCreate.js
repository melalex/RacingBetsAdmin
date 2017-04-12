/**
 * Created by melalex on 4/9/17.
 */

import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import RaceForm from '../../components/race/RaceForm'
import {createRace} from '../../actions/Race';

class RaceCreate extends React.Component {

    constructor(props) {
        super(props);

        this.onCrete = this.onCrete.bind(this);
    }

    componentWillMount() {
        this.isProgressShown = false;
    }

    onCrete() {
        this.props.onSave(this.form.race);
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
                    <BreadcrumbItem><Link to='/race/list'>Race</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Create</BreadcrumbItem>
                </Breadcrumb>

                <RaceForm entity={{}} ref={form => this.form = form}/>

                <h2 className="big-margin-top">Action</h2>
                <hr/>
                <Button className="elem-margin big-margin-bot" color="success" onClick={this.onCrete} block outline>
                    Create
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.crud.fetching,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSave: bindActionCreators(createRace, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceCreate);