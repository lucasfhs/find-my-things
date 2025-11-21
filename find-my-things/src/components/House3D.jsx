import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

export default function House3D({ items, onSelectItem }) {
  return (
    <Canvas camera={{ position: [5, 6, 10], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Piso */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#e3e3e3" />
      </mesh>

      {/* Paredes */}
      <mesh position={[0, 1.5, -10]}>
        <boxGeometry args={[20, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

       <mesh position={[1.3, 1.5, 5]}>
        <boxGeometry args={[17, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      <mesh position={[0, 1.5, 10]}>
        <boxGeometry args={[20, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      <mesh position={[10, 1.5, 0]}>
        <boxGeometry args={[0.3, 3, 20]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      <mesh position={[-10, 1.5, 0]}>
        <boxGeometry args={[0.3, 3, 20]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Itens 3D */}
      {items.map((item) => (
        <group
          key={item.id}
          position={[item.x, item.y, item.z]}
          onClick={() => onSelectItem(item)}
        >
          <mesh>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="orange" />
          </mesh>

          {/* Label */}
          <Html position={[0, 0.6, 0]} center>
            <div
              style={{
                background: "white",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                border: "1px solid #ccc",
              }}
            >
              {item.name}
            </div>
          </Html>
        </group>
      ))}

      <OrbitControls />
    </Canvas>
  );
}
