import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddExpense from './AddExpense';
import RemoveExpense from './RemoveExpense';

const ExpensesList = ({ data: {loading, error, expenses }}) => {
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
      <AddExpense />
      { expenses.map( expense =>
        (<div key={expense.id} className="channel">
          {`${expense.description} $${expense.cost}`}
          <RemoveExpense expenseID={expense.id}/>
        </div>)
      )}
    </div>
  );
};

export const expensesListQuery = gql`
  query ExpensesListQuery {
    expenses {
      id
      description
      cost
    }
  }
`;

export default graphql(expensesListQuery, {
  options: { pollInterval: 500 },
})(ExpensesList);
