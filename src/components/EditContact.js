import React, { useState } from "react";
import axios from 'axios'


function EditContact({ contact }) {
    const [ name, setName ] = useState(contact.name)
    const [ number, setNumber ] = useState(contact.number)
    
    // Edit contact function
    const editContact = (id) => {
        const editContactObject = {
          name: name,
          number: number
        }
      
        axios
      .put(`https://phonebook-app-api.herokuapp.com/contacts/${contact.id}`, editContactObject)
      .then(response => {
        console.log(response)
        window.location.reload(false);
    })
    }

    // cancel edit handle/function > for onClick -- 'x' and 'close' modal buttons
    function handleCancelEdit(e) {
        e.preventDefault();
        // reset to initial value/state
        setName(contact.name);
        setNumber(contact.number);
      }

    return (
        <>
       
<button type="button" class="btn btn-warning btn-edit" data-bs-toggle="modal" data-bs-target={`#id${contact.id}`}>
  Edit
</button>


<div class="modal fade" id={`id${contact.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Edit Contact</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancelEdit}></button>
      </div>

      <div class="modal-body m-3">
        Name: <input 
        value={name}
        onChange={e => setName(e.target.value)}/>
        Number: <input 
        value={number}
        onChange={e => setNumber(e.target.value)} />
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancelEdit}>Close</button>
        <button type="button" class="btn btn-primary" onClick={() => editContact(contact.id)} >Edit</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default EditContact
