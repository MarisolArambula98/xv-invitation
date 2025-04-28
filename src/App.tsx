import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import headImg from './assets/cabeza_pergamino2.png'
import Layout from './pages/layout/main'
import Parchment from './components/parchment/Parchment'

function App() {
  const [count, setCount] = useState(0)
  const [contentVisible, setContentVisible] = useState(false)

  // useEffect(() => {
  //   const calculateScale = () => {
  //     const referenceWidth = 1225; 
  //     const currentWidth = window.innerWidth < 645 ? 645 : window.innerWidth;
  //     const ratio = currentWidth / referenceWidth;
  //     const ratio2 = referenceWidth / currentWidth;
  //     const baseScale = 2.35;
  //     const baseYTop = 200;
  //     const baseScaley = 4;
  //     const newScale = baseScale * ratio;
  //     const newYTop = (baseYTop * ratio2) * (-0.8) - (window.innerWidth > 769  ? 50 : window.innerWidth < 460 ? 100 : 0) ;
  //     const newYBottom = (baseYTop * ratio2) * (0.8) ;
  //     const newScaleY = baseScaley * ratio2 + (window.innerWidth < 460  ? 3 : 0);
      
  //     // Instead of setting a CSS variable, apply the animation directly
  //     const parchmentContainer = document.querySelector('.parchmentContainer');

  //     if (parchmentContainer) {
  //       // Remove any existing animation
  //       parchmentContainer.classList.remove('animated');
        
  //       // Create a style element with the custom animation
  //       const styleEl = document.createElement('style');
  //       styleEl.textContent = `
  //         @keyframes customParchmentAppear {
  //           0% {
  //             opacity: 0;
  //             transform: scale(0.8);
  //           }
  //           50% {
  //             opacity: 1;
  //             transform: scale(1);
  //           }
  //           75% {
  //             opacity: 1;
  //           }
  //           100% {
  //             transform: scale(${newScale});
  //             display: none;
  //           }
  //         }
          
  //         .parchmentContainer.animated {
  //           animation: customParchmentAppear 3s ease-out forwards;
  //         }
  //       `;
  //       document.head.appendChild(styleEl);
        
        
  //       // Apply the animation
  //       parchmentContainer.classList.add('animated');
  //     }
  //     const topHeadParchmentTop = document.querySelector('.topHeadParchment');

  //     if (topHeadParchmentTop) {
  //       // Remove any existing animation
  //       topHeadParchmentTop.classList.remove('animated');
        
  //       // Create a style element with the custom animation
  //       const styleEl = document.createElement('style');
  //       styleEl.textContent = `
  //         @keyframes customTopHeadParchmentAppear {
  //           0% {
  //             transform: translateY(0) ;
  //           }
  //           40% {
  //             transform: translateY(0) ;
  //           }
  //           100% {
  //             transform: translateY(${newYTop}px) ;
  //           }
  //         }

          
  //         .topHeadParchment.animated {
  //           animation: customTopHeadParchmentAppear 2s ease-in-out forwards;
  //         }
  //       `;
  //       document.head.appendChild(styleEl);
        
        
  //       // Apply the animation
  //       topHeadParchmentTop.classList.add('animated');
  //     }

  //     const bottomHeadParchment = document.querySelector('.topHeadParchment.bottom');

  //     if (bottomHeadParchment) {
  //       // Remove any existing animation
  //       bottomHeadParchment.classList.remove('animated');
        
  //       // Create a style element with the custom animation
  //       const styleEl = document.createElement('style');
  //       styleEl.textContent = `
  //         @keyframes customBottomHeadParchmentAppear {
  //           0% {
  //             transform: translateY(0) ;
  //           }
  //           40% {
  //             transform: translateY(0) ;
  //           }
  //           100% {
  //             transform: translateY(${newYBottom}px) ;
  //           }
  //         }

          
  //         .topHeadParchment.bottom.animated {
  //           animation: customBottomHeadParchmentAppear 2s ease-in-out forwards;
  //         }
  //       `;
  //       document.head.appendChild(styleEl);
        
        
  //       // Apply the animation
  //       bottomHeadParchment.classList.add('animated');
  //     }

  //     const parchmentBodyContent = document.querySelector('.parchmentBodyContent');

  //     if (parchmentBodyContent) {
  //       // Remove any existing animation
  //       parchmentBodyContent.classList.remove('animated');
        
  //       // Create a style element with the custom animation
  //       const styleEl = document.createElement('style');
  //       styleEl.textContent = `
  //         @keyframes bodyCustomAnimation {
  //           0% {
  //             transform:  scaleY(1); ;
  //           }
  //           45% {
  //             transform:  scaleY(1); ;
  //           }
  //           100% {
  //             transform: scaleY(${newScaleY});
  //           }
  //         }

          
  //         .parchmentBodyContent.animated {
  //           animation: bodyCustomAnimation 2s ease-in-out forwards;
  //         }
  //       `;
  //       document.head.appendChild(styleEl);
        
        
  //       // Apply the animation
  //       parchmentBodyContent.classList.add('animated');
  //     }

  //     console.log("Applied custom animation with scale:", newYTop + 'px');
  //   };
    
  //   calculateScale();
  //   window.addEventListener('resize', calculateScale);
    

  //   window.scrollTo(0, 0);
  //   // After parchment zoom completes, show the main content
  //   const timer = setTimeout(() => {
  //     setContentVisible(true)
  //   }, 3000); // Match this with the animation duration
    
  //   return () => {
  //     clearTimeout(timer)
  //     window.removeEventListener('resize', calculateScale);
  //     document.querySelectorAll('style').forEach(el => {
  //       if(!el) return;

  //       if (el?.textContent?.includes('customParchmentAppear')) {
  //         el.remove();
  //       }
  //     });

  //   } ;
  // }, []);

  return (
    <>
    <div className="parchment__container">
      <Parchment/>
    </div>


      {/* <div className="animationContainer">
        <div></div>
        <div className="parchmentContainer">
          <div className="topHeadParchment">
            <div className="parchmentHead">
              <img src={headImg} alt="cabeza pergamino" />
            </div>
            <div className="parchmentBody">
              <div className="parchmentContent"></div>
            </div>
            <div className="parchmentHead headReverse">
              <img src={headImg} alt="cabeza pergamino" />
            </div>
          </div>
          
          <div className="topHeadParchment bottom">
            <div className="parchmentHead">
              <img src={headImg} alt="cabeza pergamino" />
            </div>
            <div className="parchmentBody">
              <div className="parchmentContent"></div>
            </div>
            <div className="parchmentHead headReverse">
              <img src={headImg} alt="cabeza pergamino" />
            </div>
          </div>
          <div className="parchmentBodyContent"></div>
        </div>
        <div></div>
      </div> */}

      {/* <div className={`mainContent ${contentVisible ? 'visible' : 'hidden'}`}>
      <Layout >
        <div className='mainContainer'>
          <h1>Como cuento de hadas,<br/> en un reino no muy lejano,<br/> viv&iacute;a una princesa llamada  LA</h1>
          <div >
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className='animationTest'>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </div>
      </Layout>
      </div> */}
      
    </>
  )
}

export default App
