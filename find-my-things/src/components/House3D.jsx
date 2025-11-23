import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

export default function House3D({ items, onSelectItem }) {
  return (
    <Canvas camera={{ position: [-18, 15.5, -10], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Piso */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[35, 20]} />
        <meshStandardMaterial color="#e3e3e3" />
      </mesh>

      {/* === PAREDES EXTERNAS === */}
      {/* Lateral direita */}
      <mesh position={[0, 1.5, -10]}>
        <boxGeometry args={[35, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Lateral esquerda */}
      <mesh position={[0, 1.5, 10]}>
        <boxGeometry args={[35, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Fundo */}
      <mesh position={[-17.5, 1.5, 0]}>
        <boxGeometry args={[0.3, 3, 20]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Frente */}
      <mesh position={[17.5, 1.5, 3.74]}>
        <boxGeometry args={[0.3, 3, 12.75]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* === PAREDES INTERNAS === */}
      {/* Parede garagem esquerda */}
      <mesh position={[12.9, 1.5, -2.5]}>
        <boxGeometry args={[9.5, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede garagem frente */}
      <mesh position={[5.5, 1.5, -6.2]}>
        <boxGeometry args={[0.3, 3, 7.65]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede hall frente */}
      <mesh position={[5.5, 1.5, 5]}>
        <boxGeometry args={[0.3, 3, 10]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede banheiro esquerda */}
      <mesh position={[0.7, 1.5, 5]}>
        <boxGeometry args={[0.3, 3, 10]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede frente banheiro */}
      <mesh position={[4.4, 1.5, 0]}>
        <boxGeometry args={[2.5, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede direita quarto 1 */}
      <mesh position={[-9.7, 1.5, 0]}>
        <boxGeometry args={[15.5, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Divisória T banheiro/quarto 1 */}
      <mesh position={[0.7, 1.5, 0]}>
        <boxGeometry args={[1.2, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede closet */}
      <mesh position={[-12.5, 1.5, 3.8]}>
        <boxGeometry args={[0.3, 3, 7.8]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Divisória closet */}
      <mesh position={[-12.5, 1.5, 9.7]}>
        <boxGeometry args={[0.3, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede direita cozinha */}
      <mesh position={[-6, 1.5, -2.5]}>
        <boxGeometry args={[18, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Divisória cozinha */}
      <mesh position={[5.5, 1.5, -2.5]}>
        <boxGeometry args={[1, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Divisória quarto 2 */}
      <mesh position={[-17.2, 1.5, -2.5]}>
        <boxGeometry args={[0.5, 3, 0.3]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>

      {/* Parede closet */}
      <mesh position={[-7.5, 1.5, -6.1]}>
        <boxGeometry args={[0.3, 3, 7.5]} />
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
