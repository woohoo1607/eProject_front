import React from 'react';
import Login from './Login';
import {login} from "../../reducers/authReducer";
import {connect} from "react-redux";

import UserCard from '../EcpBase/UserCard/UserCard';

class LoginContainer extends React.Component {
   
    login = (formData) => {
        this.props.login(formData.login, formData.password);
    }
    
    render () {
        return (
                <Login login={this.login} auth={this.props.auth}/>
        );
   }
};

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, {login})(LoginContainer);