import {
  INIT_EMPLOYEES,
  ADD_EMPLOYEE,
} from '../actionTypes/employeesAT';

export const initEmployeesAC = (payload) => {
  return {
    type: INIT_EMPLOYEES,
    payload,
  };
};

export const addEmployeeAC = (payload) => {
  return {
    type: ADD_EMPLOYEE,
    payload,
  };
};

