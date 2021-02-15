import React, { useState } from 'react';

const ScheduleForm = (props) => {
  const [location, setLocation] = useState('');

  return(
    <div className="schedule-form-div">
      <form>
        <div>
          <label htmlFor="location-input">Where will you be working from?</label>
          <input type="text" id="location-input" onChange={(e) => {
            setLocation(e.target.value);
          }}></input>
        </div>
        <div>
          <label htmlFor="timeZone-select">What time zone is this in?</label>
          <select>
            <option>UTC -9H (AKST)</option>
            <option>UTC -8H (PST)</option>
            <option>UTC -7H (MST)</option>
            <option>UTC -6H (CST)</option>
            <option>UTC -5H (EST)</option>
            <option>UTC -4H (AST)</option>
            <option>UTC -4H (PYST)</option>
            <option>UTC -2H (GST)</option>
            <option>UTC -1H (AZOT)</option>
            <option>UTC -1H (CVT)</option>
            <option>UTC -1H (EGT)</option>
            <option>UTC (GMT)</option>
            <option>UTC +1H (CET)</option>
            <option>UTC +1H (WAT)</option>
            <option>UTC +2H (EET)</option>
            <option>UTC +2H (CAT)</option>
            <option>UTC +3H (MSK)</option>
            <option>UTC +3H (TRT)</option>
            <option>UTC +3H (AST)</option>
            <option>UTC +3H (EAT)</option>
            <option>UTC +3H (AST)</option>
            <option>UTC +3H (AST)</option>
            <option>UTC +3H (AST)</option>
            <option>UTC +3H (AST)</option>
            <option>UTC +3H (AST)</option>


          </select>
        </div>
      </form>
    </div>
  )
}

export default ScheduleForm;