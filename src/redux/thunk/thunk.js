import { initEmployeesAC, addEmployeeAC } from '../actionCreators/employeesAC';

export const getFetchInitEmployees = () => {
  return (dispatch) => {
    fetch('https://637802f30992902a25154575.mockapi.io/employees')
    .then((res) => res.json())
    .then((result) => {
      dispatch(initEmployeesAC(result));
    });
  }
}
export const postFetchAddEmployee = (payload) => {
  return (dispatch) => {
    fetch('https://637802f30992902a25154575.mockapi.io/employees', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
          dispatch(addEmployeeAC(data));
       });
  }
}
