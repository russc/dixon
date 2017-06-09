import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { clientsListQuery } from './ClientsListWithData';

class AddClient extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        phone: this.state.phone },
        refetchQueries: [ { query: clientsListQuery }],
      });
      this.setState({first:null, last:null, email:null, phone:null});
      event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="first" onChange={(e) => this.setState({ first: e.target.value })} />
        <input type="text" placeholder="last"  onChange={(e) => this.setState({ last: e.target.value })}/>
        <br />
        <input type="email" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}/>
        <input type="tel" placeholder="phone" onChange={(e) => this.setState({ phone: e.target.value })}/>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

const addClientMutation = gql`
  mutation addClient($first: String!, $last: String!, $email:String!, $phone:String!) {
    addClient(first: $first, last: $last, email: $email, phone: $phone) {
      id
      first
      last
      email
      phone
    }
  }
`;


const AddClientWithMutation = graphql(
  addClientMutation
)(AddClient);

export default AddClientWithMutation;
