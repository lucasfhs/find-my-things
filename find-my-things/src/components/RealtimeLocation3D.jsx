import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";

/* Path da imagem que você enviou */
const groundImage = "/mnt/data/acbbd06c-e9ad-4f2b-bfb3-8286c48bc229.png";

function House() {
  return (
    <group position={[0, 0.5, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 2.5]} />
        <meshStandardMaterial color="#e6e6e6" />
      </mesh>

      <mesh position={[0, 1.25, 0]}>
        <coneGeometry args={[1.8, 1.2, 4]} />
        <meshStandardMaterial color="#b35b2b" />
      </mesh>

      <mesh position={[0, 0.05, 1.28]}>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial color="#6b3b1a" />
      </mesh>

      <mesh position={[0.9, 0.6, 1.28]}>
        <boxGeometry args={[0.5, 0.4, 0.05]} />
        <meshStandardMaterial color="#cfe9ff" />
      </mesh>
    </group>
  );
}

function Marker({ position }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + 0.15 + Math.sin(t * 3) * 0.05;
    ref.current.rotation.y += 0.02;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ff4d4f" emissive="#ff4d4f" />
      </mesh>
      <mesh position={[0, -0.25, 0]}>
        <coneGeometry args={[0.06, 0.18, 16]} />
        <meshStandardMaterial color="#ff4d4f" />
      </mesh>
    </group>
  );
}

function Scene({ markerPos }) {
  const texture = useTexture(groundImage);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 2]} intensity={0.9} />

      <House />
      <Marker position={markerPos} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[18, 12]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <OrbitControls target={[0, 0.6, 0]} makeDefault />
    </>
  );
}

export default function RealtimeLocation3D() {
  const [marker, setMarker] = useState([0, 0.8, 1.2]);

  // movimento simulado
  useEffect(() => {
    const id = setInterval(() => {
      setMarker((p) => {
        const nx = p[0] + (Math.random() - 0.5) * 0.5;
        const nz = p[2] + (Math.random() - 0.5) * 0.5;
        return [
          Math.max(-3, Math.min(3, nx)),
          0.8,
          Math.max(-3, Math.min(3, nz)),
        ];
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <Canvas camera={{ position: [5, 4, 6], fov: 50 }}>
      <Scene markerPos={marker} />
    </Canvas>
  );
}
