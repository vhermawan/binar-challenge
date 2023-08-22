import React from 'react';
import { Container } from 'reactstrap';
import { useQuery, gql } from '@apollo/client';

const FILMS_QUERY = gql`query GetLocations {
  locations {
    id
    name
    description
  }
}`;

export default function GraphqlSection() {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  console.log('data', data, loading, error);
  return (
    <Container fluid>
      <div>GraphqlSection</div>
    </Container>
  );
}
