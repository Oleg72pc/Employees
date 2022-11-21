import { 
  initEmployeesAC,
  addEmployeeAC,
  updateEmployeeAC,
  deliteEmployeeAC
 } from '../actionCreators/employeesAC';

export const getFetchInitEmployees = (payload) => {
  return (dispatch) => {
    fetch(`https://637802f30992902a25154575.mockapi.io/employees?sortBy=${payload.sortProperty}&order=${payload.order}`)
    .then((res) => res.json())
    .then((result) => {
      dispatch(initEmployeesAC(result));
    });
  }
};

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
};

export const putFetchUpdate = (payload) => {
  return (dispatch) => {
    fetch(`https://637802f30992902a25154575.mockapi.io/employees/${payload.id}`, {
      headers: { 'content-type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((data) => {
         dispatch(updateEmployeeAC(data));
       });
  }
};

export const deliteFetchEmployee = (payload) => {
  return (dispatch) => {
    fetch(`https://637802f30992902a25154575.mockapi.io/employees/${payload}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then((data) => {
          dispatch(deliteEmployeeAC(data));
       });
  }
};
