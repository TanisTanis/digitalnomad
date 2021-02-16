import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CompanyJob from './CompanyJob';

const CurrentOpenings = (props) => {

  const openingsQuery = gql`
    query {
      job(name: "${props.name}") {
        title
        location
        remote
        payRange
      }
    }
  `;

  const { loading, error, data } = useQuery(openingsQuery);

  if (loading) { return <p>Loading...</p>}
  if (error) { return <p>{error.message}</p>}
  if (data) { console.log(data) }

  return(
    <section className="company-joblist-container">
      {data.job.map((job) => (
        <CompanyJob job={job} />
      ))}
    </section>
  )


}

export default CurrentOpenings;
