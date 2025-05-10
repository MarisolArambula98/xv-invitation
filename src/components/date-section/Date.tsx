import './Date.css';
import Castle from '../../assets/castle.png';

const Date: React.FC = () => {

    return (
        <div className="date__container">
            <img className='castle' src={Castle}/>
            <div className='date-details'>
                <div className="day-name">
                    <h2 className='magic-text'>S&aacute;bado</h2>
                </div>
                <div>
                    <h3 className='month-name'>Junio</h3>
                    <h2 className='day magic-text'>07</h2>
                </div>
            </div>
            <div>
                <h1>2025</h1>
            </div>
        </div>
    );
};

export default Date;