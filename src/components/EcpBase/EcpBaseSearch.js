import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormsControls";


const SearchForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field name="search" component={Input} placeholder="Search" onChange={props.editInput}/>
                    <button>Search</button>
                </div>
                                               
            </form>

            );
};


const SearchReduxForm = reduxForm({form: 'searchForm'})(SearchForm);

const EcpBaseSearch = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    };
    const sendSearch = (data) => {
        props.searchEmployee(data);
    };
    let timer = null;
    const editInput = (e) => {
        let data = e.nativeEvent.path[0].value;
        if (timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => sendSearch(data), 2000);



    };

    return (
            <div>
                <SearchReduxForm onSubmit={onSubmit} editInput={editInput}/>
            </div>
            );
};

export default EcpBaseSearch;