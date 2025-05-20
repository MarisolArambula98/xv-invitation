import { useState, useEffect } from 'react';
import './EventSchedule.css';
import banquete from '../assets/4716278.png'
import CastleImage from '../assets/castle.png'; // Import the castle image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface EventScheduleProps {
  eventDetails: {
    date: string;
    time: string;
    title: string;
    description: string;
  };
  location: {
    name: string;
    address: string;
    mapUrl: string;
  };
}

const EventSchedule: React.FC<EventScheduleProps> = ({ eventDetails, location }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const scheduleElement = document.querySelector('.event-schedule-container');
    if (scheduleElement) {
      observer.observe(scheduleElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`event-schedule-container ${isVisible ? 'visible' : ''}`}>
    <div className="castle-background" style={{ backgroundImage: `url(${CastleImage})` }}></div>
      <div className="event-divider">
            <span className="divider-icon">♛</span>
          </div>
      <div className="event-card">
        <div className="event-header">
          <h2 className='magic-text'>Celebraci&oacute;n</h2>
          <img src={banquete} alt="banquete" width={'14%'}/>
        </div>
        
        <div className="event-details">
          <div className="event-date-time">
            <div className="detail-item">
            <span className="detail-icon">
            <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
              <span className="detail-text">{eventDetails.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">
                <FontAwesomeIcon icon={faClock} />
                </span>
              <span className="detail-text">{eventDetails.time}</span>
            </div>
          </div>
          
          <div className="event-description">
            <h3>{eventDetails.title}</h3>
            <p>{eventDetails.description}</p>
          </div>
        </div>
      </div>
      
      <div className={`location-card ${isVisible ? 'fade-in' : ''}`}>
        <h3>Royal Venue</h3>
        <div className="location-name">{location.name}</div>
        <div className="location-address">{location.address}</div>
        <a 
          href={location.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="map-button"
        >
          View Map
        </a>
      </div>
    </div>
  );
};

export default EventSchedule;
