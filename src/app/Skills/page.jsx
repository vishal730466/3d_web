"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box,useGLTF ,useAnimations, FirstPersonControls  } from '@react-three/drei';
import { Physics, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Skill = () => {
    
  function GroundPlane() {
    return (
      <RigidBody type="fixed" restitution={1} friction={0.2} >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[15, 1, 15]} />
          <meshStandardMaterial color="#65d9db" emissive="blue" emissiveIntensity={0.5} />
        </mesh>
      </RigidBody>
    );
  }
  const Vscode = ()=>{
    const {scene} = useGLTF("models/Skill/vscode.glb")
    //  position  
    return <RigidBody position={[5,5,6]}>    
      <primitive object ={scene}/>
    </RigidBody>
  }
  const Box = ()=>{
    const {scene} = useGLTF("models/github3.glb")
    return <RigidBody >
        <mesh position={[5,2,3]}>
            <boxGeometry args={[2,1,2]}/>
        </mesh>
    </RigidBody>
  }
  const Box3 = ()=>{
    // const {scene} = useGLTF("models/github.glb")
    return<RigidBody restitution={0.5} friction={.1}>
    <mesh position={[1, 5, 4]}>
        <sphereGeometry args={[1, 32, 32]} />  
        <meshStandardMaterial color="blue" />
    </mesh>
    </RigidBody>
  }
  const Git = ()=>{
    const {scene} = useGLTF("models/car/l298n_detail.glb")
    //  position  
    return <RigidBody position={[-2,2,5]} type="fixed" restitution={0}>    
      <primitive object ={scene}/>
      
    </RigidBody>
  }
  const Box2 = ()=>{
   const {scene} = useGLTF("models/github3.glb")
     return <RigidBody >
        <mesh position={[1,2,-2]}>
            <boxGeometry args={[2,1,2]}/>
        </mesh>
    </RigidBody>
  }
  const Mongo = ()=>{
    const {scene} = useGLTF("models/Skill/mongo.glb")
    //  position  
    return <RigidBody position={[1,5,.5]}>    
      <primitive object ={scene}/>
    </RigidBody>
  }

  return (
    <div className="skill" style={{height:"100vh",width:"100vw"}}>
      <Canvas camera={{ position: [0, 5, 14], fov: 50 }}>  
        <OrbitControls />

        <Physics>
          <Vscode/>
          <GroundPlane />
          <Box/>
          <Mongo/>
          <Box2/>
          <Git/>
          {/* <Box3/> */}
        </Physics>
        {/* <FirstPersonControls   /> */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <ambientLight intensity={0.5} />


        
      </Canvas>
    </div>
  );
};

export default Skill;
