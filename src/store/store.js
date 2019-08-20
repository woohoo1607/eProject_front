import {applyMiddleware, combineReducers, createStore} from "redux";
import ecpBaseReducer from "../reducers/ecpBaseReducer"
import authReducer from "../reducers/authReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    ecpBase: ecpBaseReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;