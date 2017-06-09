import React from 'react';
import { gql, graphql } from 'react-apollo';

const DeleteServiceButton = ({serviceID, mutate}) => {
  return(
    <i className="fa fa-trash-o delete" aria-hidden="true"
      onClick={() => mutate({ variables: { id: serviceID } })}></i>
  );
}

const removeServiceMutation = gql`
  mutation removeService($id: Int!) {
    removeService(id: $id) {
      id
    }
  }
`;

export default graphql(removeServiceMutation)(DeleteServiceButton);
