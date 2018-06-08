import React, { Component } from 'react';
import uuid from 'uuid';
import { Jumbotron, Grid } from 'react-bootstrap';
import Contacts from './components/contacts';
import AddContact from './components/add_contact';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }
  //pass array of contacts previously held above and 
  //now in componentWillMount(as it refreshes on every change of state)
  // into the Contacts tag below

  componentWillMount() {
    this.setState({contacts: [
        { 
          id: uuid.v4(),
          name: 'Gilberto Silva',
          number: '08009879871'
        },
        {
          id: uuid.v4(),
          name: 'Faye Dunnaway',
          number: '09990876543'
        },
        {
          id: uuid.v4(),
          name: 'Marlon Brando',
          number: '11122456765'
        },
        {
          id: uuid.v4(),
          name: 'James Dean',
          number: '0123456789'
        }
      ]
    });
  }

  handleAddContact(contact){
    //console.log('Sometin has been added: ' + contact);
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({ contacts });
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({ contacts });
  }

  render() {
    return (
      <Grid className="App">
        <Jumbotron>
          <h2>Contacts App</h2>
        </Jumbotron>
        <AddContact addContact={this.handleAddContact.bind(this)} />
        <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)} />
      </Grid>
    );
  }
}

export default App;
