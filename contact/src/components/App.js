import React from 'react';
import './App.css';
import Header from './Header.js';
import AddContact from './AddContact.js';
import Contactlist from './Contactlist';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "Dipesh@gmail.com"
    },
    {
      id: "2",
      name: "Nick",
      email: "nick@gmail.com"
    },
    {
      id: "3",
      name: "Rick",
      email: "Rick@gmail.com"
    }
  ];

  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <Contactlist contacts={contacts}/>
    </div>
  );
}

export default App;
