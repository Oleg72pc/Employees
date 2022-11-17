import React from 'react';
import style from './row.module.scss'

export default function Row({employee}) {
  console.log('!Row-render!');

  return (
     <div className={style.container}>
        <span className={style.tableCell}> {employee.name}</span> 
        {
        (employee.role === 'driver' && <span className={style.tableCell}>Водитель</span>) ||
        (employee.role === 'waiter' && <span className={style.tableCell}>Официант</span>) ||
        (employee.role === 'cook' && <span className={style.tableCell}>Повар</span>) 
        }
        <span className={style.tableCell}> {employee.phone} </span> 
        <span className={style.tableCell}> {employee.birthday}</span> 
        <span className={style.tableCell}>  <input type="checkbox" defaultChecked={employee.isArchive}></input></span> 
    </div>
  )
}

