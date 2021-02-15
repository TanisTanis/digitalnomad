import React, { useState } from 'react';
import JobList from '../jobs/JobList';
import UserHomePage from './UserHomePage';

class UserHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home'
    };

    this.userPageFormatter = this.userPageFormatter.bind(this);
    this.changePage = this.changePage.bind(this);
  }


  changePage(page) {
    this.setState({
      page: page
    });
  }

  userPageFormatter() {
    if (this.state.page === 'home') {
      return <UserHomePage email={this.props.email}/>
    }
    if (this.state.page === 'jobs') {
      return(<section className="login-joblist">
          <JobList />
        </section>)
    }
  }

  render() {
    return(
      <div className="user-home-div">
        <div className="user-home-button-bar">
          <button className="uhb uhb-1" onClick={() => {
            this.changePage('home');
          }}>Home</button>
          <button className="uhb uhb-2">Set A Schedule</button>
          <button className="uhb uhb-3" onClick={() => {
            this.changePage('jobs');
          }}>Jobs</button>
        </div>
        {this.userPageFormatter()}
      </div>
    )
  }
}

export default UserHome;