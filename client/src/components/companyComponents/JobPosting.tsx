import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_JOB = gql`
  mutation addJobPosting($company: String!, $title: String!, $location: String!, $remote: String!, $type: String!, $payRange: String, $description: String!) {
    addJob(company: $company, title: $title, location: $location, remote: $remote, type: $type, payRange: $payRange, description: $description)
  }
`;

interface Props {
  name: string
}

const JobPosting: React.FC<Props> = (props) => {

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState('no');
  const [jobType, setJobType] = useState('');
  const [pay, setPay] = useState('');
  const [description, setDescription] = useState('');
  const [incomplete, setIncomplete] = useState(false);
  const [jobPosted, setJobPosted] = useState(false);

  const [addJob] = useMutation(ADD_JOB);

  function jobCreation(): void {

    if (completeFormCheck()) {
      addJob({variables: {company: props.name, title: title, location: location, remote: remote, type: jobType, payRange: pay, description: description}})
        .then(() => {
          let form = document.getElementById('job-form') as HTMLFormElement;
          form.reset();
          setJobPosted(true);
          setIncomplete(false);
          fullStateReset();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIncomplete(true);
    }
  }

  function completeFormCheck(): boolean {
    if (title !== '' && location !== '' && jobType !== '' && description !== '') {
      return true;
    }
    return false;
  }

  function fullStateReset(): void {
    setTitle('');
    setLocation('');
    setRemote('no');
    setJobType('');
    setPay('');
    setDescription('');
  }

  return(
    <div className="job-posting-div">
      {incomplete ? <p className="jpi">Please Fill Out All Required Elements of the Form</p> : null}
      {jobPosted ? <p className="jpsm">Job Post Successfull!</p> : null}
      <section className="job-posting-section">
      <form id="job-form">
        <div className="jp-div">
          <label htmlFor="jpt">Job Title</label>
          {' '}
          <input type="text" id="jpt" placeholder="Back-End Developer" onChange={(e) => {
            setTitle(e.target.value);
          }}></input>
        </div>
        <div className="jp-div">
          <label htmlFor="jpl">Base Location</label>
           {' '}
          <input type="text" id="jpl" placeholder="Moscow, Russia" onChange={(e) => {
            setLocation(e.target.value);
          }}></input>
        </div>
        <div className="jp-div">
          <label>Is this job remote?</label>
          <label>
            <input type="radio" name="remote-select" value="yes" onChange={(e) => {
              setRemote(e.target.value);
            }}></input>
            Yes
          </label>
          <label>
            <input type="radio" name="remote-select" value="no" onChange={(e) => {
              setRemote(e.target.value);
            }}></input>
            No
          </label>
        </div>
        <div className="jp-div">
            <label>Job Type:</label>
            {' '}
            <label>
              <input type="radio" name="job-type-select" value="Full Time" onChange={(e) => {
                setJobType(e.target.value);
              }}></input>
              Full Time
            </label>
            {' '}
            <label>
              <input type="radio" name="job-type-select" value="Part Time" onChange={(e) => {
                setJobType(e.target.value);
              }}></input>
              Part Time
            </label>
            {' '}
            <label>
              <input type="radio" name="job-type-select" value="Short Term" onChange={(e) => {
                setJobType(e.target.value);
              }}></input>
              Short Term
            </label>
        </div>
        <div className="jp-div">
          <label htmlFor="jppr">Pay Range</label>
          {' '}
          <input type="text" id="jppr" placeholder="~90K" onChange={(e) => {
            setPay(e.target.value);
          }}></input>
        </div>
        <div className="jp-div">
          <div>
            <label htmlFor="jpd">Description</label>
          </div>
          <div className="jp-div">
            <textarea id="jpd" rows={10} cols={50} onChange={(e) => {
              setDescription(e.target.value);
            }}></textarea>
          </div>
          <div className="jp-div">
            <button type="button" className="create-posting" onClick={jobCreation}>Create Posting</button>
          </div>
        </div>
      </form>

      </section>
    </div>
  );
}

export default JobPosting;