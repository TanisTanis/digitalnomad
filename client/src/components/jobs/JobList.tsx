import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import JobListItem from './JobListItem.tsx';
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

const perPage: number = 10;

interface Props {
  handleJobSelect: Function
}

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

interface Page {
  selected: number
}

const JobList: React.FC<Props> = (props) => {

  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, data } = useQuery(getJobsQuery);

  if (loading) { return <p>Loading...</p> };
  if (error) { return error.message };

  const offset: number = currentPage * perPage;

  const currentPageData = data.jobs.slice(offset, offset + perPage).map((job: Job, index: number) => (
      <JobListItem job={job} key={job.title + index} handleJobSelect={props.handleJobSelect} id={job.id} />
  ));

  const pageCount: number = Math.ceil(data.jobs.length / perPage);

  function handlePageClick({ selected: selectedPage }: Page): void {
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
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
      />
    </div>
  )
}

export default JobList;