import React, { useEffect } from 'react';

const ParchmentBorder: React.FC = () => {
  useEffect(() => {
    // Add the corner elements to the DOM
    const corners = [
      { className: 'corner corner-top-left' },
      { className: 'corner corner-top-right' },
      { className: 'corner corner-bottom-left' },
      { className: 'corner corner-bottom-right' }
    ];
    
    const cornerElements = corners.map(corner => {
      const element = document.createElement('div');
      element.className = corner.className;
      return element;
    });
    
    cornerElements.forEach(element => {
      document.body.appendChild(element);
    });
    
    // Cleanup function to remove the elements when component unmounts
    return () => {
      cornerElements.forEach(element => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      });
    };
  }, []);
  
  return null; // This component doesn't render anything visible
};

export default ParchmentBorder;
