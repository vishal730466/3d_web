'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { KeyboardControls, useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';

function Car() {
  const meshRef = useRef();
  const keys = useKeyboardControls((state) => state); // Get key states

  const speed = 0.3; // Movement speed
  const turnSpeed = 0.05; // Rotation speed

  useFrame(({ camera }) => {
    if (!meshRef.current) return;

    // Get current rotation angle (yaw)
    let rotationY = meshRef.current.rotation.y;

    // Rotate left/right
    if (keys.left) rotationY += turnSpeed;
    if (keys.right) rotationY -= turnSpeed;

    // Apply rotation to the box
    meshRef.current.rotation.y = rotationY;

    // Move forward/backward in the rotated direction
    if (keys.forward) {
      meshRef.current.position.x -= Math.sin(rotationY) * speed;
      meshRef.current.position.z -= Math.cos(rotationY) * speed;
    }
    if (keys.backward) {
      meshRef.current.position.x += Math.sin(rotationY) * speed;
      meshRef.current.position.z += Math.cos(rotationY) * speed;
    }

    // Make camera follow behind the car
    camera.position.x = meshRef.current.position.x - Math.sin(rotationY) * 5;
    camera.position.z = meshRef.current.position.z - Math.cos(rotationY) * 5;
    camera.position.y = 2; // Keep camera slightly above
    camera.lookAt(meshRef.current.position);
  });

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 2]} /> {/* Box like a car */}
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} /> {/* Large ground */}
      <meshStandardMaterial color="green" />
    </mesh>
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
          <Ground />
          <Car />
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default App;
