import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddService from './AddService';
import RemoveService from './RemoveService';

const ServicesList = ({ data: {loading, error, services }}) => {
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
      <AddService />
      { services.map( service =>
        (<div key={service.id} className="channel">
          {`${service.description} $${service.rate}`}
          <RemoveService serviceID={service.id}/>
        </div>)
      )}
    </div>
  );
};

export const servicesListQuery = gql`
  query ServicesListQuery {
    services {
      id
      description
      rate
    }
  }
`;

export default graphql(servicesListQuery, {
  options: { pollInterval: 500 },
})(ServicesList);
