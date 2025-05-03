import { useEffect, useState } from 'react';
import ParchmentHead from '../parchment-head/ParchmentHead';
import './Parchment.css'
import Layout from '../../pages/layout/main';
import Banner from '../../assets/BannerInvitacion.png';
import BelleCountdown from '../BelleCountdown'
import AnimatedText from '../animated-text/AnimatedText';
import Gallery from '../gallery/Gallery';
import Location from '../location/Location';

function Parchment() {
    const [parchmentOpened, setParchmentOpened] = useState(false);
    const celebrationDate = new Date('2025-06-07T21:00:00') // Change to your actual date

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
                    <div className="parchment__main">
                        <Layout>
                            <img src={Banner} alt="banner" id='Banner' />
                            <h1>Como cuento de hadas, en un reino no muy lejano, vivia una princesa llamada</h1>
                            <AnimatedText />

                            <div className="belle-countdown-section">
                                <BelleCountdown targetDate={celebrationDate} />
                            </div>

                            <div className="gallery-sectio">
                                <Gallery/>
                            </div>

                            <div className="location__section">
                                <Location/>
                            </div>
   
                        </Layout>
                    </div>
            </div>
            <ParchmentHead classes='bottom' />
        </div>
    );
}

export default Parchment;