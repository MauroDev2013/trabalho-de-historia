import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import "./App.css";


function PanModel({ position = [0, 1.5, 0], scale = 10, modelRef }) {
  const { scene } = useGLTF('/models/pan.glb');
  return (
    <group position={position} scale={scale} ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

function RotatingPanModel() {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <PanModel modelRef={modelRef}/>
}


export default function App() {
  return (
    <div className='container'>
      <div className='esquerdo'>
        <h1 className='titulo'>Livro de receitas</h1>
        <Canvas
          camera={{ position: [6, 9, 7], fov: 45 }}
          className='imagem'
        >
            <ambientLight intensity={1} />
            <directionalLight position={[5, -5, 5]} intensity={1} />
            <RotatingPanModel />

            <OrbitControls />
        </Canvas>
      </div>
      <div className='direito'>
        <nav className='menu'>
          <button className='canjica'>Canjica</button>
          <button className='pao-acucar'>Pão açucar</button>
          <button className='chocolate-quente'>Chocolate quente</button>
        </nav>
      </div>
    </div>
  );
};
