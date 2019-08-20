import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        {
            return {
                ...state,
                ...action.userData
            };
        }
       
        default:
            return state;
}
};

export const setUserData = (userId, login, isAuth) =>
    ({type: SET_USER_DATA, userData: {userId, login, isAuth}});
    
export const getUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if (response.data.responseCode ===0) {
                    let {id, login} = response.data.userData;
                    dispatch(setUserData(id, login, true));
                }
    });
};

export const login = (name, password) => (dispatch) => {
    authAPI.login(name, password)
            .then(response => {
                if (response.data.responseCode ===0) {
                    dispatch(getUserData());
                }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
            .then(response => {
                if (response.data.responseCode ===0) {
                    dispatch(setUserData(null, null, false));
                }
    });
};
    
export default authReducer;