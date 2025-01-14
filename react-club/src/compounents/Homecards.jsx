export default function Homecards() {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
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
  );
}
