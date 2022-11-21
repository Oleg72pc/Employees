import React from 'react';
import style from './sorting.module.scss';

export default function Sorting({value, onChengeSort}) {
const [open, setOpen] = React.useState(false);
const list = [
  {title: 'имени ↓', sortProperty: 'name', order: 'asc'},
  {title: 'имени ↑', sortProperty: 'name', order: 'desc'},
  {title: 'дате рождения ↓', sortProperty: 'birthday', order: 'asc'},
  {title: 'дате рождения ↑', sortProperty: 'birthday', order: 'desc'},
];

// console.log(value);
const onClickListItem = (event) => {
  onChengeSort(event);
  setOpen(false);
}
  return (
    <div className={style.sort}>
    <div className={style.label}>
      <b>Сортировка по:</b>
      <span onClick={() => setOpen(!open)}>{value.title}</span>
    </div>
    {open &&
      <div className={style.popup}>
        <ul>
         {list.map((obj, i) => (
          <li 
          key={i}
          onClick={() => onClickListItem(obj)}
          className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
            {obj.title}
            </li>
         ))}
        </ul>
      </div>
    }
  </div>

  );
};
