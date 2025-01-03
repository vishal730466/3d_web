'use client';
import React from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box,useGLTF ,useAnimations  } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

function FallingBox() {
  return (
    <RigidBody>
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
}

function GroundPlane() {
  return (
    <RigidBody type="fixed">
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
}

const Model = () => {

  //Load the 3D model
  const { scene } = useGLTF('/models/ab.glb'); // Path relative to the public folder

  return <primitive object={scene} />;
};

const About = () => {
  return (
    <div>page obj

    <div style={{ width: '100vw', height: '100vh' }}>
  
      <Canvas>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      
      <directionalLight position={[0, 5, 5]} intensity={1} />
      {/* <Model/> */}


      <Physics>
        <FallingBox />
        <GroundPlane />
      </Physics>

      
      </Canvas>
    </div>

    </div>
  )
}

export default About