import React, { useState } from 'react'
import axios from 'axios'

function AddContact() {
    const [ name, setName ] = useState('')
    const [ number, setNumber ] = useState('')

    // Accessing name input data
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

 // Accessing number input data
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }     

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
        console.log(response)
    })
    window.location = "/";
  }



    return (
        <>
        <div class="card-body">
        <form onSubmit={addContact}>
        <h2>Add A New Contact</h2>
        <div>
          Name: <input placeholder="ex. john doe" required
          value={name} 
          onChange={handleNameChange}/>
                </div>
                <div>
          Number: <input placeholder="ex. (555)555-5555" required
          value={number} 
          onChange={handleNumberChange} />
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
