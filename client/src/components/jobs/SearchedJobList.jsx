import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import JobListItem from './JobListItem';
import ReactPaginate from 'react-paginate';

const SEARCH_JOBS_QUERY = gql`
  query($title: String!, $location: String!, $remote: Boolean!, $fullTime: Boolean!, $partTime: Boolean!, $shortTerm: Boolean!) {
    searchedJobs(title: $title, location: $location, remote: $remote, fullTime: $fullTime, partTime: $partTime, shortTerm: $shortTerm) {
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

let SearchedJobList = (props) => {

  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, data } = useQuery(SEARCH_JOBS_QUERY, {variables:
    {
      title: props.attributes.title,
      location: props.attributes.location,
      remote: props.attributes.remote,
      fullTime: props.attributes.fullTime,
      partTime: props.attributes.partTime,
      shortTerm: props.attributes.shortTerm
    }});

  if (loading) { return <p>Loading...</p> };
  if (error) { return error.message };

  const offset = currentPage * perPage;

  const currentPageData = data.searchedJobs.slice(offset, offset + perPage).map((job, index) => (
    <JobListItem job={job} key={job.title + index} handleJobSelect={props.handleJobSelect} id={job.id} />
  ));

  const pageCount = Math.ceil(data.searchedJobs.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  if (data.searchedJobs.length === 0) {
    return <p>No jobs matching that description.</p>
  }

  return(
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

export default SearchedJobList;