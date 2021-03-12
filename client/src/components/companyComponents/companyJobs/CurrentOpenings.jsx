import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import CompanyJob from './CompanyJob';

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

const CurrentOpenings = (props) => {

  const { loading, error, data, refetch } = useQuery(GET_OPENINGS, {variables: {name: props.name}});

  useEffect(() => {
    refetch();
  }, []);

  if (loading) { return <p>Loading...</p>}
  if (error) { return <p>{error.message}</p>}

  return(
    <section className="company-joblist-container">
      {data.job.map((job, index, array) => (
        <CompanyJob job={job} key={job + job.id} id={job.id} switchToSingleJob={props.switchToSingleJob}/>
      ))}
    </section>
  )


}

export default CurrentOpenings;
