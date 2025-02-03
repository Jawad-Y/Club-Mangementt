
import {Link} from 'react-router-dom';
import userIcon from "../Resource/user.svg";
import logoIcon from "../Resource/logo.png";

export default function Top() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          {/* LOGO */}
          <div className="logo">
            <img src={logoIcon} alt="logo" width="70" height="50" />
          </div>

          {/* Search Bar */}
          <div className="searchbar">
            <div className="inputcontainer">
              <button>
                <i className="fas fa-search"></i>
              </button>
              <input type="text" placeholder="Search" />
            </div>
          </div>

          {/* NAVIGATION BAR */}
          <div className="navlinks">
            <Link to="/Home">Home</Link>
            <Link to="/ClubPage">Clubs</Link>
            <Link to="/Contacts">Contacts</Link>
            <Link to="#">Inventory</Link>
            <Link to="#">Profile</Link>
          </div>

          {/* User Login */}
          <div className="name">
            <div>
              <p>Jawad</p>
            </div>
            <Link to="#">
              <img src={userIcon} alt="User Icon" width="25" height="25" />
            </Link>
          </div>
        </nav>
      </div>
      
    </>
  );
}
