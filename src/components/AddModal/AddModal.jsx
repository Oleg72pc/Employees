import React from 'react';
import { useDispatch } from 'react-redux';
import { postFetchAddEmployee } from '../../redux/thunk/thunk';
import style from './addModal.module.scss';

export default function AddModal({toggleModalAdd}) {
  const dispatch = useDispatch();
  const [formState, setFormState] = React.useState({
    // id: Date.now(),
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: ""
  });
 console.log(formState);

  const handleInputChange = (event) => {
    const target = event.target
    const name = target.name
    setFormState(prevState => ({ ...prevState, [name]: target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
     if (formState.name && formState.role && formState.phone && formState.birthday) {
        dispatch(postFetchAddEmployee(formState));
        toggleModalAdd()
      // setTasks(prevState => [...prevState, formState]);
      // setFormState({
      //   name: "",
      //   role: "",
      //   phone: "",
      //   birthday: ""
      // })
     }
  }

  return (
    <div className={style.modal}>
      <form className={style.form} action="#" >

        <label className={style.formElement} htmlFor="name">
          Сотрудник
          <input className={style.input} 
          value={formState.name} 
          onChange={handleInputChange} 
          type="text" 
          name='name' 
          id='name' />
        </label>

        <label className={style.formElement} >
          Должность
          <select className={style.select} 
          defaultValue={'DEFAULT'}
          name="role"
          id="role" 
          onChange={handleInputChange}>
            <option value="DEFAULT" disabled hidden >Выберите должность</option>
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
          id='phone' />
        </label>

        <label className={style.formElement} htmlFor="birthday">
          Дата рождения
          <input className={style.input} 
          value={formState.birthday} 
          onChange={handleInputChange} 
          type="text"
          name='birthday'
          id='birthday' />
        </label>

        <button className={style.button} variant='outlined' type='submit' onClick={handleSubmit}>Добавить</button>
      </form>
    </div>
  )
}

