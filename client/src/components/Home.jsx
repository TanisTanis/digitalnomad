import React from 'react';
import JobList from './jobs/JobList';
import SearchBar from './SearchBar';

let Home = (props) => {

  return(
    <div className="home-div">
      <section className="search-bar">
        <SearchBar />
      </section>
      <section className="job-listings-section">
        <JobList />
      </section>
    </div>
  )
}

export default Home;