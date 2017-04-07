/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import React from 'react';
import {Link} from "react-router";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="nb-error">
                <div className="error-code">404</div>
                <h3 className="font-bold">We couldn't find the page..</h3>

                <div className="error-desc">
                    Sorry, but the page you are looking for was either not found or does not exist. <br/>
                    Try refreshing the page or click the button below to go back to the Homepage.

                    <ul className="list-inline text-center text-sm">
                        <li className="list-inline-item">
                            <Link to="/" className="text-muted">
                                Go to App
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/login" className="text-muted">
                                Login
                            </Link>
                        </li>
                    </ul>
                    <div className="text-center">
                        <span className="text-muted">&copy; Melashchenko, 2017</span>
                    </div>
                </div>
            </div>
        )
    }
}