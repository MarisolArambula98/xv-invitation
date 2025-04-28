import { useEffect, useState } from 'react';
import ParchmentHead from '../parchment-head/ParchmentHead';
import './Parchment.css'
import Layout from '../../pages/layout/main';
import Banner from '../../assets/banner.svg'
import BelleCountdown from '../BelleCountdown'


function Parchment() {
    const [parchmentOpened, setParchmentOpened] = useState(false);
    const celebrationDate = new Date('2025-07-07T21:00:00') // Change to your actual date

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
                            <img src={Banner} alt="banner" />
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                            <div className="belle-countdown-section">
                                <BelleCountdown targetDate={celebrationDate} />
                            </div>
                            
                            {/* You can add more Belle-themed content here */}
                            <div className="belle-invitation-message">
                            <p>Te invito a ser parte de mi historia de XV años</p>
                            <p>Donde cada momento será tan mágico como un cuento de hadas</p>
                            </div>
                        </Layout>
                    </div>
            </div>
            <ParchmentHead classes='bottom' />
        </div>
    );
}

export default Parchment;