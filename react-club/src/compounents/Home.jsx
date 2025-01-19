export default function Home()
{
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return(
        <>
            <div className="emptyspace"> <p></p></div>
            <div className="clubschedulee">
                <div className="scheduale"><p>Schedule</p></div>
                        <div className="buttons-cont">
                            <div>
                                    <button className="buttons">Add Contact</button>
                                    <button className="buttons">View Clubs</button>
                                    <button className="buttons">Add Event</button>
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
                    <div className="event"></div>
                  </div>
                ))}
              </div>
      
              <div className="right-cont">
                <div className="reminder-cont">
                  <div className="reminder">
                    <p>Reminder</p>
                  </div>
                  <div className="add-3dots">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
      
                <div className="anno-cont">
                  <div className="anno">
                    <p>Announcement</p>
                  </div>
                  <div className="add-3dots">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
              </div>
            </div>
          </>
    )
};
