import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditContact from './EditContact'

function ContactList() {
    const [ contacts, setContacts ] = useState([]) 

    // Delete a contact 
    const deleteContact = (id) => {
        axios
    .delete(`https://phonebook-app-api.herokuapp.com/contacts/${id}`)
    .then(response => {
      console.log(response)
    })
    setContacts(contacts.filter(contact => contact.id !== id));
      }

    // Get all contacts and display contact list
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://phonebook-app-api.herokuapp.com/contacts')
      .then(response => {
        console.log('promise fulfilled')
        setContacts(response.data)
      })
  }, [])
    return (
        <>
        <div class="card-body">
          <h2>Contacts</h2>
            {contacts.map(contact => (
            <h5 class="card-text" key={contact.id}>
              Name: {contact.name}  
              <h5>Number: {contact.number}</h5>
              <EditContact contact={contact}/>
              <button className="delete-btn btn btn-danger" onClick={() => {deleteContact(contact.id);}}>
                Delete
                </button>
              </h5>
      ))}  
      </div>
        </>
    )
}

export default ContactList
