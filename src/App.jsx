import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import "./App.css";
import MilhoIcon from './components/icons/MilhoIcon';
import PaoIcon from './components/icons/PaoIcon';
import XicaraIcon from './components/icons/XicaraIcon';
import Imagem1 from './assets/images/personagem2.png';
import Imagem2 from './assets/images/personagem3.png';
import Imagem3 from './assets/images/personagem4.png';
import Imagem4 from './assets/images/personagem.png';


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
          <h1>Receitas</h1>
          <div className='botoes'>
          <button className='canjica'>
            <span className='texto'>Canjica</span>
            <MilhoIcon className='icone' width={25} height={25}/>
          </button>
          <button className='pao-acucar'>
            <span className='texto'>Pão de açucar</span>
            <PaoIcon className='icone' width={25} height={25}/>
          </button>
          <button className='chocolate-quente'>
            <span className='texto'>Chocolate quente</span>
            <XicaraIcon className='icone' width={25} height={25}/>
          </button>
          </div>
        </nav>
          <div className='criadores'>
            <div className='primeiraDiv'>
              <p className='nomeCriador'>Isabela A.</p>
              <p className='nomeCriador'> Isabela G.</p>
              <p className='nomeCriador'>Giovana</p>
              <p className='nomeCriador'>Mauro</p>
            </div>
            <div className='segundaDiv'>
              <img src={Imagem1} alt="personagem1" className='imagem-criador'/>
              <img src={Imagem2} alt="personagem1" className='imagem-criador'/>
              <img src={Imagem3} alt="personagem1" className='imagem-criador'/>
              <img src={Imagem4} alt="personagem1" className='imagem-criador'/>
            </div>
          </div>
      </div>
    </div>
  );
};
