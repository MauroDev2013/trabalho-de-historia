import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF('./models/pan.glb');
    return <primitive object={scene} scale={10}/>;
};

export default Model;
