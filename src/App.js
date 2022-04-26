import React from "react";
import './App.css';
import PageTitle from "./components/1_header/PageTitle";
import InsertContact from "./components/2_body/InsertContact";
import ContactList from "./components/2_body/ContactList";


export default function App() {

  const [contactList, setContactList] = React.useState(loadFromLocalStorage())

  function addContact(formData) {
    setContactList(prevContent => {
      let isAlreadyInTheList = prevContent.filter(e => e.id === formData.id || e.phoneNumber === formData.phoneNumber).length > 0;
      let newList = isAlreadyInTheList ?  prevContent : [...prevContent, formData]
      localStorage.setItem('contacts', JSON.stringify(newList));
      return newList;
    })

  }

  function deleteContact(id) {
    setContactList(prevContent => {
      let newList = prevContent.filter(e => e.id !== id);
      localStorage.setItem('contacts', JSON.stringify(newList));
      return newList;
    })
  }

  function loadFromLocalStorage() {
    var oldContacts = localStorage.getItem('contacts');

    if (oldContacts === null)
        return [];

    return JSON.parse(oldContacts);
  }

  return (
    <main className="container">
      <PageTitle />
      <InsertContact addContact={addContact} />
      <ContactList contactList={contactList} deleteContact={deleteContact} />
    </main>
  )
}

