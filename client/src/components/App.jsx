import React from 'react';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, createHttpLink } from '@apollo/client';
import Home from './Home';
import LogIn from './LogIn';
import EarthPic from './EarthPic';
import UserHome from './userComponents/UserHome';

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
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleWebTitleClick = this.handleWebTitleClick.bind(this);
    this.pageFormatter = this.pageFormatter.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleWebTitleClick() {
    this.setState({
      page: 'home',
    });
  }

  handleCreateClick() {
    this.setState({
      page: 'registerUser'
    });
  }

  handleUserLogin(email) {
    this.setState({
      page: 'user-home',
      email: email,
    })
  }

  changeFormat(format) {
    this.setState({
      page: format,
    })
  }

  pageFormatter() {
    if (this.state.page === 'home') {
      return <Home />
    }
    if (this.state.page === 'registerUser') {
      return <LogIn login={this.handleUserLogin}/>
    }
    if (this.state.page === 'user-home' && this.state.email !== '') {
      return <UserHome email={this.state.email}/>
    }

  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main-div">
          <header className="main-header">
            <div className="header-div">
              <span className="earth" onClick={this.handleWebTitleClick}><EarthPic /></span>
              <span className="web-title">
                {' '}
                <span className="digital-nomad-title" onClick={this.handleWebTitleClick}>Digital Nomad</span>
              </span>
              <section className="button-section">
                <div className="header-button-div">
                  {this.state.email === '' ? <button type="button" className="register-button" onClick={this.handleCreateClick}>Register</button> : null}
                </div>
                <div className="header-button-div">
                  {this.state.email === '' ? <button type="button" className="login-button" onClick={this.handleCreateClick}>Log In</button> : null}
                </div>
                <div className="header-button-div">
                  {this.state.email !== '' ?
                  <button className="user-home-button" onClick={() => {
                    this.changeFormat('user-home');
                  }}>User Home</button> : null}
                </div>
                <div className="header-button-div">
                  {this.state.email !== '' ?
                  <button className="logout-button" onClick={() => {
                    this.setState({
                      page: 'home',
                      email: ''
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
