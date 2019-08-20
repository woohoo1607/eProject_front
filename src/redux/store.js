import ecpBaseReducer from "../reducers/ecpBaseReducer"
const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const UPDATE_NEW_EMPLOYEE_NAME = "UPDATE_NEW_EMPLOYEE_NAME";


let store = {
    _state: {
        ecpBase: {
            employeesData: [
                {id: 0, surname: "Волков", name: "Максим", patronymic: "Ігорович", birthday: "16.07.1993",
                    department: "Відділ", code: 1234567890, password: "fsdf3252j", fired: false,
                    transported: false, expirationDateSertificate: "27.03.2021"},
                {id: 1, surname: "Мірошніченко", name: "Олександр", patronymic: "Григорович", birthday: "20.12.1985",
                    department: "Відділ", code: 4829501837, password: "fdsj23rfs", fired: false,
                    transported: false, expirationDateSertificate: "27.03.2021"},
                {id: 2, surname: "Приходько", name: "Анжеліна", patronymic: "Анатоліївна", birthday: "07.07.1989",
                    department: "Сектор", code: 3415976548, password: "fjsioj234", fired: false,
                    transported: false, expirationDateSertificate: "27.03.2021"},
                {id: 3, surname: "Холодний", name: "Євген", patronymic: "Васильович", birthday: "19.03.1991",
                    department: "Відділ", code: 5794236578, password: "lasdpk13j", fired: false,
                    transported: false, expirationDateSertificate: "27.03.2021"}
            ],
            newEmployeeName: "Введите имя"
        }
    },

    _callSubscriber() {
    },

    getState() {
        return(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.ecpBase = ecpBaseReducer(this._state.ecpBase, action);
        this._callSubscriber(this._state);
    }
};

export default store;