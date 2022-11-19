import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filtration from '../components/FiltrationButton/Filtration';
import Sorting from '../components/SortingButton/Sorting';
import Row from '../components/Row/Row';
import Container from '../components/Container/Container';
import AddButton from '../components/AddButton/AddButton';
import AddModal from '../components/AddModal/AddModal'
import { getFetchInitEmployees } from '../redux/thunk/thunk';

export default function App() {
const { employees }  = useSelector((state) => state.employeesRed);
  // employees.sort( (a,b) => b.role.localeCompare(a.role)) 
  const [showModalAdd, setShowModalAdd] = React.useState(false);
  const dispatch = useDispatch();
  console.log('APP!!');
  React.useEffect(() => {
    dispatch(getFetchInitEmployees());
  }, [dispatch]);

  const toggleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  }

  return (
    <>
      <AddButton toggleModalAdd={toggleModalAdd}/>
      { showModalAdd && <AddModal toggleModalAdd={toggleModalAdd} />}
      <Filtration />
      <Sorting />
      <Container />
      { employees.map(employee => 
        <Row 
        key={employee.id} 
        employee={employee}/>
        )
      }
      
    </>
  )
}

