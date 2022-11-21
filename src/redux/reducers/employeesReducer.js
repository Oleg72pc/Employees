import {
  INIT_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELITE_EMPLOYEE,
  FILTER_EMPLOYEE
} from '../actionTypes/employeesAT';

const initialState = {
  employeesDefault:[],
  employees:[],
  };

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EMPLOYEES:
      return { ...state,
        employeesDefault: action.payload,
        employees: action.payload
      };

    case ADD_EMPLOYEE:
      return { ...state,
         employees: [...state.employees, action.payload],
         employeesDefault: [...state.employeesDefault, action.payload]};

    case UPDATE_EMPLOYEE:
       return { ...state,
        employeesDefault: [...state.employeesDefault
          .map(employee => employee.id === action.payload.id ? action.payload : employee)],
        employees: [...state.employees
          .map(employee => employee.id === action.payload.id ? action.payload : employee)]};
    
    case DELITE_EMPLOYEE:
       return { ...state,
         employees: [...state.employees
          .filter(employee => employee.id !== action.payload.id)],
         employeesDefault: [...state.employeesDefault
          .filter(employee => employee.id !== action.payload.id)]};

    case FILTER_EMPLOYEE:
        return { ...state, 
          employees: [...state.employeesDefault
          .filter(employee =>  employee.isArchive === action.payload.isArchive && employee.role === action.payload.role)] };
                 
    default:
      return state;
  }
};
