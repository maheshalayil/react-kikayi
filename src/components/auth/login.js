import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../actions/";
import { withRouter, Link } from "react-router-dom";

const LoginComponent = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.hideSideBar());
    }, []);

    return (
        <h3>Login</h3>
    )
};
export const Login = withRouter(LoginComponent);