import './App.css';
import React,{useState, useEffect} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from  "./ContactList";

function App() {

const [contacts,setContacts] = useState([]);
const addContactHandler = (contact)=>{
  setContacts([...contacts,contact])
}
useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
  console.log(retriveContacts)
  if(retriveContacts)
setContacts(retriveContacts);
}, [], );

useEffect(()=>{
localStorage.setItem("contacts",JSON.stringify(contacts))
}, [contacts]
);
  return (
    <div className="App ui container">
    <Header/>
     <AddContact addContactHandler={addContactHandler}></AddContact>
     <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
