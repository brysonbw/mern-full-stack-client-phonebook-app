import React, { useState } from 'react'
import axios from 'axios'

function AddContact({contacts, setContacts}) {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')


  // Creating an object for the new contact 
    const addContact = event => {
    event.preventDefault()
    const contactObject = {
      name: name,
      number: number
    }
  
    // Posting and sending the object/data to the database
    axios
      .post('https://phonebook-app-api.herokuapp.com/contacts', contactObject)
      .then(response => {
        setContacts([...contacts, contactObject])
        setName('')
        setNumber('')
    })
  }



    return (
        <>
        <div class="card-body">
        <form onSubmit={addContact}>
        <h2>Add A New Contact</h2>
        <div>
          Name: <input placeholder="ex. john doe" required
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
          Number: <input placeholder="ex. (555)555-5555" required
          value={number} 
          onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
  </div>
        </>
    )
}

export default AddContact
