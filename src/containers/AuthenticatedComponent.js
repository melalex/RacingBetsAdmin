/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react'
import {connect} from 'react-redux'

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth(this.props.appUser)
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.appUser)
        }

        checkAuth(user) {
            if (!user.isAuthenticated) {
                this.props.dispatch({
                    type: ROUTING,
                    payload: {
                        method: 'replace',
                        nextUrl: '/login'
                    }
                })
            }
        }

        render() {
            return (
                <div>
                    {this.props.appUser.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            appUser: state.appUser
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)
}