import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { addUser } from "../../assets/index";

const ClubClasses = {
  Music: "ClubElement Music",
  Chess: "ClubElement Chess",
  FootBall: "ClubElement FootBall",
  Scouts: "ClubElement Scouts",
};

const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>
        {contact.Clubs.map((Club) => (
          <span key={Club} className={ClubClasses[Club]}>
            {Club}
          </span>
        ))}
      </td>
    </tr>
  );
};

const Popup = ({ isOpen, closePopup, NewContact, handleInputChange, handleSave }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add New Contact</h2>
        <label>
          Contact Name:
          <input
            type="text"
            name="name"
            value={NewContact.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <br/>Email:
          <input
            type="email"
            name="email"
            value={NewContact.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
        <br/>Clubs (comma-separated):
          <input
            type="text"
            name="Clubs"
            value={NewContact.Clubs.join(", ")}
            onChange={(e) =>
              handleInputChange({
                target: { name: "Clubs", value: e.target.value.split(",").map((club) => club.trim()) },
              })
            }
          />
        </label>
        <div className="popup-buttons">
          <button onClick={handleSave}>Save Contact</button>
          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const ContactsDashboard = ({ Contacts1 }) => {
  return (
    <div className="container12">
      <div className="header12">
        <h1>Contacts:</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Email</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>
          {Contacts1.map((contact) => (
            <ContactRow key={contact.email} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Contacts() {
  const [NewContact, SetNewContact] = useState({
    name: "",
    email: "",
    Clubs: [],
  });

  const [Contacts1, SetContacts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    SetNewContact({ name: "", email: "", Clubs: [] });
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSaveContact = () => {
    SetContacts((prevContacts) => [...prevContacts, NewContact]);
    closePopup();
  };

  return (
    <>
      <div className="emptyspace">
        <p></p>
      </div>
      <div className="name-buttons-cont">
        <div className="Contact">
          <p>Contacts</p>
        </div>
        <div className="Buttons-cont">
          <div className="Search-bar">
            <div className="Inputcontainer">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className="NewContact123">
            <button onClick={openPopup}><p>Add</p><p>Contanct</p></button>
          </div>
          <div className="Options">
            <p>Options</p>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        closePopup={closePopup}
        NewContact={NewContact}
        handleInputChange={handleInputChange}
        handleSave={handleSaveContact}
      />

      <ContactsDashboard Contacts1={Contacts1} />
    </>
  );
}
