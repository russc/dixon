import React, { Component } from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './animate.css';
import ClientsListWithData from './components/ClientsListWithData';
import ServicesListWithData from './components/ServicesListWithData';
import ExpensesListWithData from './components/ExpensesListWithData';
import EventsListWithData from './components/EventsListWithData';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';


const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">Dixon 3D Lawn</div>
            <div className="container animated fadeIn">
              <h1>Clients</h1>
              <ClientsListWithData />
              <hr />

              <h1>Services</h1>
              <ServicesListWithData />

              <hr />

              <h1>Expenses</h1>
              <ExpensesListWithData />
              <hr />

              <h1>Calendar</h1>
              <EventsListWithData />
              <hr />
            </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
