import {
  INIT_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELITE_EMPLOYEE,
  FILTER_EMPLOYEE
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

export const updateEmployeeAC = (payload) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload,
  };
};

export const deliteEmployeeAC = (payload) => {
  return {
    type: DELITE_EMPLOYEE,
    payload,
  };
};

export const filterEmployeeAC = (payload) => {
  return {
    type: FILTER_EMPLOYEE,
    payload,
  };
};
