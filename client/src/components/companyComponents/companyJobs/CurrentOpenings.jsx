import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import CompanyJob from './CompanyJob';
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

const perPage = 10;

const CurrentOpenings = (props) => {

  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, data, refetch } = useQuery(GET_OPENINGS, {variables: {name: props.name}});

  useEffect(() => {
    refetch();
  }, []);


  if (loading) { return <p>Loading...</p>}
  if (error) { return <p>{error.message}</p>}

  const offset = currentPage * perPage;

  const currentPageData = data.job.slice(offset, offset + perPage).map((job, index, array) => (
    <CompanyJob job={job} key={job + job.id} id={job.id} switchToSingleJob={props.switchToSingleJob}/>
  ));

  const pageCount = Math.ceil(data.job.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return(
    <section className="company-joblist-container">
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
    </section>
  )
}

export default CurrentOpenings;
