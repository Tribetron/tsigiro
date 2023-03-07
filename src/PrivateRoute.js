import React from 'react';
import {Redirect} from 'react-router-dom';
import {isUserAuthenticated} from './api/Cookie';

const PrivateRoute = (props) => {
    return (
        isUserAuthenticated() ? props.route : <Redirect to="/auth/login" />
        // <Redirect to="/auth/login" />
    );
};

export default PrivateRoute;