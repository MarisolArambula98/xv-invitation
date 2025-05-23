import { useEffect, useState } from 'react';
import ParchmentHead from '../parchment-head/ParchmentHead';
import './Parchment.css'
import Layout from '../../pages/layout/main';
import Banner from '../../assets/BannerInvitacion.png';
import Dress from '../../assets/bella-dress.png';
import BelleCountdown from '../BelleCountdown'
import AnimatedText from '../animated-text/AnimatedText';
import Location from '../location/Location';
import DateSection from '../date-section/Date'
import EventSchedule from '../EventSchedule';
import ParallaxSection from '../parallax/ParallaxSection';


function Parchment() {
    const [parchmentOpened, setParchmentOpened] = useState(false);
    const celebrationDate = new Date('2025-06-07T21:00:00') // Change to your actual date

    // Single event details
    const eventDetails = {
        date: "9:30 PM - 10:30 AM",
        time: "9:00 PM - 2:00 AM",
        title: "Un Cuento Tan Antiguo Como el Tiempo: La Quinceañera de Leslie",
        description: "Acompáñanos en una noche encantada celebrando los 15 años de Leslie. Esta celebración mágica incluirá una ceremonia especial, cena, baile y recuerdos que durarán toda la vida. Por favor, sé nuestro invitado para este evento real mientras transformamos nuestro lugar en el castillo de la Bestia por una noche mágica."
    };

    // Location information
    const locationInfo = {
        name: "The Enchanted Castle",
        address: "123 Fairytale Lane, Magic Kingdom, FL 12345",
        mapUrl: "https://maps.google.com"
    };

    useEffect(() => {
        // Hiding parchment after 2 seconds (same time as animation duration)
        setTimeout(() => {
            setParchmentOpened(true);
        }, 2900);
    },[])


    return(
        <div className={`parchment ${parchmentOpened ? 'opened' : ''}`}>
            <ParchmentHead classes="top"/>
            <div className="parchment__content">
                <svg 
                style={{position: 'absolute'}}
                >
                    <filter id="wavy2">
                        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                        <feDisplacementMap in="SourceGraphic" scale="15" />
                    </filter>
                </svg>
                    <div className="parchment__main">
                        <Layout>
                        <div className="invitation-header">
                            <div className="banner-container">
                                <img src={Banner} alt="banner" id='Banner' className="ornate-banner" />
                            </div>
                            <div className="welcome-text alex-brush-regular ">
                                Como cuento de hadas en un reino no muy lejano, viv&iacute;a una princesa llamada
                            </div>
                            <div className="animated-name-container">
                                <AnimatedText />
                            </div>
                        </div>

                            <div className="date-section">
                                <DateSection />
                            </div>

                            <div className="dress-code-section">
                            <div className="dress-code-container">
                                <div className="dress-code-title alex-brush-regular">Código de Vestimenta</div>
                                <div className="dress-code-divider">
                                <span className="divider-rose">🌹</span>
                                </div>
                                <div className="dress-code-message">
                                {/* <p>Para mantener la magia de nuestra celebración,</p> */}
                                <p className="dress-code-highlight"><span className="no-yellow">NO</span> vestir con <span className="yellow-text">AMARILLO</span></p>
                                <p>Este color está reservado para nuestra quinceañera.</p>
                                <div className="dress-code-icon">
                                    <div className="floating-dress-container">
                                    <img src={Dress} alt='Vestido de bella' className="prohibition-img" width={'40%'}/>
                                    <div className="prohibition-symbol"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>


                            <div className="belle-countdown-section"></div>


                            <div className="belle-countdown-section">
                                <BelleCountdown targetDate={celebrationDate} />
                            </div>

                            {/*<div className="gallery-section">
                                <Gallery/>
                            </div>*/}

                            <div className="location__section">
                                <Location/>
                            </div>
   
                            {/* Event Schedule Section */}
                            <section className="event-schedule-section">
                                <EventSchedule 
                                    eventDetails={eventDetails} 
                                    location={locationInfo} 
                                />
                            </section>
                            
                            {/* Beauty and the Beast Parallax Section */}
                            <section className="beauty-beast-parallax-section">
                                <ParallaxSection />
                            </section>
                        </Layout>
                    </div>
            </div>
            <ParchmentHead classes='bottom' />
        </div>
    );
}

export default Parchment;
