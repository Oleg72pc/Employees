import React from 'react';
import { useDispatch } from 'react-redux';
import { filterEmployeeAC } from '../../redux/actionCreators/employeesAC';
import style from './filtration.module.scss';

export default function Filtration() {
  const dispatch = useDispatch();
  const [filter, setFilter] = React.useState({
    role: 'waiter',
    isArchive: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    setFilter(prevState => 
      ({ ...prevState, [name]: 
        target.value === 'on' || target.value === 'off' ? target.checked : target.value }));
      };
      
    React.useEffect(() => {
      dispatch(filterEmployeeAC(filter));
    }, [dispatch, filter]);

  return (
    <div className={style.categories} >

       <div className={style.categoriesElement} >
          Должность:
          <select onChange={handleInputChange} className={style.select} 
                  name="role"
                  id="role">
            <option value="waiter">Официант</option>
            <option value="cook">Повар</option>
            <option value="driver">Водитель</option>
          </select>
        </div>

        <div className={style.categoriesElement} htmlFor="isArchive">
          В архиве:
          <input className={style.checkbox} 
          onClick={handleInputChange}
          type="checkbox"
          name='isArchive'
          id='isArchive' />
        </div>

    </div>
  )
}

