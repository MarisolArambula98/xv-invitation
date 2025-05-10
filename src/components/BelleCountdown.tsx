import { useState, useEffect } from 'react';
import './BelleCountdown.css';
import Beauty from '../assets/unnamed.png';

interface CountdownProps {
  targetDate: Date;
}

const BelleCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [animation, setAnimation] = useState(false);
  const [petalsCount] = useState(Array.from({ length: 5 }, (_, i) => i));
  const [sparklesCount] = useState(Array.from({ length: 20 }, (_, i) => i));

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimation(true);
    }, 300);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If the date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Function to render each digit with animation
  const renderDigit = (value: number, index: number) => {
    const digits = value < 10 ? `0${value}`.split('') : value.toString().split('');
    
    return digits.map((digit, i) => (
      <div 
        key={`${index}-${i}`} 
        className="countdown-digit"
        style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}
      >
        {digit}
      </div>
    ));
  };

  return (
    <div className={`belle-countdown-container ${animation ? 'animate' : ''}`}>
      {/* Enchanted Rose */}
      <div className="enchanted-rose-container">
        <div className="glass-dome"></div>
        <div className="rose-stem"></div>
        <div className="rose-flower">
          {petalsCount.map((i) => (
            <div key={i} className={`rose-petal petal-${i+1}`}></div>
          ))}
        </div>
        <div className="rose-base"></div>
        
        {/* Falling Petals */}
        {petalsCount.map((i) => (
          <div 
            key={i} 
            className="falling-petal"
            style={{
              left: `${20 + (i * 15)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* <div className='enchanted-rose-container'>
        <img src={Beauty} width={150}/>
      </div> */}
      
      <div className="belle-countdown-title">
        <h2 className="magic-text">La Bella Celebración</h2>
        <p>Cuenta regresiva para el gran día</p>
      </div>
      
      <div className="belle-countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value">
            {renderDigit(timeLeft.days, 0)}
          </div>
          <div className="countdown-label">Días</div>
          <div className="countdown-decoration"></div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">
            {renderDigit(timeLeft.hours, 1)}
          </div>
          <div className="countdown-label">Horas</div>
          <div className="countdown-decoration"></div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">
            {renderDigit(timeLeft.minutes, 2)}
          </div>
          <div className="countdown-label">Minutos</div>
          <div className="countdown-decoration"></div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">
            {renderDigit(timeLeft.seconds, 3)}
          </div>
          <div className="countdown-label">Segundos</div>
          <div className="countdown-decoration"></div>
        </div>
      </div>
      
      {/* Dancing Teacups and Candelabra */}
      <div className="dancing-objects">
        {/* <div className="teacup mrs-potts">
          <div className="teacup-body"></div>
          <div className="teacup-lid"></div>
          <div className="teacup-spout"></div>
          <div className="teacup-handle"></div>
          <div className="teacup-face"></div>
        </div>
         */}
        {/* <div className="teacup chip">
          <div className="teacup-body small"></div>
          <div className="teacup-face small"></div>
        </div>
         */}
        {/* <div className="candelabra lumiere">
          <div className="candelabra-base"></div>
          <div className="candelabra-arm left"></div>
          <div className="candelabra-arm right"></div>
          <div className="candelabra-face"></div>
          <div className="candle main">
            <div className="flame"></div>
          </div>
          <div className="candle left">
            <div className="flame"></div>
          </div>
          <div className="candle right">
            <div className="flame"></div>
          </div>
        </div> */}
      </div>
      
      {/* Sparkles */}
      <div className="belle-sparkles">
        {sparklesCount.map((i) => (
          <div 
            key={i} 
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="belle-quote">
        <p>"Tan viejo como el tiempo, tan verdadero como puede ser..."</p>
      </div>
      
      {/* Ballroom Floor Reflection */}
      <div className="ballroom-floor"></div>
    </div>
  );
};

export default BelleCountdown;
