// src/components/House3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Util para criar paredes automaticamente
function Wall({ x, y, z, w, h, rot = 0 }) {
  return (
    <mesh position={[x, y, z]} rotation={[0, rot, 0]}>
      <boxGeometry args={[w, h, 0.15]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 6]} />
      <meshStandardMaterial color="#d4d4d4" />
    </mesh>
  );
}

function Marker() {
  return (
    <mesh position={[0, 0.2, 0]}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function HouseStructure() {
  const H = 2.6; // altura das paredes

  return (
    <>
      {/* PISO */}
      <Floor />

      {/* --- PAREDES EXTERNAS --- */}
      <Wall x={0} y={H / 2} z={-3} w={10} h={H} />            {/* parede fundo */}
      <Wall x={0} y={H / 2} z={3} w={10} h={H} />             {/* frente */}
      <Wall x={-5} y={H / 2} z={0} w={6} h={H} rot={Math.PI/2} /> {/* esquerda */}
      <Wall x={5} y={H / 2} z={0} w={6} h={H} rot={Math.PI/2} />  {/* direita */}

      {/* --- PAREDES INTERNAS --- */}

      {/* Divisão sala/cozinha (vertical esquerda) */}
      <Wall x={-1} y={H/2} z={0} w={6} h={H} rot={Math.PI/2} />

      {/* Divisão da cozinha/quarto (vertical direita) */}
      <Wall x={2} y={H/2} z={0} w={6} h={H} rot={Math.PI/2} />

      {/* Divisão banheiro/quarto (horizontal topo) */}
      <Wall x={3.5} y={H/2} z={-1} w={3} h={H} />

      {/* Portas abertas (simplesmente não renderizar paredes no trecho da porta) */}
    </>
  );
}

export default function House3D() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 10, 6]} intensity={1.2} />

        <HouseStructure />
        <Marker />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
