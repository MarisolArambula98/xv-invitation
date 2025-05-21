import { useState, useEffect, useMemo } from 'react';
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
  const [petalsFloorCount] = useState(Array.from({ length: 50 }, (_, i) => i));
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

// Replace the existing floorPetals useMemo with this pyramid arrangement
const floorPetals = useMemo(() => {
  const pyramidPetals = [];
  const rows = 8; // Number of rows in the pyramid
  const baseWidth = 80; // Width of the base of the pyramid (percentage)
  const petalSize = 10; // Approximate size of each petal in pixels
  
  let petalCount = 0;
  
  // Create each row of the pyramid
  for (let row = 0; row < rows; row++) {
    // Calculate how many petals can fit in this row
    // More petals at the bottom, fewer at the top
    const rowWidth = baseWidth * (1 - row / rows);
    const petalsInRow = Math.max(1, Math.floor(rowWidth / petalSize));
    
    // Calculate the bottom position for this row
    const bottomPosition = row * 2; // Adjust this multiplier to control pyramid height
    
    // Place petals in this row
    for (let i = 0; i < petalsInRow; i++) {
      // Calculate horizontal position to center the petals
      const leftOffset = (100 - rowWidth) / 2;
      const leftPosition = leftOffset + (rowWidth / petalsInRow) * i;
      
      // Add some randomness to make it look natural
      const randomOffsetX = (Math.random() - 0.5) * 3;
      const randomOffsetY = (Math.random() - 0.5) * 1;
      
      pyramidPetals.push({
        key: `floor-petal-${petalCount}`,
        style: {
          left: `${leftPosition + randomOffsetX}%`,
          bottom: `${bottomPosition + randomOffsetY}%`,
          // Optional: vary the size slightly for more natural look
          transform: `scale(${0.8 + Math.random() * 0.4})`,
          // Optional: vary the opacity for depth
          opacity: 0.6 + Math.random() * 0.4
        }
      });
      
      petalCount++;
      
      // Stop if we've used all the petals in our count
      if (petalCount >= petalsFloorCount.length) {
        break;
      }
    }
    
    // Stop if we've used all the petals
    if (petalCount >= petalsFloorCount.length) {
      break;
    }
  }
  
  return pyramidPetals;
}, [petalsFloorCount]);


  return (
    <div className="container-countdown">
      
      <img src='https://64.media.tumblr.com/e158f02792590e77cb845b80e8a13587/f4ff9c269cb80ec1-98/s1280x1920/781e4d59fe5cd1744b441658cb32b93c34ebc40d.gif'/>

      
      <div className={`belle-countdown-container ${animation ? 'animate' : ''}`}>
        {/* <div className="splitter"></div> */}
        {/* Enchanted Rose */}
  
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
          {floorPetals.map((petal) => (
            <div 
              key={petal.key} 
              className="floor-petal"
              style={petal.style}
            ></div>
          ))}
        </div>
      </div>

    </div>
    
  );
};

export default BelleCountdown;
