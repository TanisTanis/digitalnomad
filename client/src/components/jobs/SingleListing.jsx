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
        <p><span className="jlt">{job.title}</span></p>
        <p><span>{job.company}</span></p>
        <p><span className="jlr">Location</span>: {job.location}</p>
      </div>
      <div>
        <span><span className="jlr">Remote</span>: {job.remote}</span><span className="jljt"><span className="jlr">Job Type</span>: {job.type}</span>
        <p>{job.payRange}</p>
      </div>
      <div>
        {job.description}
      </div>
      <p>
        <button className="button-green">Apply</button>
        {' '}
        <button className="button-green" onClick={() => {
          props.changeFormat('home');
        }}>Back to Jobs</button>
      </p>
    </div>
  )
}

export default SingleListing;