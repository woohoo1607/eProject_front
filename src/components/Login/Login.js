import React from 'react';
import {reduxForm, Field} from "redux-form";
import {reqiredField} from "../../validators/validators";
import {Input} from "../FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} placeholder="Login" validate = {[reqiredField]} />
            </div>
            <div>
                <Field name="password" component={Input} placeholder="Password" validate = {[reqiredField]} type="password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            
        </form> 
      
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    };console.log(props.auth.isAuth);
    return ( 
        <div>
            <h1>{props.auth.isAuth ? "LOGIN " + props.auth.login : "Login"}</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>  
    );
};
export default Login;