import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../actions/";
import { withRouter, Link } from "react-router-dom";

const RegisterComponent = props => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(Actions.hideSideBar());
    }, []);


    return (
        <h3>Register</h3>
    )
};
export const Register = withRouter(RegisterComponent);