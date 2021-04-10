import React from "react";
import Avatar from "./Avatar";

function Contact(props) {
  const image = props.image;
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={image} />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Contact;
