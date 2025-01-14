import '../css/top.css'
import {Link} from 'react-router-dom';

export default function Top() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          {/* LOGO */}
          <div className="logo">
            <img src="../Resource/1.jpg" alt="logo" width="50" height="50" />
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
            <Link to="/">Home</Link>
            <Link to="/ClubPage">Clubs</Link>
            <Link to="#">Contacts</Link>
            <Link to="#">Inventory</Link>
            <Link to="#">Profile</Link>
          </div>

          {/* User Login */}
          <div className="name">
            <div>
              <p>Jawad</p>
            </div>
            <Link to="#">
              <img src="../Resource/user.svg" alt="User Icon" width="25" height="25" />
            </Link>
          </div>
        </nav>
      </div>
      
    </>
  );
}
