import React, { Component } from 'react';
import ContactEntry from './contact_entry';
import PropTypes from 'prop-types';

class Contacts extends Component {
  deleteContact(id){
	this.props.onDelete(id);
  }

  render() {
  	//console.log(this.props); used to access state.contacts from app.js
  	//take contacts passed through app.js and loop through getting each single contact
  	let contactEntries;
	if(this.props.contacts){
		   contactEntries = this.props.contacts.map(contact => {
		   return  (
		   	<ContactEntry onDelete={this.deleteContact.bind(this)} key={contact.name} contact={contact} />
		   	);
	   });
	}

    return (
      // <div>
      //   <nav className="navbar-default">
      //    <div className="navbar-header">
      //       <a className="navbar-brand" href="#">Open PhoneBook</a>
      //       <button type="button" className="navbar-toggle collapsed" data-toggle="#nav-collapse">
      //         <span className="icon-bar"></span>
      //         <span className="icon-bar"></span>
      //         <span className="icon-bar"></span>
      //       </button><br />
      //     </div>
      // <div className="collapse navbar-collapse" id="nav-collapse">
      //   <ul className="nav navbar-nav"></ul>
      // </div>
      //   </nav>
      // </div>
      <div className="phoneBook">
      	<h3>PhoneBook</h3><br />
        { contactEntries }
      </div>
    );
  }
}

Contacts.propsTypes = {
	contacts: PropTypes.array,
	onDelete: PropTypes.func
}

export default Contacts;