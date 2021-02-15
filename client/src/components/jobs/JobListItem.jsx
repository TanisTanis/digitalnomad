import React from 'react';

let JobListItem = (props) => {

  return (
    <div className="job-listing-div">
      <section className="job-container">
        <section className="job-description">
          <div className="job-title-div job-desc-div">
            <span className="job-title">{props.job.title}</span>
          </div>
          <div className="job-desc-div">
            <span>Company: {props.job.company}</span>
          </div>
          <div>
            <span>Base Location: {props.job.location}</span>
          </div>
        </section>
        <section className="job-description">
          <div className="job-desc-div">
            <span>Remote: {props.job.remote}</span>
          </div>
          <div className="job-desc-div">
            <span>Pay Range: {props.job.payRange}</span>
          </div>
        </section>
        <section className="job-description">
          <button className="apply-button">See Details / Apply</button>
        </section>

      </section>
    </div>
  );
}

export default JobListItem;