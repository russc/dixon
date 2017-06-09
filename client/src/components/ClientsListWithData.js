import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddClient from './AddClient';
import RemoveClient from './RemoveClient';

const ClientsList = ({ data: {loading, error, clients }}) => {
  if (loading) {
    return (
      <div>
        <i className="fa fa-circle-o-notch fa-spin fa-2x loading"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddClient />
      { clients.map( cl =>
        (<div key={cl.id} className="channel">{`${cl.first} ${cl.last} ${cl.email} ${cl.phone}`}<RemoveClient clientID={cl.id}/></div>)
      )}
    </div>
  );
};

export const clientsListQuery = gql`
  query ClientsListQuery {
    clients {
      id
      first
      last
      email
      phone
    }
  }
`;

export default graphql(clientsListQuery, {
  options: { pollInterval: 500 },
})(ClientsList);
