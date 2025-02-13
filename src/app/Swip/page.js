import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Draggable, ScrollTrigger);

const ThreeDObject = () => {
  const objectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(objectRef.current, 
      { x: 0 }, 
      { x: window.innerWidth - 1000, 
        scrollTrigger: {
          trigger: objectRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={objectRef} style={{ width: '100px', height: '300px', backgroundColor: 'red' }}>
      3D Object
    </div>
  );
};

export default ThreeDObject;
