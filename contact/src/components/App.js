import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact.js';
import Contactlist from './Contactlist';

function App() {

  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact)=>{
    setContacts([...contacts,contact]);
  }

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <Contactlist contacts={contacts}/>
    </div>
  );
}

export default App;
