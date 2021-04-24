import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CompanyHomePage from './CompanyHomePage';
import EmployeeList from './employees/EmployeeList.tsx';
import CurrentOpenings from './companyJobs/CurrentOpenings.tsx';
import JobPosting from './JobPosting';
import CompanySingleJob from './companyJobs/CompanySingleJob.tsx';

const GET_COMPANY = gql`
  query($companyEmail: String!) {
    company(companyEmail: $companyEmail) {
      name
      employees {
        firstName
        lastName
        location
        email
        phone
      }
    }
  }
`;

let CompanyHome = (props) => {

  function companyPageFormatter() {
    if (page === 'home') {
      return <CompanyHomePage name={data.company.name} employeeCount={data.company.employees.length}/>
    }
    if (page === 'employees') {
      return <EmployeeList employees={data.company.employees}/>
    }
    if (page === 'openings') {
      return <CurrentOpenings name={data.company.name} switchToSingleJob={switchToSingleJob} />
    }
    if (page === 'post-job') {
      return <JobPosting name={data.company.name}/>
    }
    if (page === 'single-job') {
      return <CompanySingleJob id={job} backToJobs={backToJobs}/>
    }
  }

  function switchToSingleJob(id) {
    setJob(id);
    setPage('single-job');
  }

  function backToJobs() {
    setPage('openings');
  }

  const { loading, error, data } = useQuery(GET_COMPANY, {variables: {companyEmail: props.email}});
  const [page, setPage] = useState('home');
  const [job, setJob] = useState('');

  if (loading) { return <p>loading...</p>}
  if (error) { return <p>{error.message}</p> }


  return(
    <div className="company-home-main-div">
      <div className="company-home-button-bar">
        <button className="uhb uhb-1" onClick={() => {
          setPage('home');
        }}>Company Home</button>
        <button className="uhb" onClick={() => {
          setPage('employees');
        }}>View Remote Employees</button>
        <button className="uhb chb-3" onClick={() => {
          setPage('openings');
        }}>Current Openings</button>
        <button className="uhb chb-4" onClick={() => {
          setPage('post-job');
        }}>Post a Job Listing</button>
      </div>
      {companyPageFormatter()}
    </div>
  )

}

export default CompanyHome;