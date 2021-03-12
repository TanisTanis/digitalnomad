import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import JobListItem from './JobListItem';
import ReactPaginate from 'react-paginate';

const getJobsQuery = gql`
  {
    jobs {
      id
      title
      location
      company
      remote
      payRange
      type
      description
    }
  }
`;

const perPage = 10;

let JobList = (props) => {

  const [currentPage, setCurrentPage] = useState(0)
  const { loading, error, data } = useQuery(getJobsQuery);

  if (loading) { return <p>Loading...</p> };
  if (error) { return error.message };

  const offset = currentPage * perPage;

  const currentPageData = data.jobs.slice(offset, offset + perPage).map((job, index) => (
    <JobListItem job={job} key={job.title + index} handleJobSelect={props.handleJobSelect} id={job.id}/>
  ));

  const pageCount = Math.ceil(data.jobs.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div className="job-listings-div-1">
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

export default JobList;