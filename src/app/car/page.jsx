'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';

function ExampleComponent() {
  const meshRef = useRef();
  const cameraRef = useRef();
  const keys = useKeyboardControls((state) => state); // Get key states

  useFrame(({ camera }) => {
    if (!meshRef.current) return;

    // Move the box based on key input
    if (keys.forward) meshRef.current.position.z -= 0.1;
    if (keys.backward) meshRef.current.position.z += 0.1;
    if (keys.left) meshRef.current.position.x -= 0.1;
    if (keys.right) meshRef.current.position.x += 0.1;

    // Make the camera follow the box smoothly
    camera.position.x = meshRef.current.position.x;
    camera.position.z = meshRef.current.position.z + 5; // Keep camera slightly behind
    camera.lookAt(meshRef.current.position); // Focus camera on the box
  });

  return (
    <>
      {/* Movable Box */}
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Fixed Ground */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} /> {/* Ground Size */}
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['w', 'ArrowUp'] },
          { name: 'backward', keys: ['s', 'ArrowDown'] },
          { name: 'left', keys: ['a', 'ArrowLeft'] },
          { name: 'right', keys: ['d', 'ArrowRight'] },
        ]}
      >
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 3, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ExampleComponent />
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
