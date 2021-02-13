import React from 'react';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, createHttpLink } from '@apollo/client';
import JobList from './JobList';

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

    };
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main-div">
          <JobList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
