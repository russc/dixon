import React from 'react';
import { gql, graphql } from 'react-apollo';

const DeleteClientButton = ({clientID, mutate}) => {
  return(
    <i className="fa fa-trash-o delete" aria-hidden="true"
      onClick={() => mutate({ variables: { id: clientID } })}></i>
  );
}

const removeClientMutation = gql`
  mutation removeClient($id: Int!) {
    removeClient(id: $id) {
      id
    }
  }
`;

export default graphql(removeClientMutation)(DeleteClientButton);
