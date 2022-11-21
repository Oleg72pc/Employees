import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFetchInitEmployees } from '../redux/thunk/thunk';
import Filtration from '../components/Filtration/Filtration';
import Sorting from '../components/Sorting/Sorting';
import Row from '../components/Row/Row';
import Container from '../components/Container/Container';
import AddButton from '../components/AddButton/AddButton';
import AddModal from '../components/AddModal/AddModal';
import Preloader from '../components/Preloader/Preloader';
import style from './index.module.scss'


export default function App() {
  const { employees }  = useSelector((state) => state.employeesRed);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showModalAdd, setShowModalAdd] = React.useState(false);
  const [sortType, setSortType] = React.useState({
    title: 'имени ↓',
    sortProperty: 'name',
    order: 'asc'
  });
  const dispatch = useDispatch();

  React.useEffect(() => { 
    dispatch(getFetchInitEmployees(sortType));
    setIsLoading(false);
  }, [sortType, dispatch]);

  const toggleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  };

  return (
    <>
      <AddButton toggleModalAdd={toggleModalAdd}/>
      { showModalAdd && <AddModal toggleModalAdd={toggleModalAdd} />}
      <Sorting value={sortType} onChengeSort={(i) => setSortType(i)}/>
      <Filtration />
      <Container />
      { !isLoading && employees.length ? 
         employees.map(employee => 
        <Row key={employee.id} employee={employee}/>
        )
      : <Preloader/>
    }
      <div className={style.footer}> © {new Date().getFullYear()}</div> 
    </>
  )
}

