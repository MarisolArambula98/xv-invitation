import React from 'react';
import './Location.css';
import Beast from '../../assets/beast.png';

const Location: React.FC = () => {
  return (
    <div className="location__container">
        <div className="map__container">
          <img className='beast-img' src={Beast} alt="Beast" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.120839516783!2d-106.46310592339067!3d31.657913574151245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75e14e6098307%3A0x882c8250784ac1b8!2sAgeo%20Meneses%202105%2C%2032674%20Ju%C3%A1rez%2C%20Chih.!5e0!3m2!1sen!2smx!4v1746306124656!5m2!1sen!2smx" width="600" height="600" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="location__text">
              <h2 className="magic-text">Ubicaci&oacute;n</h2>
              <h3>Terraza Caeli</h3>
              <h4>Sierra Coste&ntilde;a y calle Sierra Blanca #5404</h4>
            </div>
            <div className="location__mask">
            </div>
        </div>
    </div>
  );
};

export default Location;
