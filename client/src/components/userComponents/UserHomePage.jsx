import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import dateFormat from 'dateformat';

const GET_USER = gql`
  query($email: String!) {
    user(email: $email) {
      firstName
      lastName
      phone
      company
      schedule {
        location
        timeZone
        date
        indefinitely
      }
    }
  }
`;

let UserHomePage = (props) => {

  const { loading, error, data, refetch } = useQuery(GET_USER, {variables: {email: props.email}});

  useEffect(() => {
    refetch();
  }, []);

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
            <span>Until: {data.user.schedule.indefinitely ? 'Indefinitely' : dateFormat(data.user.schedule.date, 'dddd, mmmm dS, yyyy')}</span>
          </div>
          <div >
            <span>Time Zone: {data.user.schedule.timeZone}</span>
          </div>
        </section>
        <section className="user-description-section">
          <div className="title-schedule-div">
            <span className="title-user">User Information</span>
          </div>
          <div className="user-info-div">
            <span className="full-name">Full Name: {data.user.firstName} {data.user.lastName}</span>
          </div>
          <div className="user-info-div">
            <span>Email: {props.email}</span>
          </div>
          <div className="user-info-div">
            <span>Phone: {data.user.phone}</span>
          </div>
          <div className="user-info-div">
            <span>Employed At: {data.user.company}</span>
          </div>
        </section>
        <div className="ebdiv">
          <button className="eb">Edit</button>
        </div>
      </div>
    )
  }
}

export default UserHomePage;