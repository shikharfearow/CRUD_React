import React from 'react'
import user from "../images/user.png"
const ContactCard = (contact)=>{
    const {name,email} = contact.contact;
    return(
        <div className="item">
            <img className='ui avatar image' src={user} alt="user"/>
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <i class="trash alternate outline icon"
               style={{color:"red",marginTop:"7px",float:"right",cursor:"pointer"}}
            >
            </i>
        </div>
    );
};

export default ContactCard;