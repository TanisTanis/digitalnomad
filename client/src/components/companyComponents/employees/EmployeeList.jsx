import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Employee from './Employee';
import ReactPaginate from 'react-paginate';

const perPage = 5;

const EmployeeList = (props) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const offset = currentPage * perPage;

  const currentPageData = pageDataHandler().length >= 1 ? pageDataHandler().slice(offset, offset + perPage).map((employee, index) => (
    <Employee employee={employee} key={employee.lastName + index}/>
  )) : <p>No employees matching the current description.</p>;

  function nameHandler(employee) {
    let fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  }

  function pageDataHandler() {
    let employees = props.employees;

    if (name !== '') {
      employees = employees.filter(nameHandler);
    }
    if (location !== '') {
      employees = employees.filter((employee => employee.location.toLowerCase().indexOf(location.toLowerCase()) !== -1));
    }
    return employees;
  }

  const pageCount = Math.ceil(props.employees.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return(
    <div className="employee-list-container">
      <div className="search-employees-div">
        <span className="spacing-right">Search Employees:</span>
        <label htmlFor="eni">Name</label>
        <input type="text" id="eni" className="spacing-right" onChange={(e) => {
          setName(e.target.value);
        }}></input>
        <label htmlFor="eli">Location</label>
        <input type="text" id="eli" onChange={(e) => {
          setLocation(e.target.value);
        }}></input>
      </div>
      <div>
        {currentPageData}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </div>
  )
}

export default EmployeeList;