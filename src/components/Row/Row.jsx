import React from 'react';
import { useDispatch } from 'react-redux';
import { updateEmployeeAC } from '../../redux/actionCreators/employeesAC';
import UpdateModal from '../UpdateModal/UpdateModal';
import style from './row.module.scss';

export default function Row({ employee }) {
  const dispatch = useDispatch();
  const [showModalUpdate, setShowModalUpdate] = React.useState(false);
  const [activRow, setActiveForm] = React.useState(false);
  
  const toggleModalUpdate = () => {
    dispatch(updateEmployeeAC(employee));
    setShowModalUpdate(!showModalUpdate);
    setActiveForm(!activRow);
  };

 return (
  <>
  { showModalUpdate && <UpdateModal toggleModalUpdate={toggleModalUpdate} employee={employee}/>}
   <div className={ activRow ? style.rowActive : style.row} onClick={toggleModalUpdate}>
        <span className={style.cell} title={employee.name}> {employee.name}</span> 
        {
        (employee.role === 'driver' && <span className={style.cell}>Водитель</span>) ||
        (employee.role === 'waiter' && <span className={style.cell}>Официант</span>) ||
        (employee.role === 'cook' && <span className={style.cell}>Повар</span>) ||
        <span className={style.cell}>Должность не указана</span>
        }
        <span className={style.cell} title={employee.phone}> {employee.phone} </span> 
    </div>
    </>
  )
}

