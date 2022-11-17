import{
  INIT_EMPLOYEES
} from '../actionTypes/employeesAT';
import companyEmployees from '../../data/employees.json';

const initialState = {
  employees:companyEmployees,
  };

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EMPLOYEES:
      return { ...state};

    //   case FILTER_TARIFFS :
    //   const vpsPlans = [...state.tariffs];
    //   let vpsPlansEdit = [];
    //   if(action.payload.target.value === '0') vpsPlansEdit = vpsPlans;
    //   else vpsPlansEdit = vpsPlans.filter(el => el.category_id === action.payload.target.value);
    //   return {...state, filterTariffs: vpsPlansEdit}
        
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
