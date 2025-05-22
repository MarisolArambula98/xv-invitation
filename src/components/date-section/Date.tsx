import './Date.css';
import Castle from '../../assets/castle.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faClock } from '@fortawesome/free-solid-svg-icons';
import cutlery from '../../assets/cutlery (1).png'
import baile from '../../assets/baile.png'
import Beast from '../../assets/bella_beast.png';


const eventDetails = {
    date: "9:30 PM - 10:30 AM",
    time: "9:00 PM - 2:00 AM",
    title: "Un Cuento Tan Antiguo Como el Tiempo: La Quinceañera de Leslie",
    description: "Acompáñanos en una noche encantada celebrando los 15 años de Leslie. Esta celebración mágica incluirá una ceremonia especial, cena, baile y recuerdos que durarán toda la vida. Por favor, sé nuestro invitado para este evento real mientras transformamos nuestro lugar en el castillo de la Bestia por una noche mágica."
};

const Date: React.FC = () => {

    return (
        <div className="date__container">
            <img className='castle' src={Castle}/>
            <img src={Beast} alt="" className='beast-image' />
            <img className='roses-chain' src='https://64.media.tumblr.com/e158f02792590e77cb845b80e8a13587/f4ff9c269cb80ec1-98/s1280x1920/781e4d59fe5cd1744b441658cb32b93c34ebc40d.gif'/>
            <div className='date-details'>
                <div className='date-container'>
                    <div className="day-name">
                        <h2 className='magic-text'>S&aacute;bado</h2>
                    </div>
                    <div className='month'>
                        <h3 className='month-name'>Junio</h3>
                        <h2 className='day magic-text'>07</h2>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-header">
                        <h2 className='magic-text'>Celebraci&oacute;n</h2>
                    </div>  
                    <div className="event-details">
                        <div className="event-date-time">
                            <img src={cutlery} alt="banquete" width={'14%'}/>

                            <div className="detail-item">
                                {/* <span className="detail-icon">
                                    <FontAwesomeIcon icon={faClock} />
                                </span> */}
                                <span className="detail-text">{eventDetails.date}</span>
                            </div>
                            <img src={baile} alt="banquete" width={'14%'}/>

                            <div className="detail-item">
                                <span className="detail-text">{eventDetails.time}</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className='year'>
                <h1>2025</h1>
            </div>
        </div>
    );
};

export default Date;