import React from 'react';
import { useQuery, gql } from '@apollo/client';
import dateFormat from 'dateformat';

let UserHomePage = (props) => {

  const getUserQuery = gql`
    query {
      user(email: "${props.email}") {
        firstName
        lastName
        schedule {
          location
          timeZone
          until
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getUserQuery);

  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>{error.message}</p> }
  if (data) {
    return (
      <div className="main-user-info-div">
        <section className="user-info-section">
          <div className="title-schedule-div">
            <span className="title-schedule">{data.user.firstName}'s Current Schedule</span>
          </div>
          <div className="user-info-div">
            <span>Working in: {data.user.schedule.location}</span>
          </div>
          <div className="user-info-div">
            <span>Until: {dateFormat(data.user.schedule.until, 'dddd, mmmm dS, yyyy')}</span>
          </div>
          <div className="user-info-div">
            <span>Time Zone: {data.user.schedule.timeZone}</span>
          </div>
        </section>
      </div>
    )
  }
}

export default UserHomePage;