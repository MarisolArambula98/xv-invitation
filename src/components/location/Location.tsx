import React from 'react';
import './Location.css';

const Location: React.FC = () => {
  return (
    <section id="location" className="location-container">
      <h2 className="location-title">Ubicación</h2>
      <div className="belle-logo-container">
        <div className="shield-decoration"></div>
        <div className="belle-logo-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.761237599185!2d-99.16869708509426!3d19.42200468688532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzE5LjIiTiA5OcKwMTAnMDcuMyJX!5e0!3m2!1ses-419!2smx!4v1623456789012!5m2!1ses-419!2smx" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
          ></iframe>
        </div>
      </div>
      <div className="location-details">
        <h3>Salón de Eventos</h3>
        <p>Av. Ejemplo #123, Colonia Centro</p>
        <p>Ciudad de México, CDMX</p>
        <p>Sábado 15 de Julio, 2023 - 7:00 PM</p>
      </div>
    </section>
  );
};

export default Location;
