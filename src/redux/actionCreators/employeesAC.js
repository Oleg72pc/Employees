import {
  INIT_EMPLOYEES,
} from '../actionTypes/employeesAT';

export const initEmployeesAC = (payload) => {
  return {
    type: INIT_EMPLOYEES,
    payload,
  };
};

