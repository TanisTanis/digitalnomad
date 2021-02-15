import React from 'react';
import JobList from './jobs/JobList';

let Home = (props) => {



  return(
    <div className="home-div">
      <section className="search-bar">
        Hello This is the search
      </section>
      <section className="job-listings-section">
        <JobList />
      </section>
    </div>
  )
}

export default Home;