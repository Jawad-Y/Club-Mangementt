import { Link } from "react-router-dom";
export default function Home() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const events = [
    "5:00 Pm Chess section",
    "7:00 Pm clarinet section",
    "3:00 Pm Football PLay",
    "No Events",
    "6:30 Pm Basketball",
    "No Events",
    "9:00 Pm trumpet section ",
  ];
  return (
    <>
      <div className="emptyspace">
        {" "}
        <p></p>
      </div>
      <div className="clubschedulee">
        <div className="scheduale">
          <p>Schedule</p>
        </div>
        <div className="buttons-cont">
          <div>
            <button className="buttons"><Link to="/Contacts" className="clubs-cards-link">Add Contact</Link></button>
            <button className="buttons"><Link to="/ClubPage" className="clubs-cards-link">View Clubs</Link></button>
            <button className="buttons"><Link className="clubs-cards-link">Add Event</Link></button>
          </div>
        </div>
      </div>

      <div className="container-home">
        <div className="sch-container">
          {weekdays.map((day, index) => (
            <div key={index} className="card">
              <div className="day">
                <p>{day}</p>
              </div>
              <div className="event">
                <ul>
                  <li className="event-det">{events[index]}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="right-cont">
          <div className="reminder-cont">
                <div className="reminder-cont-top">
                  <div className="reminder">
                    <p>Reminder</p>
                  </div>
                  <div className="add-3dots">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
                <div className="reminder-details"><ul><li><p>Contect with the product provider for the Music Club</p></li></ul></div>
          </div>
          <div className="ano-cont">
                <div className="ano-cont-top">
                  <div className="anno">
                    <p>Announcment</p>
                  </div>
                  <div className="add-3dots">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
                <div className="ano-details"><ul><li><p>The conference has been postponed.</p></li></ul></div>
          </div>

          
        </div>
      </div>
    </>
  );
}
