import React from 'react';
import { gql, graphql } from 'react-apollo';

const DeleteExpenseButton = ({expenseID, mutate}) => {
  return(
    <i className="fa fa-trash-o delete" aria-hidden="true"
      onClick={() => mutate({ variables: { id: expenseID } })}></i>
  );
}

const removeExpenseMutation = gql`
  mutation removeExpense($id: Int!) {
    removeExpense(id: $id) {
      id
    }
  }
`;

export default graphql(removeExpenseMutation)(DeleteExpenseButton);
