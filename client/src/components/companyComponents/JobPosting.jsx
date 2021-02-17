import React, { useState } from 'react';

const JobPosting = (props) => {

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState('no');
  const [jobType, setJobType] = useState('');
  const [pay, setPay] = useState('');
  const [description, setDescription] = useState('');

  return(
    <div className="job-posting-div">
      <form>
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
            <textarea id="jpd" rows="10" cols="50" onChange={(e) => {
              setDescription(e.target.value);
            }}></textarea>
          </div>
          <div className="jp-div">
            <button type="button" class="create-posting">Create Posting</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JobPosting;