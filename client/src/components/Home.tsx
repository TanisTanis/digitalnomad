import React, { useState } from 'react';
import JobList from './jobs/JobList.tsx';
import SearchedJobList from './jobs/SearchedJobList.tsx';

interface Props {
  handleJobSelect: Function
}

const Home: React.FC<Props> = (props) => {

  const [search, setSearch] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [min, setMin] = useState('0');
  const [max, setMax] = useState('Infinity');
  const [fullTime, setFullTime] = useState(true);
  const [partTime, setPartTime] = useState(true);
  const [shortTerm, setShortTerm] = useState(true);

  function formatter() {
    if (!search) {
      return <JobList handleJobSelect={props.handleJobSelect} />;
    }
    if (search) {
      const attributes = {
        title: title,
        location: location,
        remote: remoteOnly,
        fullTime: fullTime,
        partTime: partTime,
        shortTerm: shortTerm
      }
      return <SearchedJobList handleJobSelect={props.handleJobSelect} attributes={attributes} />;
    }
    return <p>An error has occurred, please refresh the page.</p>
  }

  function searchHandler(boolean: boolean): void {
    if (boolean) {
      setSearch(true);
    }
    if (!boolean) {
      setSearch(false);
    }
  }

  return (
    <div className="home-div">
      <section className="search-bar">
        <form id="search-form">
          <div>
            <div className="sb-div">
              <span className="sbt">Search Bar</span>
            </div>
            <div>
              <label htmlFor="s-title">By Title</label>
            </div>
            <div className="search-div-m">
              <input type="text" id="s-title" onChange={(e) => {
                setTitle(e.target.value);
              }}></input>
            </div>
            <div>
              <label htmlFor="s-location">By Location</label>
            </div>
            <div className="search-div-e">
              <input type="text" id="s-location" onChange={(e) => {
                setLocation(e.target.value);
              }}></input>
            </div>
            <div className="search-div-e">
              <label>
                <input type="checkbox" onChange={() => {
                  setRemoteOnly(!remoteOnly);
                }}></input>
          Remote Jobs Only
        </label>
            </div>
            <div className="search-div-n">
              <label>Pay Range</label>
            </div>
            <div className="search-div-e">
              <label htmlFor="minpi">Min</label>
              {' '}
              <input type="text" id="minpi" size={3} maxLength={3} onChange={(e) => {
                setMin(e.target.value);
              }}></input>
              <span> - </span>
              <input type="text" id="maxpi" size={3} maxLength={3} onChange={(e) => {
                setMax(e.target.value);
              }}></input>
              {' '}
              <label htmlFor="maxpi">Max</label>
            </div>
            <div className="search-div-s">
              <div className="search-div-c">
                <span>By Employment Type</span>
              </div>
              <div className="search-div-c">
                <label>
                  <input type="checkbox" defaultChecked onChange={() => {
                    setFullTime(!fullTime);
                  }}></input>
            Full Time
          </label>
              </div>
              <div className="search-div-c">
                <label>
                  <input type="checkbox" defaultChecked onChange={() => {
                    setPartTime(!partTime);
                  }}></input>
            Part Time
          </label>
              </div>
              <div className="search-div-c">
                <label>
                  <input type="checkbox" defaultChecked onChange={() => {
                    setShortTerm(!shortTerm);
                  }}></input>
            Short Term
          </label>
              </div>
            </div>
            <div className="search-div-b">
              <button type="button" className="search-button" onClick={() => {
                searchHandler(true);
              }}>Search</button>
            </div>
            <div className="search-div-r">
              <button type="button" className="search-button" onClick={() => {
                searchHandler(false);
                let form = document.getElementById('search-form') as HTMLFormElement;
                form.reset();
              }}>Show All</button>
            </div>
          </div>
        </form>
      </section>
      <section className="job-listings-section">
        {formatter()}
      </section>
    </div>
  )
}

export default Home;