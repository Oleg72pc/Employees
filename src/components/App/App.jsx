import React from 'react';
import { useSelector } from 'react-redux';
import Filtration from '../Filtration/Filtration';
import Sorting from '../Sorting/Sorting';
import Row from '../Row/Row';
import Container from '../Container/Container';
import AddButton from '../AddButton/AddButton'

export default function App() {
  console.log('!APP-render!');
  const { employees }  = useSelector((state) => state.employeesRed);
  return (
    <>
      <AddButton />
      <Filtration />
      <Sorting />
      <Container />
      { employees.map(employee => 
        <Row key={employee.id} employee={employee}/>
        )
      }
    </>
  )
}

