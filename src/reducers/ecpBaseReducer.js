import {employeeAPI} from "../api/api";
import {searchAPI} from "../api/api";

const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME";
const SET_EMPLOYEES = "SET_EMPLOYEES";
const UPDATE_EMPLOYEES = "UPDATE_EMPLOYEES";
const FIRST_SET_EMPLOYEES = "FIRST_SET_EMPLOYEES";
const SET_EMPLOYEE_COUNT = "SET_EMPLOYEE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    employeesData: [],
    newEmployeeName: "Введите имя",
    pageSize: 12,
    employeeCount: 0,
    currentPage: 1,
    isFetching: false
};

const ecpBaseReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_EMPLOYEE:
        {
            let newEmployee = {
                id: 0,
                surname: "",
                name: state.newEmployeeName,
                patronymic: "",
                birthday: "",
                department: "Відділ",
                code: 1234567890,
                password: "",
                fired: false,
                transported: false,
                expirationDateSertificate: "27.03.2021"
            };
            return {
                ...state,
                employeesData: [...state.employeesData, newEmployee],
                newEmployeeName: "Введите имя"
            };
        };
        case UPDATE_NEW_EMPLOYEE_NAME:
        {
            return {
                ...state,
                newEmployeeName: action.newName
            };
        }
        case SET_EMPLOYEES:
        {
            return {
                ...state,
                employeesData: [...state.employeesData, ...action.employeesData]
            };
        }
        case UPDATE_EMPLOYEES:
        {
                let newEmployeesData = [ ...state.employeesData ];
                let objIndex = newEmployeesData.findIndex(obj => obj._id === action.employee._id);
                newEmployeesData[objIndex] = action.employee;
                 
            return {
                ...state,
                employeesData: [...newEmployeesData]
            };
        }
        case FIRST_SET_EMPLOYEES:
        {
            return {
                ...state,
                employeesData: [...action.employeesData],
                currentPage: 1
            };
        }
        case SET_CURRENT_PAGE:
        {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_EMPLOYEE_COUNT:
        {
            return {
                ...state,
                employeeCount: action.employeeCount
            };
        }
        case TOGGLE_IS_FETCHING:
        {
            return {
                        ...state, isFetching: action.isFetching
            };
        }
        default:
            return state;
}
};

export const addEmployee = () => ({type: ADD_EMPLOYEE}); //функция возвращает обьект

export const updateNewEmployeeName = (name) =>
    ({type: UPDATE_NEW_EMPLOYEE_NAME, newName: name});

export const setEmployees = (employees) =>
    ({type: SET_EMPLOYEES, employeesData: employees});

export const updateEmployees = (employee) =>
    ({type: UPDATE_EMPLOYEES, employee: employee});

export const firstSetEmployees = (employees) =>
    ({type: FIRST_SET_EMPLOYEES, employeesData: employees});

export const setEmployeeCount = (employeeCount) =>
    ({type: SET_EMPLOYEE_COUNT, employeeCount: employeeCount});

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});
    
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});

export const getEmployees = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        employeeAPI.getEmployees(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
                if (currentPage) {
                    dispatch(setEmployees(response.employees));
                } else {
                    dispatch(firstSetEmployees(response.employees));
                };
            dispatch(setEmployeeCount(response.countAll));
        });  
    };
};

export const updateEmployee = (employee) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        employeeAPI.updateEmployee(employee).then(response => {
            dispatch(toggleIsFetching(false));
            if (response.responseCode == 0) {
              dispatch(updateEmployees(employee));
            };
        });
       
    };
};

export const searchEmployee = (data) => {
    return (dispatch) => {
        searchAPI.search(data);
    };
};

export default ecpBaseReducer;