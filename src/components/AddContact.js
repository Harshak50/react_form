import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { v4 as uuid } from 'uuid';
function AddContact(props) {
  const [state, newState] = useState({id:null,name: "", email: "" });
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler(state);
    navigate(-1);
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => newState({...state,name: e.target.value,id: uuid() })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => newState({...state,email: e.target.value })}
          />
        </div>
        <button className="ui button blue" >Add</button>
      </form>
    </div>
  );
}

export default AddContact;
