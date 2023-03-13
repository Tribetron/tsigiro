import React from 'react';
import {Redirect} from 'react-router-dom';
import {isUserAuthenticated} from './api/Cookie';
import {encoded} from './api/RouteHelpers';

const PrivateRoute = (props) => {

    const redirectAuth = () => {
        window.location.href = process.env.REACT_APP_AUTH + "?" + encoded(window.location.origin) || '';
    }

    return (
        isUserAuthenticated() ? props.children : <div>{redirectAuth()}</div>
    );
};

export default PrivateRoute;