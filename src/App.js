import './index.css';
import axios from 'axios';
import { useState } from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';


function App() {
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


  

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand m-2" href="/">Phonebook App</a>
  </nav>
  <AddContact contacts={contacts} setContacts={setContacts} /> 
  <ContactList contacts={contacts} setContacts={setContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
