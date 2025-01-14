import {Link} from 'react-router-dom';

export default function ClubPage() {
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
                        <button>
                            <p>New Club</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="clubs-cards-cont">
                <div className="clubs-cards">
                   <button>
                        <Link to="/ClubDetails" className="clubs-cards-link"></Link>
                   </button>
                </div>
            </div>
        </>
    );
}
