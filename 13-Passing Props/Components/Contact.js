import React from 'react';
import ReactDOM from 'react-dom';

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img scr={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={require("../images/phone-icon.png")} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={require("../images/mail-icon.png")} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

