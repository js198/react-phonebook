import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddContact extends Component {
  //constructor to take the new contact and add it to the array
  constructor() {
    super();
    this.state = {
      newContact: {}
    }
  }

  handleSubmit(e){
    //console.log('Submitted the following name: ' + this.refs.name.value);
    if (this.refs.name.value === ""){
      alert('No name has been entered');
    } else if (!Number(this.refs.number.value)){
      alert('Thst is not a valid Number');
    } else {
      this.setState({newContact: {
        id: uuid.v4(),
        name: this.refs.name.value,
        number: this.refs.number.value
      }}, function(){
        //console.log(this.state);
        this.props.addContact(this.state.newContact);
      });
    }
    e.preventDefault();
  }

  //ref in the form important for state to grab a hold of the value
  render() {
    return (
      <div>
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input type="text" ref="name" placeholder="Name" />
          </div>
          <div>
            <label>Number</label><br />
            <input type="tel" ref="number" placeholder="Number" />
          </div><br />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

AddContact.propsTypes = {
  addContact: PropTypes.func
}

export default AddContact;