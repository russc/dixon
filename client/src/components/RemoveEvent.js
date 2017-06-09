import React from 'react';
import { gql, graphql } from 'react-apollo';

const DeleteEventButton = ({eventID, mutate}) => {
  return(
    <i className="fa fa-trash-o delete" aria-hidden="true"
      onClick={() => mutate({ variables: { id: eventID } })}></i>
  );
}

const removeEventMutation = gql`
  mutation removeEvent($id: Int!) {
    removeEvent(id: $id) {
      id
    }
  }
`;

export default graphql(removeEventMutation)(DeleteEventButton);
