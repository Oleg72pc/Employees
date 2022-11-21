import React from 'react';
import { useDispatch } from 'react-redux';
import {  deliteFetchEmployee, putFetchUpdate } from '../../redux/thunk/thunk';
import style from './updateModal.module.scss';

export default function UpdateModal({toggleModalUpdate, employee}) {
  const dispatch = useDispatch();
  const [formState, setFormState] = React.useState(employee);
  const [checked, setChecked] = React.useState(employee.isArchive);

   const handleInputChangeisArchive = () => {
    setChecked(!checked);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    setFormState(prevState => 
      ({ ...prevState, [name]: 
        target.value === 'on' || target.value === 'off' ? target.checked : target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     if (formState.name && formState.role && formState.phone && formState.birthday) {
        dispatch(putFetchUpdate(formState));
        toggleModalUpdate();
     }
  };
  
  React.useEffect(() => {
    dispatch(putFetchUpdate(formState));
  }, [dispatch, formState])
  
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deliteFetchEmployee(employee.id));
    toggleModalUpdate();
  };

  return (
    <div className={style.background}>
    <div className={style.modal}>
      <form className={style.form} action="#" >

        <div className={style.close} onClick={toggleModalUpdate}>X</div>

        <label className={style.formElement} htmlFor="name">
          Сотрудник
          <input className={style.input} 
          value={formState.name} 
          onChange={handleInputChange} 
          type="text" 
          name='name' 
          id='name'
          placeholder="Ф.И.О. сотрудника" />
        </label>
        {!formState.name && <span className={style.info}>* Заполните поле сотрудник</span>}
        
        <label className={style.formElement} >
          Должность
          <select className={style.select} 
          defaultValue={employee.role}
          name="role"
          id="role" 
          onChange={handleInputChange}>
            <option value="waiter">Официант</option>
            <option value="cook">Повар</option>
            <option value="driver">Водитель</option>
          </select>
        </label>

        <label className={style.formElement} htmlFor="phone">
          Телефон
          <input className={style.input} 
          value={formState.phone} 
          onChange={handleInputChange} 
          type="text" 
          name='phone'
          id='phone'
          placeholder="+7 (___) ___-____" />
        </label>
        {!formState.phone && <span className={style.info}>* Заполните поле телефон</span>}

        <label className={style.formElement} htmlFor="birthday">
          Дата рождения
          <input className={style.input} 
          value={formState.birthday} 
          onChange={handleInputChange} 
          type="text"
          name='birthday'
          id='birthday'
          placeholder="__.__.____" />
        </label>
        {!formState.birthday && <span className={style.info}>* Заполните поле дата рождения</span>}

        <label className={style.formElement} htmlFor="isArchive">
          В архиве:
          <input className={style.checkbox} 
          checked={checked} 
          onChange={handleInputChange} 
          onClick={handleInputChangeisArchive}
          type="checkbox"
          name='isArchive'
          id='isArchive' />
        </label>
        
        <div className={style.buttonForm}>
        <button className={style.button} 
        variant='outlined' 
        type='submit' 
        onClick={handleDelete}>Удалить</button>

        <button className={style.button} 
        variant='outlined' 
        type='submit' 
        onClick={handleSubmit}>Сохранить</button>
        </div>

      </form>
     </div>
    </div>
  )
}

