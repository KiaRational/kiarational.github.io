import React, { useEffect, memo } from 'react';

// Declare the custom element type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
        'loading-anim-type'?: string;
      };
    }
  }
  interface Window {
    splineViewerLoaded?: boolean;
  }
}

export const SplineScene = memo(function SplineScene() {
  useEffect(() => {
    // Check if custom element is already defined
    if (customElements.get('spline-viewer')) {
      return;
    }

    // Check if we've already started loading the script
    if (window.splineViewerLoaded) {
      return;
    }

    // Check if the script is already in the DOM
    if (document.querySelector('script[src*=\"@splinetool/viewer\"]')) {
      return;
    }

    // Mark that we're loading the script
    window.splineViewerLoaded = true;

    // Load the Spline viewer script only once globally
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="absolute inset-0">
      <spline-viewer 
        loading-anim-type="spinner-big-light"
        url="https://prod.spline.design/dtXb1mfCOYtZS-N7/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
});