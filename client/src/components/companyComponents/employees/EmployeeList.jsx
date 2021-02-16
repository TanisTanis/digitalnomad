import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Employee from './Employee';

const EmployeeList = (props) => {

  return(
    <div className="employee-list-container">
      {props.employees.map((employee, index) => (
         <Employee employee={employee} key={employee.lastName + index}/>
      ))}
    </div>
  )
}

export default EmployeeList;