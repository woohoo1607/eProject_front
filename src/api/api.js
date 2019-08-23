import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export const employeeAPI = {

    getEmployees(currentPage = 1, pageSize = 12) {
        return instance.get(`employees?limit=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        });
    },
    updateEmployee(employee) {
        let data = qs.stringify(employee);
        return instance.put('employees', data).then(response => {
            return response.data;
        });
    }

};

export const authAPI = {
    me() {
      return instance.get('auth');
    },
    login(name, password) {
        let data = qs.stringify({name, password});
        return instance.post('auth', data);
    },
    logout() {
        return instance.delete('auth');
    }

};

export const searchAPI = {
  search(data) {
      console.log(data);
  }  
};
