import React from 'react';

interface Job {
  title: string
  location: string
  payRange: string
}

interface Props {
  job: Job
  id: string
  switchToSingleJob: Function
  key: string
}

const CompanyJob: React.FC<Props> = (props) => {
  return (
    <div className="job-listing-div">
      <section className="company-job-container">
        <section className="job-description">
          <div className="job-title-div job-desc-div">
            <span className="job-title">{props.job.title}</span>
          </div>
          </section>
          <section className="cjl">
            <div>
              <span>Base Location: {props.job.location}</span>
            </div>
          </section>
        <section className="job-description">
          <div className="job-desc-div">
            <span>Pay Range: {props.job.payRange}</span>
          </div>
        </section>
        <section className="job-description">
          <button className="apply-button" onClick={() => {
            props.switchToSingleJob(props.id);
          }}>View Full Posting</button>
          {' '}
          <button className="apply-button">Edit</button>
        </section>
      </section>
    </div>
  )

}

export default CompanyJob;