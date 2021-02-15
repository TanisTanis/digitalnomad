import React from 'react';
import CompanyHomePage from './CompanyHomePage';

class CompanyHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home'
    };

    this.companyPageFormatter = this.companyPageFormatter.bind(this);
  }

  companyPageFormatter() {
    if (this.state.page === 'home') {
      return <CompanyHomePage />
    }
  }

  render() {
    return(
      <div className="company-home-main-div">
        <div className="company-home-button-bar">
          <button>Company Home</button>
          <button>Post a Job Listing</button>
          <button>View Remote Employees</button>
        </div>
        {this.companyPageFormatter()}
      </div>
    );
  }
}

export default CompanyHome;