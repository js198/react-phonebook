import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact_entry.css';

class ContactEntry extends Component {
  deleteContact(id){
   	//console.log('deleted');
   	this.props.onDelete(id);
  }

  render() {
  	//console.log(this.props); used to access state.contacts from app.js
    return (
      <li className="contacts">
        { this.props.contact.name } - { this.props.contact.number } <button onClick={this.deleteContact.bind(this)}>X</button>
      </li>
    );
  }
}

ContactEntry.propsTypes = {
	contact: PropTypes.object,
	onDelete: PropTypes.func
}

export default ContactEntry;