
import {Link} from 'react-router-dom';
import React, { useState } from "react";

export default function ClubDetails(props) {

    const [newClass, setNewClass] = useState(
          {
            ClassImage: "",
            ClassName: "",
            NumberOfParticipent: 0,
            InstructorName: "",
            ClassDescription: "",
            ClassLocation: "",
          }
        );

    const [classes, setClasses] = useState([]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setNewClass({
        ClassImage: "",
        ClassName: "",
        NumberOfParticipent: 0,
        InstructorName: "",
        ClassDescription: "",
        ClassLocation: "",
      });
      setIsPopupOpen(true);
    };

    const closePopup = () => setIsPopupOpen(false);
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewClass((prevClass) => ({ ...prevClass, [name]: value }));
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setNewClass((prevClass) => ({ ...prevClass, ClassImage: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    };
  
    const addClass = (e) => {
      e.preventDefault();
      setClasses([...classes, { ...newClass, id: Date.now() }]);
      closePopup();
    };
  
  return (
    <>
      <div className="back-button-cont">
        <div className="back-button">
            <button>
                <Link to="/ClubPage" className="back-button-link">
                <i className="fas fa-arrow-left"></i>
                <p>View Clubs</p>
                </Link>
            </button>
        </div>
      </div>

      <div className="club-name-cont">
        <div className="club-name">
          <p>{props.ClubName}</p>
        </div>
      </div>

      <div className="classes-Add-cont">
            <div className="classes">
              <p>Classes:</p>
            </div>
            <div className="Add-Class">
                  <button onClick={openPopup}>
                  <p>Add Class</p>  
                  </button>  
            </div>
      </div>

      <div className="classes-Add-cont">

              <div className="class-cards-cont">
                {classes.map((cls) => (
                  <div className="class-cardsd" key={cls.id}>
                    <div className="class-cards">
                      {cls.ClassImage ? (
                        <img src={cls.ClassImage} alt="Class" />
                      ) : (
                        <p className="placeholder-image">No Image</p>
                      )}
                    </div>
                            <div className="class-details-cont">
                                <div className="class-details">
                                      
                                      
                                      <div className="ClassDetails">
                                              <h2>Class Name: {cls.ClassName}</h2>
                                              <p>Participants: {cls.NumberOfParticipent}</p>
                                              <p>Instructor: {cls.InstructorName}</p>
                                              <p>Description: {cls.ClassDescription}</p>
                                              <p>Location: {cls.ClassLocation}</p>
                                      </div>
                                </div>
                       
                            </div>
                  </div>
                ))}
              </div>
      </div>

      {
        isPopupOpen && 
                        (
                          <div className="openPopup">
                          <div className="popup-content">
                            <h3>Add Class</h3>
                            <form onSubmit={addClass}>
                              <label>
                                Class Name:
                                <input
                                  type="text"
                                  name="ClassName"
                                  value={newClass.ClassName}
                                  onChange={handleInputChange}
                                  required
                                />
                              </label>
                              <label>
                                Participants:
                                <input
                                  type="number"
                                  name="NumberOfParticipent"
                                  value={newClass.NumberOfParticipent}
                                  onChange={handleInputChange}
                                />
                              </label>
                              <label>
                                Instructor:
                                <input
                                  type="text"
                                  name="InstructorName"
                                  value={newClass.InstructorName}
                                  onChange={handleInputChange}
                                  required
                                />
                              </label>
                              <label>
                                Description:
                                <textarea
                                  name="ClassDescription"
                                  value={newClass.ClassDescription}
                                  onChange={handleInputChange}
                                />
                              </label>
                              <label>
                                Location:
                                <input
                                  type="text"
                                  name="ClassLocation"
                                  value={newClass.ClassLocation}
                                  onChange={handleInputChange}
                                  required
                                />
                              </label>
                              <label>
                                Image:
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                />
                              </label>
                              <div className="popup-buttons">
                                <button type="submit">Add</button>
                                <button type="button" onClick={closePopup}>
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        )
      }
    </>
  );
}