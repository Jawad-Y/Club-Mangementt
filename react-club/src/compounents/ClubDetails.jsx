import {Link} from 'react-router-dom';
import React, { useState } from "react";

export default function ClubDetails(props) {
  const [classes, setClasses] = useState([]);

  const addClass = () => {
    const newClass = {
      id: Date.now(),
      ClassImage: "", // Default empty image
      ClassName: "New Class",
      NumberOfParticipent: 0,
      InstructorName: "Instructor Name",
      ClassDescription: "Class Description",
      ClassLocation: "Class Location",
    };
    setClasses([...classes, newClass]);
  };

  const updateClass = (id, field, value) => {
    setClasses(
      classes.map((cls) =>
        cls.id === id ? { ...cls, [field]: value } : cls
      )
    );
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateClass(id, "ClassImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
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

      <div>
      <div className="classes-Add-cont">
        <div className="classes">
          <p>Classes:</p>
        </div>
        <div className="Add-Class">
          <button onClick={addClass}>
            <p>Add Class</p>
          </button>
        </div>
      </div>

      <div className="class-cards-cont">
        {classes.map((cls) => (
          <div className="class-cardsd" key={cls.id}>
            <div className="class-cards">
              {cls.ClassImage ? (
                <img src={cls.ClassImage} alt="Class" />
              ) : (
                <p className="placeholder-image">No Image</p>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(cls.id, e)}
              />
            </div>
            <div className="class-details-cont">
              <div className="class-details">
                <input
                  type="text"
                  value={cls.ClassName}
                  onChange={(e) =>
                    updateClass(cls.id, "ClassName", e.target.value)
                  }
                  placeholder="Enter Class Name"
                />
                <div className="ClassDetails">
                  <p>
                    Number of participants:
                    <input
                      type="number"
                      value={cls.NumberOfParticipent}
                      onChange={(e) =>
                        updateClass(cls.id, "NumberOfParticipent", e.target.value)
                      }
                    />
                  </p>
                  <p>
                    Instructor:
                    <input
                      type="text"
                      value={cls.InstructorName}
                      onChange={(e) =>
                        updateClass(cls.id, "InstructorName", e.target.value)
                      }
                    />
                  </p>
                  <p>
                    Description:
                    <textarea
                      value={cls.ClassDescription}
                      onChange={(e) =>
                        updateClass(cls.id, "ClassDescription", e.target.value)
                      }
                    />
                  </p>
                  <p>
                    Location:
                    <input
                      type="text"
                      value={cls.ClassLocation}
                      onChange={(e) =>
                        updateClass(cls.id, "ClassLocation", e.target.value)
                      }
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
    </>
  );
}




// import {Link} from 'react-router-dom';

// export default function ClubDetails(props) {
  
//   return (
//     <>
//       <div className="back-button-cont">
//         <div className="back-button">
//             <button>
//                 <Link to="/ClubPage" className="back-button-link">
//                 <i className="fas fa-arrow-left"></i>
//                 <p>View Clubs</p>
//                 </Link>
//             </button>
//         </div>
//       </div>

//       <div className="club-name-cont">
//         <div className="club-name">
//           <p>{props.ClubName}</p>
//         </div>
//       </div>

//       <div className="classes-Add-cont">
//             <div className="classes">
//               <p>Classes:</p>
//             </div>
//             <div className="Add-Class">
//                   <button>
//                   <p>Add Class</p>  
//                   </button>  
//             </div>
//       </div>

//       <div className="class-cards-cont">
        
//         <div className="class-cardsd">
//           <div className="class-cards">
//                 <img src={props.ClassImage} alt="img"/>
//           </div>
//           <div className="class-details-cont">
//             <div className="class-details">
//                   <p>{props.ClassName}</p>
                  
//                   <div className="ClassDetails">
//                           <p>Number of participent:{props.NumberOfParticipent}</p>
//                           <p>Instructor: {props.InstructorName}</p>
//                           <p>Description: {props.ClassDescription}</p>
//                           <p>Location: {props.ClassLocation}</p>
//                   </div>
//             </div>
//           </div>
//         </div>
        
//       </div>
      
//     </>
//   );
// }
