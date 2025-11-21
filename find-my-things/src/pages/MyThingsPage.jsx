import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  MapPin,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function MyThings() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Carteira",
      description: "Carteira preta de couro",
      location: "Sala",
    },
    {
      id: 2,
      name: "Chave",
      description: "Chave do carro",
      location: "Cozinha",
    },
    {
      id: 3,
      name: "Fone de ouvido",
      description: "Fone Bluetooth",
      location: "Quarto",
    },
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Open modal for NEW item
  function openNewModal() {
    setEditingId(null);
    setForm({ name: "", description: "", location: "" });
    setShowModal(true);
  }

  // Open modal for EDIT
  function openEditModal(item) {
    setEditingId(item.id);
    setForm({
      name: item.name,
      description: item.description,
      location: item.location,
    });
    setShowModal(true);
  }

  // Save (new or edit)
  function saveItem() {
    if (editingId === null) {
      const next = {
        id: items.length + 1,
        ...form,
      };
      setItems([...items, next]);
    } else {
      const updated = items.map((item) =>
        item.id === editingId ? { ...item, ...form } : item
      );
      setItems(updated);
    }

    setShowModal(false);
  }

  // Delete item
  function deleteItem(id) {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full bg-blue-800 border-b py-6 text-center">
        <h1 className="text-4xl text-white font-bold">Minhas Coisas</h1>
      </header>

      {/* Items List */}
      <div className="w-full max-w-4xl mt-10 px-4 flex flex-col gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full border rounded-xl p-6 flex items-center gap-6"
          >
            {/* Image Placeholder */}
            <div className="w-28 h-20 bg-gray-300 flex items-center justify-center rounded-md">
              <span className="text-gray-600">Imagem</span>
            </div>

            {/* Item Info */}
            <div className="flex-1 text-center">
              <p className="font-semibold">{item.name}</p>
              <p>Descrição do Item: {item.description}</p>
              <p>Última Localização do Item: {item.location}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="p-2" onClick={() => openEditModal(item)}>
                <Pencil size={22} />
              </button>

              <button className="p-2" onClick={() => deleteItem(item.id)}>
                <Trash2 size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination + Button */}
      <div className="w-full max-w-4xl mt-8 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </div>

        <button
          onClick={openNewModal}
          className="bg-blue-900 text-white py-3 px-6 rounded-md text-lg"
        >
          Cadastrar um novo item
        </button>

        <div className="flex items-center gap-2">
          <span>Avançar</span>
          <ArrowRight size={20} />
        </div>
      </div>

      <p className="mt-4 text-gray-700 text-sm">
        {items.length} itens encontrados.
      </p>

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

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-80 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-xl shadow-xl flex flex-col gap-4">

            <h2 className="text-2xl font-semibold text-center">
              {editingId === null ? "Cadastrar Item" : "Editar Item"}
            </h2>

            <input
              className="border p-2 rounded"
              placeholder="Nome do item"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="border p-2 rounded"
              placeholder="Descrição"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <input
              className="border p-2 rounded"
              placeholder="Última localização"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>

              <button
                className="bg-blue-700 text-white px-4 py-2 rounded"
                onClick={saveItem}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
