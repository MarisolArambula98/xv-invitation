import React from 'react';
import './Location.css';
import Beast from '../../assets/beast.png';

const Location: React.FC = () => {

  function goTo() {
    window.open("http://maps.google.com/maps?daddr=31.677161957592393,-106.4292112372487&amp;ll=", '_blank');
  }

  return (
    <div className="location__container">
        <div className="map__container">
          <img className='beast-img' src={Beast} alt="Beast" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.423835901243!2d-106.43180762339007!3d31.676979374142697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e76770dd54b865%3A0x76ad9b2e3d4ae4fc!2sTerraza%20Caeli!5e0!3m2!1sen!2smx!4v1747889438890!5m2!1sen!2smx" width="600" height="600" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="location__text">
              <h2 className="magic-text">Ubicaci&oacute;n</h2>
              <h3>Terraza Caeli</h3>
              <h4>Sierra Coste&ntilde;a y calle Sierra Blanca #5404</h4>
              <button onClick={goTo} type='button'>C&oacute;mo llegar</button>
            </div>
            <div className="location__mask">
            </div>
        </div>
    </div>
  );
};

export default Location;
