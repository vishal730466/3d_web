'use client';
import React from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box,useGLTF ,useAnimations  } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';



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
    <RigidBody type="fixed" restitution={1}>
      <mesh position={[0, 0, 0]} emissive="blue" emissiveIntensity={5}>
        <boxGeometry args={[15, 1, 15]} />
        <meshStandardMaterial color="#65d9db" />
      </mesh>
    </RigidBody>
  );
}

const Mymetal = ()=>{
  const {scene} = useGLTF("models/ab.glb")

  return <RigidBody position={[-7,0,-3]}>
    <primitive object ={scene}/>
  </RigidBody>
}

const Github3 = ()=>{
  const {scene} = useGLTF("models/github3.glb")

  return <RigidBody position={[0,1,1]}>
    <primitive object ={scene}/>
  </RigidBody>
}

const Mongo = ()=>{
  const {scene} = useGLTF("models/mongo.glb")

  return <RigidBody position={[0,1,1]}>
    <primitive object ={scene}/>
  </RigidBody>
}
const Git = ()=>{
  const {scene} = useGLTF("models/git.glb")

  return <RigidBody position={[0,1,1]}>
    <primitive object ={scene}/>
  </RigidBody>
}

const Mylight = ()=>{
  const {scene} = useGLTF("models/su.glb")

  return <RigidBody  type="fixed" position={[1,1,1]}>
    <primitive object ={scene}/>
  </RigidBody>
}


const Model = () => {

  //Load the 3D model
  const { scene } = useGLTF('/models/git2.glb'); // ab.glb
  React.useEffect(() => {
    // Traverse the model and update materials
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color('white'); // #f272bb
        child.material.emissive = new THREE.Color(''); //#e61c8e
        child.material.emissiveIntensity = 0;
        child.material.metalness = .8; 
        child.material.roughness = .2;
      }
    });
  }, [scene]);

  return <RigidBody position={[-3,0,1]} color="#bc6fe3" emissive={"#bc6fe3"} emissiveIntensity={3}  onClick={console.log("ok")}>
    <primitive object={scene} />
    </RigidBody>
}

const About = () => {
  return (
    <div>page obj

    <div style={{ width: '100vw', height: '100vh' }}>
  
      <Canvas camera={{position:[13,15,0],fov:30}}>
      <OrbitControls maxPolarAngle={1.4}  minPolarAngle={1.2} enableZoom={true}/>

       <ambientLight intensity={0.5} /> 
      
       <directionalLight position={[1, 14, 1]} intensity={1} /> 

        
      <Physics>
        {/* <Mylight/> */}
        <Mymetal/>
        <Model/>
        <FallingBox  />
        <Mongo/>
        
        <Github3/>
        <Git/>
        <GroundPlane />
     
      </Physics>
        {/* <EffectComposer>
        <Bloom luminanceThreshold={2} luminanceSmoothing={2} intensity={2} />
      </EffectComposer> */}

      </Canvas>
    </div>

    </div>
  )
}

export default About