import React from "react";
import './ContactList.css'

export default function ContactList(props) {

  



    return (
        <div>
            <div className="content-container">

                {props.contactList ? props.contactList.map(
                    function (item, id) {
                        return (
                            <div key={id}> {item.personName} {item.phoneNumber}
                                <button className="delete-btn" onClick={(e) => {
                                    e.stopPropagation();
                                    props.deleteContact(item.id);
                                }}>Delete</button>
                            </div>
                        )
                    }) : null}

            </div>
        </div>)
}



// {props.contact ? props.c.map(function (item, id) {
//     return <div key={id}>{item.personName} {item.phoneNumber} </div>
// // }) : null} 