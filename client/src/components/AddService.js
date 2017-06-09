import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { servicesListQuery } from './ServicesListWithData';

class AddService extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        description: this.state.description,
        rate: this.state.rate },
        refetchQueries: [ { query: servicesListQuery }],
      });
      this.setState({description:null, rate:null});
      event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="description" onChange={(e) => this.setState({ description: e.target.value })} />
        <label>$</label>
        <input type="number" placeholder="rate"  onChange={(e) => this.setState({ rate: e.target.value })}/>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

const addServiceMutation = gql`
  mutation addService($description: String!, $rate: Int!) {
    addService(description: $description, rate: $rate) {
      id
      description
      rate
    }
  }
`;


const AddServiceWithMutation = graphql(
  addServiceMutation
)(AddService);

export default AddServiceWithMutation;
