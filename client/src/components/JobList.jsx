import React from 'react';
import { useQuery, gql } from '@apollo/client';


const getHelloQuery = gql`
  {
    hello
  }
`;


let JobList = (props) => {
  const { loading, error, data } = useQuery(getHelloQuery);


  if (loading) { return <p>Loading...</p> };
  if (error) { return error.message };
  if (data) { console.log(data) };

  return <p>Plz</p>;
}

export default JobList;