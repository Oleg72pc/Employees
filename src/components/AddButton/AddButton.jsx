import React from 'react';
import style from './addButton.module.scss'

export default function AddButton({toggleModalAdd}) {
  return (
    <button 
    onClick={toggleModalAdd}     
    className={style.button}>Добавить сотрудника</button>
  )
}

