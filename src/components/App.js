import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetailPage from "./ContactDetailPage";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
  };


  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList);
  } 



useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
     
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts}  getContactId={removeContactHandler}/>} />
          <Route path="/add" element = {  <AddContact addContactHandler={addContactHandler} />}/>
          <Route path="/contact/:id" element={<ContactDetailPage></ContactDetailPage>}/>
         </Routes>
      </Router>
    
    
    </div>
  );
  }

export default App;
