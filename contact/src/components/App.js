import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact.js';
import Contactlist from './Contactlist';

function App() {

  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact)=>{
    setContacts([...contacts,contact]);
  }

  useEffect(()=>{
    const contact = JSON.parse(localStorage.getItem('contacts'));
    if(contact) setContacts([contact]);
  },[]);

  useEffect(()=>{
    if(contacts) localStorage.setItem('contacts',JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <Contactlist contacts={contacts}/>
    </div>
  );
}

export default App;
