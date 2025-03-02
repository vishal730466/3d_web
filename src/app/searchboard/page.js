"use client"
import { Canvas } from '@react-three/fiber'

import { OrbitControls,Box, useGLTF ,useTexture  } from '@react-three/drei';
import { Physics, RigidBody } from "@react-three/rapier";
import React, { useState } from 'react'
import { AmbientLight, DirectionalLight, Group } from 'three'

const Search = () => {
  const [val , setval]=useState(0)
  // const woodTexture = useTexture("wood2.jpg");  
  
  function GroundPlane() {
    return (
      <RigidBody type="fixed" restitution={0} friction={0} >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[15, 1, 15]} />

        {/* <meshStandardMaterial map={woodTexture} /> */}
          <meshStandardMaterial color="#4d4a4a" emissive="white" emissiveIntensity={0.1} />
        </mesh>
      </RigidBody>
    );
  }

    const Box = ()=>{
        const {scene} = useGLTF("models/searchbar/searchboard.glb")
        return <RigidBody position={[2.5,-1,6.2]} type='fixed'>
            <primitive object ={scene}/>
        </RigidBody>
      }

      const Enterbtn = ()=>{
        const {scene} = useGLTF("models/searchbar/table.glb")
        return <RigidBody position={[8,-1,7.5]} type='fixed'>
            <primitive object ={scene} onPointerDown={()=>{setval(val+1) }}/>
        </RigidBody>
      }

    const UP = ()=>{
      const {scene} = useGLTF("models/searchbar/up.glb")
      return <RigidBody position={[-2.4 ,0.9,4.2]} type='fixed'>
          <primitive object ={scene} onPointerDown={()=>{setval(val+1) }}/>
      </RigidBody>
    }

    
    const Down = ()=>{
      const {scene} = useGLTF("models/searchbar/down.glb")
      return <RigidBody position={[3 ,-1,8.3]} type='fixed'>
          <primitive object ={scene} onPointerDown={()=>{setval(val-1) }}/>
      </RigidBody>
    }

  return (
    <div>
        <Canvas style={{height:"90vh",width:"100vw"}} camera={{ position: [0, 6, 13], fov: 34 }}>
            <Physics>
    <OrbitControls/>
    
               <UP/>
               <Enterbtn/>
            <Down/>
            <Box/>
            <ambientLight intensity={2} color={"white"}/>
            <directionalLight position={[0,5,12]} intensity={.5}/>
            </Physics>
        </Canvas> 
        {val}
        </div>

  )
}

export default Search