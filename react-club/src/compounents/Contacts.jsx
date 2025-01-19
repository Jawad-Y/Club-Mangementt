import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
// import { FiUserPlus } from "react-icons/fi";
import { addUser } from "../assets/index";

export default function Contacts() {
  return (
    <>
      <div className="emptyspace">
        {" "}
        <p></p>
      </div>
      <div className="name-buttons-cont">
        <div className="Contact">
          <p>Contacts</p>
        </div>

        <div className="Buttons-cont">
          <div className="Search-bar">
            <div class="Inputcontainer">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <div className="NewContact">
            <div>
              <img src={addUser} alt="addUser" className="addUserIcon" />
            </div>
            <div>
              <p>New</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="Options">
            <p>Options</p>
          </div>
        </div>
      </div>

      <ContactsDashboard/>;
    </>
  );
}

const contacts = [
  { name: "jawad", email: "jawad@gmail.com", Clubs: ["Music"] },
];

const ClubClasses = {
  Music: "ClubElement Music",
  Chess: "ClubElement Chess",
  FootBall: "ClubElement FootBall",
  Scouts: "ClubElement Scouts",
};

const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td>
         {contact.name}
      </td>
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

const ContactsDashboard = () => {
  return (
    <div className="container12">
      <div className="header12">
        <h1>
          Contacts
        </h1>
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
          {contacts.map((contact) => (
            <ContactRow key={contact.email} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

