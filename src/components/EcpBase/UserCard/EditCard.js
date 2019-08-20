import React from 'react';
import styles from './EditCard.module.css';
import {reduxForm, Field} from "redux-form";
import {reqiredField} from "../../../validators/validators";
import {Input} from "../../FormsControls/FormsControls";

const EditCardForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div className={styles.userInfo}>
                    <div>
                        <Field name="surname" component={Input} placeholder="surname" validate = {[reqiredField]} />
                    </div>
                    <div>
                        <Field name="name" component={Input} placeholder="name" validate = {[reqiredField]} />
                    </div>
                    <div>
                        <Field name="patronymic" component={Input} placeholder="patronymic" validate = {[reqiredField]} />
                    </div>
                    <div>
                        <Field name="birthday" component={Input} placeholder="birthday" validate = {[reqiredField]} />
                    </div>
                    <div>
                        <Field name="department" component={Input} placeholder="department" validate = {[reqiredField]} />
                    </div>
                </div>
                <div className={styles.otherData}>
                    <div className={styles.otherDataLeft}>
                        <div>
                            <Field name="code" component={Input} placeholder="code" validate = {[reqiredField]} />
                        </div>
                        <div>
                            <Field name="password" component={Input} placeholder="password" validate = {[reqiredField]} />
                        </div>
                        <div>
                            <Field name="keyword" component={Input} placeholder="keyword" validate = {[reqiredField]} />
                        </div>
                        <div>
                            <Field name="expirationDateSertificate" component={Input} placeholder="expirationDateSertificate" validate = {[reqiredField]} />
                        </div>
                    </div>
                    <div className={styles.otherDataRight}>
                        <div>
                            <Field name="fired" component="input" type="checkbox" />fired
                        </div>
                        <div>
                            <Field name="transported" component="input" type="checkbox" />transported
                        </div>
                        <div>
                            <Field name="isResponsible" component="input" type="checkbox" />isResponsible
                        </div>
                    </div>
                </div>
                <div className={styles.buttonDiv}>
                    <button>Save</button>
                    <button type="button" onClick={props.deactivated}>Close</button>
                </div>
                                                
            </form>

            );
};

const EditCardReduxForm = reduxForm({form: 'editCard'})(EditCardForm);

const EditCard = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.deactivated();
    };

    return (
            <div>
                <EditCardReduxForm onSubmit={onSubmit} deactivated={props.deactivated} initialValues={props.data}/>
            </div>
            );
};
export default EditCard;