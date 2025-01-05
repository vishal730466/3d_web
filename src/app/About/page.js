'use client';
import React from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box,useGLTF ,useAnimations  } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function FallingBox() {
  return (
    <RigidBody>
      <mesh position={[1, 4, 1]} onClick={()=>{alert("clicked")}}>
        <boxGeometry args={[1, 1, 1]}  />
        <meshStandardMaterial color="#89d6ba" emissive={"#89d6ba"} emissiveIntensity={1}/>
      </mesh>
    </RigidBody>
  );
}

function GroundPlane() {
  return (
    <RigidBody type="fixed" restitution={1.3}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    </RigidBody>
  );
}

const Model = () => {

  //Load the 3D model
  const { scene } = useGLTF('/models/ab.glb'); // Path relative to the public folder

  return <RigidBody position={[-3,4,1]}  onClick={console.log("ok")}>
    <primitive object={scene} />;
    </RigidBody>
};

const About = () => {
  return (
    <div>page obj

    <div style={{ width: '100vw', height: '100vh' }}>
  
      <Canvas camera={{position:[13,5,0],fov:30}}>
      <OrbitControls maxPolarAngle={1.4}  minPolarAngle={1.2} />

       <ambientLight intensity={.5} /> 
      
       <directionalLight position={[0, 5, 5]} intensity={1} /> 

        
      <Physics>
        <Model/>
        <FallingBox  />
        <GroundPlane />

        <EffectComposer>
        <Bloom luminanceThreshold={.2} luminanceSmoothing={.9} height={300} />
      </EffectComposer>
      </Physics>

      
      </Canvas>
    </div>

    </div>
  )
}

export default About