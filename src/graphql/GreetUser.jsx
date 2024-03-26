import { useQuery } from '@apollo/client';
import React from 'react';
import Greet from './query.gql';

function GreetUser() {
  const { data, loading, error } = useQuery(Greet);

  if (loading) {
    return <p>Fetching users name from Graphql</p>;
  }

  if (error) {
    return <p>Failed to fetch users</p>;
  }

  return <p>Our first user: {data.users[0].name}</p>;
}

export default GreetUser;
