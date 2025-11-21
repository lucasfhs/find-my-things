import React from "react";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import House3D from "../components/House3D";

export default function ItemLocationPage() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 min-h-screen">
      
      {/* Header */}
      <header className="w-full bg-blue-800 border-b py-6 text-center">
        <h1 className="text-3xl text-white font-semibold">
          Localização do Item
        </h1>
      </header>

      {/* Content */}
      <div className="w-full max-w-6xl flex mt-10 gap-8 px-6">

        {/* Left — 3D Map */}
        <div className="w-1/2 bg-white p-4 rounded-xl shadow">
          <House3D />
        </div>

        {/* Right — Item Info */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Nome do Item</h2>

          <div className="text-lg">
            <p><strong>Descrição:</strong> Uma descrição simples do item.</p>
            <p><strong>Última Localização:</strong> Cozinha, perto da mesa.</p>
            <p><strong>Data da Perda:</strong> 18/11/2025 às 15:43</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
              <Pencil size={20} />
              Editar
            </button>

            <button className="bg-red-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
              <Trash2 size={20} />
              Remover
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex justify-start items-center mt-10 px-6 pb-10">
        <button className="flex items-center gap-2 text-blue-900 text-lg">
          <ArrowLeft size={22} />
          Voltar
        </button>
      </footer>

    </div>
  );
}
