import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { expensesListQuery } from './ExpensesListWithData';

class AddExpense extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        description: this.state.description,
        cost: this.state.cost },
        refetchQueries: [ { query: expensesListQuery }],
      });
      this.setState({description:null, rate:null});
      event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="description" onChange={(e) => this.setState({ description: e.target.value })} />
        <label>$</label>
        <input type="number" placeholder="cost"  onChange={(e) => this.setState({ cost: e.target.value })}/>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

const addExpenseMutation = gql`
  mutation addExpense($description: String!, $cost: Int!) {
    addExpense(description: $description, cost: $cost) {
      id
      description
      cost
    }
  }
`;


const AddExpenseWithMutation = graphql(
  addExpenseMutation
)(AddExpense);

export default AddExpenseWithMutation;
