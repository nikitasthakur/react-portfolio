import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import PropTypes from 'prop-types';
import CanvasLoader from '../Loader';
import WebGLErrorBoundary from '../WebGLErrorBoundary';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronBufferGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal 
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        flatShading
        map={decal}

        />
      </mesh>
    </Float>
    )
  }

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
  
  const BallCanvas = ({ icon }) => {
    return(
      <WebGLErrorBoundary fallback={
        <div className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-full">
          <span className="text-2xl">⚛️</span>
        </div>
      }>
        <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ 
          preserveDrawingBuffer: true
        }}
        >
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
        </Suspense>
        
        <Preload all />
        </Canvas>
      </WebGLErrorBoundary>
      )
    }

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};
    
    export default BallCanvas