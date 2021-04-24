import React, { useState } from 'react';
import Employee from './Employee.tsx';
import ReactPaginate from 'react-paginate';
// import Employee from './Employee';

const perPage: number = 5;

interface EmployeeObj {
  email: string
  firstName: string
  lastName: string
  location: string
  phone: string
}

interface Props {
  employees: Employee[]
}

interface Page {
  selected: number
}

const EmployeeList: React.FC<Props> = (props) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const offset: number = currentPage * perPage;

  const currentPageData = pageDataHandler().length >= 1 ? pageDataHandler().slice(offset, offset + perPage).map((employee: EmployeeObj, index: number) => (
    <Employee employee={employee} key={employee.lastName + index}/>
  )) : <p>No employees matching the current description.</p>;

  function nameHandler(employee: EmployeeObj): boolean {
    let fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  }

  function pageDataHandler(): EmployeeObj[] {
    let employees = props.employees;

    if (name !== '') {
      employees = employees.filter(nameHandler);
    }
    if (location !== '') {
      employees = employees.filter((employee => employee.location.toLowerCase().indexOf(location.toLowerCase()) !== -1));
    }
    return employees;
  }

  const pageCount: number = Math.ceil(props.employees.length / perPage);

  function handlePageClick({ selected: selectedPage }: Page): void {
    setCurrentPage(selectedPage);
  }

  return(
    <div className="employee-list-container">
      <div className="margin-bottom">
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
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
        />
      </div>
    </div>
  )
}

export default EmployeeList;