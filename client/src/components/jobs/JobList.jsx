import React from 'react';
import { useQuery, gql } from '@apollo/client';
import JobListItem from './JobListItem';


const getJobsQuery = gql`
  {
    jobs {
      title
      location
      company
      remote
      payRange
    }
  }
`;


let JobList = (props) => {
  const { loading, error, data } = useQuery(getJobsQuery);


  if (loading) { return <p>Loading...</p> };
  if (error) { return error.message };

  return(
    <div className="job-listings-div-1">
      {data.jobs.map((job, index) => (
        <JobListItem job={job} key={job.title + index}/>
      ))}
    </div>
  );
}

export default JobList;