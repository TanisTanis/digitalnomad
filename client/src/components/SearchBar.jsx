import React, { useState } from 'react';

let SearchBar = (props) => {

  const [remoteOnly, setRemoteOnly] = useState(false);

  return(
    <div>
      <div className="sb-div">
        <span className="sbt">Search Bar</span>
      </div>
      <div>
        <label htmlFor="s-title">By Title</label>
      </div>
      <div className="search-div-m">
        <input type="text" id="s-title"></input>
      </div>
      <div>
        <label htmlFor="s-location">By Location</label>
      </div>
      <div className="search-div-m">
        <input type="text" id="s-location"></input>
      </div>
      <div className="search-div-m">
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
      <div className="search-div-m">
        <label htmlFor="minpi">Min</label>
        {' '}
        <input type="text" id="minpi" size="3" maxlength="3"></input>
        <span> - </span>
        <input type="text" id="maxpi" size="3" maxlength="3"></input>
        {' '}
        <label htmlFor="maxpi">Max</label>
      </div>
      <div className="search-div-b">
        <button type="button" className="search-button">Search</button>
      </div>
    </div>
  )
}

export default SearchBar;