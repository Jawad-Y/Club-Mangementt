
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilter } from '@fortawesome/free-solid-svg-icons';
export default function Contacts()
{
    
    return(
        <>
            <div className="emptyspace"> <p></p></div>
            <div className="name-buttons-cont">
                    <div className="Contact">
                        <p>Contacts</p>
                    </div>

                <div className="Buttons-cont">
                                <div className="Search-bar">

                                </div>
                                <div className="filter">
                                
                                <FontAwesomeIcon icon={faFilter}/>
                                    
                                </div>
                                <div className="NewContact">
                                    <p>NewContact</p>
                                </div>
                                <div className="Options">

                                </div>
                </div>
            </div>
        </>
    );
}