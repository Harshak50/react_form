import React from "react";
import user from "../assets/user.png";
import { useLocation } from 'react-router-dom';



const ContactDetailPage = (props) => {
    const location = useLocation();
const { state } = location;
console.log(state)
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user}></img>
                <div className="content">
                    <div className="header">{state.name}</div>
                    <div className="description">{state.email}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactDetailPage;
