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
      <div className="sl-main-info">
        <p>{job.title}</p>
        <p>{job.company}</p>
        <p>{job.location}</p>
      </div>
      <div>
        <span><span className="jlr">Remote</span>: {job.remote}</span><span className="jljt"><span className="jlr">Job Type</span>: {job.type}</span>
        <p>{job.payRange}</p>
      </div>
      <div>
        {job.description}
      </div>
      <button>Apply</button>
      <button onClick={() => {
        props.changeFormat('home');
      }}>Back to Jobs</button>
    </div>
  )
}

export default SingleListing;