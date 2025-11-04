import React, { useEffect, useRef } from 'react';

// Declare the custom element type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'mouse-controls'?: string;
        'camera-controls'?: string;
      };
    }
  }
}

export function SplineScene() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load the Spline viewer script
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.93/build/spline-viewer.js';
      document.head.appendChild(script);
      scriptLoaded.current = true;

      return () => {
        // Cleanup on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <spline-viewer 
        url="https://prod.spline.design/RV5ZRg3iRj5JPzaR/scene.splinecode"
        className="w-full h-full"
        mouse-controls="true"
        camera-controls="true"
      />
    </div>
  );
}
