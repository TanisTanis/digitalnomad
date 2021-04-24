import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import JobListItem from './JobListItem.tsx';
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

interface Job {
  company: string
  description: string
  id: string
  location: string
  payRange: string
  remote: string
  title: string
  type: string
}

interface Attributes {
  title: string
  location: string
  remote: boolean
  shortTerm: boolean
  partTime: boolean
  fullTime: boolean
}

interface Props {
  handleJobSelect: Function
  attributes: Attributes
}

interface Page {
  selected: number
}

const perPage: number = 10;

const SearchedJobList: React.FC<Props> = (props) => {

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

  const offset: number = currentPage * perPage;

  const currentPageData = data.searchedJobs.slice(offset, offset + perPage).map((job: Job, index: number) => (
    <JobListItem job={job} key={job.title + index} handleJobSelect={props.handleJobSelect} id={job.id} />
  ));

  const pageCount: number = Math.ceil(data.searchedJobs.length / perPage);

  function handlePageClick({ selected: selectedPage }: Page): void {
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
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
      />
    </div>
  )
}

export default SearchedJobList;