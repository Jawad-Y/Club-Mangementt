import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ClubPage() {
  const [clubs, setClubs] = useState([]);

  const addNewClub = () => {
    const newClub = prompt("Enter the name of the new club:");
    if (newClub) {
      setClubs([...clubs, newClub]);
    }
  };

  return (
    <>
      <div className="club-add-cont">
        <div className="club-cont">
          <div className="club">
            <p>Clubs:</p>
          </div>
        </div>
        <div className="addclub-cont">
          <div className="addclub">
            <button onClick={addNewClub}>
              <p>New Club</p>
            </button>
          </div>
        </div>
      </div>

      <div className="clubs-cards-cont">
        {clubs.length > 0 ? (
          clubs.map((club, index) => (
            <div key={index} className="clubs-cards">
              <Link to={`/ClubDetails`} className="clubs-cards-link">
                <div className="club-cards">
                  <p>{club}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No clubs added yet.</p>
        )}
      </div>
    </>
  );
}
