import { useEffect, useState } from 'react';
import ParchmentHead from '../parchment-head/ParchmentHead';
import './Parchment.css'
import Layout from '../../pages/layout/main';
import Banner from '../../assets/banner.svg'

function Parchment() {
    const [parchmentOpened, setParchmentOpened] = useState(false);

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
                            <h1>Habia una vez en un cuento de hadas, una princesa llamada Leslie</h1>
                        </Layout>
                    </div>
            </div>
            <ParchmentHead classes='bottom' />
        </div>
    );
}

export default Parchment;