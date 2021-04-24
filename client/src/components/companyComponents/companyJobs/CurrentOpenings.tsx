import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CompanyJob from './CompanyJob.tsx';
import ReactPaginate from 'react-paginate';

const GET_OPENINGS = gql`
  query($name: String!) {
    job(name: $name) {
      id
      title
      location
      remote
      payRange
    }
  }
`;

interface Props {
  name: string
  switchToSingleJob: Function
}

interface Job {
  id: string
  title: string
  company: string
  location: string
  remote: boolean
  type: string
  payRange: string
  description: string
}

interface Page {
  selected: number
}

const perPage: number = 10;

const CurrentOpenings: React.FC<Props> = (props) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const { loading, error, data, refetch } = useQuery(GET_OPENINGS, { variables: { name: props.name } });

  useEffect(() => {
    refetch();
  }, []);


  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>{error.message}</p> }

  const offset: number = currentPage * perPage;

  const currentPageData = data.job.length >= 1 ? jobSearcher().slice(offset, offset + perPage).map((job: Job) => (
    <CompanyJob job={job} key={job + job.id} id={job.id} switchToSingleJob={props.switchToSingleJob} />
  )) : <p>No employees matching this description</p>;

  const pageCount = Math.ceil(data.job.length / perPage);

  function handlePageClick({ selected: selectedPage }: Page): void {
    setCurrentPage(selectedPage);
  }

  function jobSearcher(): Job[] {
    let jobs = data.job;
    if (title !== '') {
      jobs = jobs.filter((job: Job) => job.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    }
    if (location !== '') {
      jobs = jobs.filter((job: Job) => job.location.toLowerCase().indexOf(location.toLowerCase()) !== -1);
    }
    return jobs;
  }

  return (
    <section className="company-joblist-container">
      <div className="margin-bottom margin-top">
        <span className="spacing-right">Search Listings:</span>
        <label htmlFor="jti">Title</label>
        <input type="text" id="jti" className="spacing-right" onChange={(e) => {
          setTitle(e.target.value);
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
    </section>
  )
}

export default CurrentOpenings;
