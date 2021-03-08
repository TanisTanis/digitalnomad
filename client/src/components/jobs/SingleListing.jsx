import React from 'react';
import { useQuery, gql } from '@apollo/client';

let SingleListing = (props) => {

  const jobQuery = gql`
    {
      singleJob(id: "${props.id}") {
        title
        company
        location
        remote
        type
        payRange
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(jobQuery);

  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>{error.message}</p> }
  const job = data.singleJob[0];
  return(
    <div className="sld">
      {job.title}
    </div>
  )
}

export default SingleListing;