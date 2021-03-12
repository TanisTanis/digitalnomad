import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Employee from './Employee';
import ReactPaginate from 'react-paginate';

const perPage = 5;

const EmployeeList = (props) => {

  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * perPage;

  const currentPageData = props.employees.slice(offset, offset + perPage).map((employee, index) => (
    <Employee employee={employee} key={employee.lastName + index}/>
    ));

  const pageCount = Math.ceil(props.employees.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return(
    <div className="employee-list-container">
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
  )
}

export default EmployeeList;