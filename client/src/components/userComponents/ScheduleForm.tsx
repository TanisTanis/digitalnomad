import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_SCHEDULE = gql`
  mutation addUserSchedule($email: String!, $location: String!, $date: Date, $indefinitely: Boolean!, $timeZone: String!) {
    addSchedule(email: $email, location: $location, date: $date, indefinitely: $indefinitely, timeZone: $timeZone)
  }
`;

interface Props {
  email: string
}

const ScheduleForm: React.FC<Props> = ({ email }) => {
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('UTC -8H (PST)');
  const [length, setLength] = useState('1');
  const [time, setTime] = useState('day(s)');
  const [indefinitely, setIndefinitely] = useState(false);
  const [incomplete, setIncomplete] = useState(false);
  const [updated, setUpdated] = useState(false);

  const [addSchedule, { data }] = useMutation(ADD_SCHEDULE);

  function Indefinitely(): void {
    if (!indefinitely) {
      document.getElementById('length-select')?.setAttribute('disabled', "true");
      document.getElementById('dwmy-select')?.setAttribute('disabled', "true");
    }
    if (indefinitely) {
      document.getElementById('length-select')?.removeAttribute('disabled');
      document.getElementById('dwmy-select')?.removeAttribute('disabled');
    }
    setIndefinitely(!indefinitely);
  }

  function parseDate(): number | void {
    if (!indefinitely) {
      let newDate: Date | number = new Date();
      let dayCount: number = 0;
      let newLength: number = Number(length);

      if (time === 'day(s)') {
        dayCount += newLength;
      }
      if (time === 'week(s)') {
        dayCount += newLength * 7;
      }
      if (time === 'month(s)') {
        dayCount += newLength * 30;
      }
      if (time === 'year(s)') {
        dayCount += newLength * 365;
      }
      newDate = newDate.setDate(newDate.getDate() + dayCount);
      return newDate;
    }
  }

  function scheduleSubmit(): void {

    if (location !== '') {
      addSchedule({ variables: { email: email, location: location, date: parseDate(), indefinitely: indefinitely, timeZone: timeZone } })
        .then(() => {
          setUpdated(true);
          setIncomplete(false);
          let form = document.getElementById('schedule-form') as HTMLFormElement;
          form.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (location === '') {
      setIncomplete(true);
    }
  }


  return(
    <div className="schedule-form-div">
      {updated ? <p>Schedule Updated Successfully!</p> : null}
      {incomplete ? <p className="incomplete">Please fill out the entire form before submission</p> : null}
      <form id="schedule-form">
        <div className="location-input-div">
          <label htmlFor="location-input">Where will you be working from?</label>
          {' '}
          <input type="text" id="location-input" onChange={(e) => {
            setLocation(e.target.value);
          }}></input>
        </div>
        <div className="timezone-select-div">
          <label htmlFor="timeZone-select">What time zone is this in?</label>
          {' '}
          <select id="timeZone-select" defaultValue="UTC -8H (PST)" onChange={(e) => {
            setTimeZone(e.target.value);
          }}>
            <option value="UTC -11H (NUT)">UTC -11H (NUT)</option>
            <option value="UTC -10H (TAHT)">UTC -10H (TAHT)</option>
            <option value="UTC -10H (HST)">UTC -10H (HST)</option>
            <option value="UTC -10H (CKT)">UTC -10H (CKT)</option>
            <option value="UTC -10H (LINT)">UTC -10H (LINT)</option>
            <option value="UTC -9H (AKST)">UTC -9H (AKST)</option>
            <option value="UTC -8H (PST)">UTC -8H (PST)</option>
            <option value="UTC -7H (MST)">UTC -7H (MST)</option>
            <option value="UTC -6H (CST)">UTC -6H (CST)</option>
            <option value="UTC -5H (EST)">UTC -5H (EST)</option>
            <option value="UTC -5H (EASST)">UTC -5H (EASST)</option>
            <option value="UTC -4H (AST)">UTC -4H (AST)</option>
            <option value="UTC -4H (PYST)">UTC -4H (PYST)</option>
            <option value="UTC -2H (GST)">UTC -2H (GST)</option>
            <option value="UTC -1H (AZOT)">UTC -1H (AZOT)</option>
            <option value="UTC -1H (CVT)">UTC -1H (CVT)</option>
            <option value="UTC -1H (EGT)">UTC -1H (EGT)</option>
            <option value="UTC (GMT)">UTC (GMT)</option>
            <option value="UTC +1H (CET)">UTC +1H (CET)</option>
            <option value="UTC +1H (WAT)">UTC +1H (WAT)</option>
            <option value="UTC +2H (EET)">UTC +2H (EET)</option>
            <option value="UTC +2H (CAT)">UTC +2H (CAT)</option>
            <option value="UTC +3H (MSK)">UTC +3H (MSK)</option>
            <option value="UTC +3H (TRT)">UTC +3H (TRT)</option>
            <option value="UTC +3H (AST)">UTC +3H (AST)</option>
            <option value="UTC +3H (EAT)">UTC +3H (EAT)</option>
            <option value="UTC +4H (GET)">UTC +4H (GET)</option>
            <option value="UTC +4H (AMT)">UTC +4H (AMT)</option>
            <option value="UTC +4H (SAMT)">UTC +4H (SAMT)</option>
            <option value="UTC +4H (AZT)">UTC +4H (AZT)</option>
            <option value="UTC +4H (GST)">UTC +4H (GST)</option>
            <option value="UTC +4H (IRST)">UTC +4H (IRST)</option>
            <option value="UTC +5H (YEKT)">UTC +5H (YEKT)</option>
            <option value="UTC +5H (ORAT)">UTC +5H (ORAT)</option>
            <option value="UTC +5H (TMT)">UTC +5H (TMT)</option>
            <option value="UTC +5H (UZT)">UTC +5H (UZT)</option>
            <option value="UTC +5H (TJT)">UTC +5H (TJT)</option>
            <option value="UTC +5H (PKT)">UTC +5H (PKT)</option>
            <option value="UTC +5H (AFT)">UTC +5H (AFT)</option>
            <option value="UTC +5H (IST)">UTC +5H (IST)</option>
            <option value="UTC +5H (MVT)">UTC +5H (MVT)</option>
            <option value="UTC +5H (IOT)">UTC +5H (IOT)</option>
            <option value="UTC +5H (TFT)">UTC +5H (TFT)</option>
            <option value="UTC +6H (OMST)">UTC +6H (OMST)</option>
            <option value="UTC +6H (ALMT)">UTC +6H (ALMT)</option>
            <option value="UTC +6H (KGT)">UTC +6H (KGT)</option>
            <option value="UTC +6H (NPT)">UTC +6H (NPT)</option>
            <option value="UTC +6H (BTT)">UTC +6H (BTT)</option>
            <option value="UTC +6H (BST)">UTC +6H (BST)</option>
            <option value="UTC +7H (KRAT)">UTC +7H (KRAT)</option>
            <option value="UTC +7H (NOVT)">UTC +7H (NOVT)</option>
            <option value="UTC +7H (HOVT)">UTC +7H (HOVT)</option>
            <option value="UTC +7H (MMT)">UTC +7H (MMT)</option>
            <option value="UTC +7H (WIB)">UTC +7H (WIB)</option>
            <option value="UTC +7H (ICT)">UTC +7H (ICT)</option>
            <option value="UTC +8H (IRKT)">UTC +8H (IRKT)</option>
            <option value="UTC +8H (ULAT)">UTC +8H (ULAT)</option>
            <option value="UTC +8H (CST)">UTC +8H (CST)</option>
            <option value="UTC +8H (HKT)">UTC +8H (HKT)</option>
            <option value="UTC +8H (BNT)">UTC +8H (BNT)</option>
            <option value="UTC +8H (PHST)">UTC +8H (PHST)</option>
            <option value="UTC +8H (WITA)">UTC +8H (WITA)</option>
            <option value="UTC +8H (AWST)">UTC +8H (AWST)</option>
            <option value="UTC +9H (YAKT)">UTC +9H (YAKT)</option>
            <option value="UTC +9H (KST)">UTC +9H (KST)</option>
            <option value="UTC +9H (JST)">UTC +9H (JST)</option>
            <option value="UTC +9H (WIT)">UTC +9H (WIT)</option>
            <option value="UTC +9H (ACST)">UTC +9H (ACST)</option>
            <option value="UTC +9H (TLT)">UTC +9H (TLT)</option>
            <option value="UTC +10H (VLAT)">UTC +10H (VLAT)</option>
            <option value="UTC +10H (ACWST)">UTC +10H (ACWST)</option>
            <option value="UTC +10H (ACDT)">UTC +10H (ACDT)</option>
            <option value="UTC +10H (ChST)">UTC +10H (ChST)</option>
            <option value="UTC +10H (PGT)">UTC +10H (PGT)</option>
            <option value="UTC +10H (AEST)">UTC +10H (AEST)</option>
            <option value="UTC +11H (SRET)">UTC +11H (SRET)</option>
            <option value="UTC +11H (MAGT)">UTC +11H (MAGT)</option>
            <option value="UTC +11H (SAKT)">UTC +11H (SAKT)</option>
            <option value="UTC +11H (AEDT)">UTC +11H (AEDT)</option>
            <option value="UTC +11H (PONT)">UTC +11H (PONT)</option>
            <option value="UTC +11H (SBT)">UTC +11H (SBT)</option>
            <option value="UTC +11H (VUT)">UTC +11H (VUT)</option>
            <option value="UTC +12H (ANAT)">UTC +12H (ANAT)</option>
            <option value="UTC +12H (PETT)">UTC +12H (PETT)</option>
            <option value="UTC +12H (WAKT)">UTC +12H (WAKT)</option>
            <option value="UTC +12H (NRT)">UTC +12H (NRT)</option>
            <option value="UTC +12H (GILT)">UTC +12H (GILT)</option>
            <option value="UTC +12H (TVT)">UTC +12H (TVT)</option>
            <option value="UTC +12H (FJT)">UTC +12H (FJT)</option>
            <option value="UTC +12H (CHADT)">UTC +12H (CHADT)</option>
            <option value="UTC +12H (AOE)">UTC +12H (AOE)</option>
          </select>
        </div>
        <div className="time-length-div">
          <label htmlFor="length-select">How long will you be working this schedule?</label>
          {' '}
          <select id="length-select" onChange={(e) => {
            setLength(e.target.value);
          }} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </select>
          {' '}
          <select defaultValue="day(s)" id="dwmy-select" onChange={(e) => {
            setTime(e.target.value);
          }}>
            <option value="day(s)">day(s)</option>
            <option value="week(s)">week(s)</option>
            <option value="month(s)">month(s)</option>
            <option value="year(s)">year(s)</option>
          </select>
          {' '}
          <label>
            <input type="checkbox" onChange={Indefinitely}></input>
            Indefinitely
          </label>
        </div>
        <div>
          <button type="button" className="create-schedule-button" onClick={scheduleSubmit}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default ScheduleForm;