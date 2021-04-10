import React from "react";
import Contact from "./Contact";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://blob.sololearn.com/avatars/a6c18ecb-3160-40ad-8677-f07254faae11.jpg" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
