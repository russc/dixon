import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { eventsListQuery } from './EventsListWithData';

class AddEvent extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        comments: this.state.comments,
        date: new Date(this.state.date) },
        refetchQueries: [ { query: eventsListQuery }],
      });
      this.setState({description:null, rate:null});
      event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="comments" onChange={(e) => this.setState({ comments: e.target.value })} />
        <input type="datetime-local" style={{width:'300px'}} onChange={(e) => this.setState({ date: e.target.value })}/>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

const addEventMutation = gql`
  mutation addEvent($comments: String!, $date: String!) {
    addEvent(comments: $comments, date: $date) {
      id
      comments
      date
    }
  }
`;


const AddEventWithMutation = graphql(
  addEventMutation
)(AddEvent);

export default AddEventWithMutation;
