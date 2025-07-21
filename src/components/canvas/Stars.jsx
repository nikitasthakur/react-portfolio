import {useState, useRef, Suspense} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm";
import WebGLErrorBoundary from '../WebGLErrorBoundary';

const Stars = (props) => {

  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <group rotation={[0, 0, Math.PI /  4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* CSS star field fallback to reduce WebGL context usage */}
      <div className="w-full h-full min-h-screen bg-primary">
        {/* Base background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary"></div>
        
        {/* Star pattern layers */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 160px 30px, #ddd, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
        
        {/* Additional star layer */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(1px 1px at 50px 50px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 120px 20px, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 180px 90px, rgba(255,255,255,0.5), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '250px 150px'
        }}></div>
      </div>
    </div>
  );
};

export default StarsCanvas