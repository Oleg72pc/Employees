import {
  INIT_EMPLOYEES,
  ADD_EMPLOYEE
} from '../actionTypes/employeesAT';

const initialState = {
  employees:[],
  };

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EMPLOYEES:
      return { ...state, employees: action.payload };

    case ADD_EMPLOYEE:
      return { ...state, employee: [...state.employees, action.payload] };
        
    // case FILTER_SOFTWARE :
    //   const filterSoftwares = action.payload.target.value.split(',');
    //   let editSoftwares = filterSoftwares.map(el => el === 'isp' ? el = ['vps_isp6_lite', 'vps_isp6_pro', 'vps_isp6_host'] : el)
    //   editSoftwares = editSoftwares.flat();
    //   return {...state, filterSoftwares: state.softwares
    //     .filter(el => editSoftwares
    //       .includes(el.name))}

    default:
      return state;
  }
};
