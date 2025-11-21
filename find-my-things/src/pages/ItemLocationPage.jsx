import { useState, useMemo } from "react";
import * as THREE from "three";
import House3D from "../components/House3D";
import { Search, MapPin, User, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function ItemLocationPage() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const phonePosition = new THREE.Vector3(0, 1.6, 4);

  const items = [
    { id: 1, name: "Chave", x: 2, y: 0.2, z: -1, description: "Chave do carro", lastLocation: "Sala" },
    { id: 2, name: "Carteira", x: -1, y: 0.2, z: 3, description: "Carteira preta", lastLocation: "Cozinha" },
    { id: 3, name: "Óculos", x: 4, y: 0.2, z: 1, description: "Óculos de leitura", lastLocation: "Quarto" },
    { id: 4, name: "Fone Bluetooth", x: -3, y: 0.2, z: -2, description: "Fone azul", lastLocation: "Escritório" },
    { id: 5, name: "Relógio", x: 0, y: 0.2, z: -4, description: "Relógio prata", lastLocation: "Banheiro" },
  ];

  const filteredItems = useMemo(() => {
    return items
      .map((item) => {
        const distance = phonePosition.distanceTo(
          new THREE.Vector3(item.x, item.y, item.z)
        );
        return { ...item, distance };
      })
      .filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      {/* HEADER */}
      <header className="w-full bg-blue-800 text-center py-4 shadow-md border-b">
        <h1 className="text-2xl font-bold text-white">Localizar Itens</h1>
      </header>

      {/* SEARCH */}
      <div className="p-3 flex items-center gap-2 bg-white shadow">
        <Search size={20} className="text-gray-600" />
        <input
          type="text"
          placeholder="Buscar item..."
          value={search}
          onChange={(e) => {
            setSelectedItem(null);
            setSearch(e.target.value);
          }}
          className="flex-1 p-2 border rounded-md text-sm"
        />
      </div>

      {/* CONTAINER FLEX */}
      <div className="flex flex-1 relative overflow-hidden">

        {/* MAPA 3D */}
        <div className="flex-1">
          <House3D
            items={filteredItems}
            onSelectItem={(item) => {
              const match = filteredItems.find((i) => i.id === item.id);
              setSelectedItem(match);
            }}
          />
        </div>

        {/* --- SIDEBAR (DESKTOP) --- */}
        <div className="hidden md:block w-80 bg-white border-l p-4 shadow-inner overflow-auto">
          {!selectedItem ? (
            <p className="text-gray-500">Clique em um item no mapa…</p>
          ) : (
            <InfoPanel selectedItem={selectedItem} />
          )}
        </div>

        {/* --- MOBILE BOTTOM PANEL --- */}
        <div
          className={`md:hidden fixed bottom-16 left-0 right-0 bg-white shadow-xl transform transition-all duration-300 rounded-t-2xl border-t
            ${selectedItem ? "translate-y-0" : "translate-y-full"}`}
          style={{ maxHeight: "60%" }}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">{selectedItem?.name}</h2>
            <button onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>
          </div>

          <div className="p-4 overflow-auto">
            {selectedItem && <InfoPanel selectedItem={selectedItem} />}
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <footer className="w-full fixed bottom-0 bg-blue-800 border-t py-4 flex justify-around text-white">
        <Link to="/minhas-coisas">
          <div className="flex flex-col items-center justify-center gap-1">
            <ShoppingBag className="hover:text-gray-900 transition-all duration-150" size={32} />
            <p>Minhas Coisas</p>
          </div>
        </Link>

        <Link to="/localizacao">
          <div className="flex flex-col items-center justify-center gap-1">
            <MapPin className="hover:text-gray-900 transition-all duration-150" size={32} />
            <p>Encontrar meus Itens</p>
          </div>
        </Link>

        <Link to="/configuracao-ajuda">
          <div className="flex flex-col items-center justify-center gap-1">
            <User className="hover:text-gray-900 transition-all duration-150" size={32} />
            <p>Ajuda</p>
          </div>
        </Link>
      </footer>
    </div>
  );
}

function InfoPanel({ selectedItem }) {
  return (
    <div className="space-y-3 text-sm">
      <p>
        <strong>Descrição:</strong> {selectedItem.description}
      </p>

      <p>
        <strong>Última Localização:</strong> {selectedItem.lastLocation}
      </p>

      <p>
        <strong>Data da Perda:</strong>{" "}
        {new Date().toLocaleDateString()} às{" "}
        {new Date().toLocaleTimeString()}
      </p>

      <p>
        <strong>Distância do Celular:</strong>{" "}
        {selectedItem.distance.toFixed(2)} metros
      </p>
    </div>
  );
}
