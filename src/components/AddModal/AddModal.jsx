import React from 'react';
import { useDispatch } from 'react-redux';
import { postFetchAddEmployee } from '../../redux/thunk/thunk';
import style from './addModal.module.scss';

export default function AddModal({toggleModalAdd}) {
  const dispatch = useDispatch();
  const [formState, setFormState] = React.useState({
    name: "",
    isArchive: false,
    role: "",
    phone: "",
    birthday: ""
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    setFormState(prevState => ({ ...prevState, [name]: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     if (formState.name && formState.role && formState.phone && formState.birthday) {
        dispatch(postFetchAddEmployee(formState));
        toggleModalAdd();
     }
  };

  return (
    <div className={style.background}>
    <div className={style.modal}>
      <form className={style.form} action="#" >

        <div className={style.close} onClick={toggleModalAdd}>X</div>

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
        {!formState.role && <span className={style.info}>* Выберите должность</span>}

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

        <button className={style.button} variant='outlined' type='submit' onClick={handleSubmit}>Добавить</button>
      </form>
     </div>
    </div>
  )
}

