import React from 'react';
import style from './container.module.scss'

export default function Container() {
  return (
    <div className={style.container}>
      <span className={style.tableCell}>Сотрудник</span>
      <span className={style.tableCell}>Должность</span>
      <span className={style.tableCell}>Телефон</span>
      <span className={style.tableCell}>Дата рождения</span>
      <span className={style.tableCell}>В архиве</span>
    </div>
  )
}

