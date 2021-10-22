import './index.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';



function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand m-2" href="/">Phonebook App</a>
  </nav>
      <AddContact />
     <ContactList />
    </>
  );
}

export default App;
