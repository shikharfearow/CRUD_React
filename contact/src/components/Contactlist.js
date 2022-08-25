import React from 'react';
import ContactCard from './ContactCard';
const Contactlist = (props)=>{

    const contactlist = props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact}/>
        );
    });

    return(
        <div className="ui relaxed divided list">
            {contactlist}
        </div>
    );
};

export default Contactlist;