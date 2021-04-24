import React from 'react';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, createHttpLink } from '@apollo/client';
import Home from './Home';
import LogIn from './LogIn';
import EarthPic from './EarthPic';
import UserHome from './userComponents/UserHome.tsx';
import CompanyHome from './companyComponents/CompanyHome';
import SingleListing from './jobs/SingleListing.tsx';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      email: '',
      companyEmail: '',
      currentJob: '',
    };

    this.pageFormatter = this.pageFormatter.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleCompanyLogin = this.handleCompanyLogin.bind(this);
    this.handleJobSelect = this.handleJobSelect.bind(this);
  }

  handleUserLogin(email) {
    this.setState({
      page: 'user-home',
      email: email,
    })
  }

  handleCompanyLogin(email) {
    this.setState({
      page: 'company-home',
      companyEmail: email,
    });
  }

  handleJobSelect(jobId) {
    this.setState({
      page: 'single-job',
      currentJob: jobId
    });
  }

  changeFormat(format) {
    this.setState({
      page: format,
    })
  }

  pageFormatter() {
    if (this.state.page === 'home') {
      return <Home handleJobSelect={this.handleJobSelect}/>
    }
    if (this.state.page === 'login') {
      return <LogIn login={this.handleUserLogin} companyLogin={this.handleCompanyLogin}/>
    }
    if (this.state.page === 'user-home' && this.state.email !== '') {
      return <UserHome email={this.state.email} changeFormat={this.changeFormat}/>
    }
    if (this.state.page === 'company-home' && this.state.companyEmail !== '') {
      return <CompanyHome email={this.state.companyEmail}/>
    }
    if (this.state.page === 'single-job' && this.state.currentJob !== '') {
      return <SingleListing id={this.state.currentJob} changeFormat={this.changeFormat}/>
    }

  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main-div">
          <header className="main-header">
            <div className="header-div">
              <span className="earth" onClick={() => {
                this.setState({
                  page: 'home',
                })
              }}><EarthPic /></span>
              <span className="web-title">
                {' '}
                <span className="digital-nomad-title" onClick={() => {
                  this.setState({
                    page: 'home',
                  });
                }}>Digital Nomad</span>
              </span>
              <section className="button-section">
                <div className="header-button-div">
                  {(this.state.email === '' && this.state.companyEmail === '') ? <button type="button" className="register-button">Register</button> : null}
                </div>
                <div className="header-button-div">
                  {(this.state.email === '' && this.state.companyEmail === '') ? <button type="button" className="login-button" onClick={() => {
                    this.setState({
                      page: 'login',
                    });
                  }}>Log In</button> : null}
                </div>
                <div className="header-button-div">
                  {this.state.email !== '' ?
                  <button className="user-home-button" onClick={() => {
                    this.changeFormat('user-home');
                  }}>User Home</button> : null}
                </div>
                <div className="header-button-div">
                  {this.state.companyEmail !== '' ?
                    <button className="company-home-button" onClick={() => {
                      this.changeFormat('company-home');
                    }}>Company Home</button> : null}
                </div>
                <div className="header-button-div">
                  {(this.state.email !== '' || this.state.companyEmail !== '') ?
                  <button className="logout-button" onClick={() => {
                    this.setState({
                      page: 'home',
                      email: '',
                      companyEmail: '',
                    });
                  }}>Log Out</button> : null}
                </div>
              </section>
            </div>
          </header>
          {this.pageFormatter()}
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
