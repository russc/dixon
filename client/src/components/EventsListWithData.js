import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';
import moment from 'moment';
import AddEvent from './AddEvent';
import RemoveEvent from './RemoveEvent';
import '../animate.css';

const EventsList = ({ data: {loading, error, events }}) => {
  console.log(events);
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
      <AddEvent />
      { events.map( event =>
        (<div key={event.id} className="channel animated slideInLeft">
          {`${event.client.first} ${event.client.last}| ${moment(new Date(event.date)).format('MMM Do YYYY h:mm a')} | ${event.comments} `}
          <RemoveEvent eventID={event.id}/>
        </div>)
      )}
    </div>
  );
};

export const eventsListQuery = gql`
  query EventsListQuery {
    events {
      id
      comments
      date
      client {
        first
        last
        email
        phone
      }
    }
  }
`;

export default graphql(eventsListQuery, {
  options: { pollInterval: 500 },
})(EventsList);
