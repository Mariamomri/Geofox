import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Alien() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}models/tiny_planet_friends_3d-cute-2762.glb`,
  );
  return <primitive object={scene} scale={1} />;
}

function Alieno() {
  return (
    <div className="alieno">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />

        <Suspense fallback={null}>
          <Alien />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Alieno;
