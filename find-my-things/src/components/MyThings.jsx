import React from "react";
import { Pencil, Trash2, ArrowLeft, ArrowRight, ShoppingBag, MapPin, User } from "lucide-react";

export default function MyThings() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full bg-blue-800 border-b py-6 text-center">
        <h1 className="text-4xl text-white font-bold">Minhas Coisas</h1>
      </header>

      {/* Items List */}
      <div className="w-full max-w-4xl mt-10 px-4 flex flex-col gap-10">
        
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-full border rounded-xl p-6 flex items-center gap-6"
          >
            {/* Image Placeholder */}
            <div className="w-28 h-20 bg-gray-300 flex items-center justify-center rounded-md">
              <span className="text-gray-600">Imagem</span>
            </div>

            {/* Item Info */}
            <div className="flex-1 text-center">
              <p className="font-semibold">Item {i}:</p>
              <p>Descrição do Item: Um item de exemplo.</p>
              <p>Última Localização do Item: Cozinha.</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="p-2">
                <Pencil size={22} />
              </button>
              <button className="p-2">
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

        <button className="bg-blue-900 text-white py-3 px-6 rounded-md text-lg">
          Cadastrar um novo item
        </button>

        <div className="flex items-center gap-2">
          <span>Avançar</span>
          <ArrowRight size={20} />
        </div>
      </div>

      <p className="mt-4 text-gray-700 text-sm">1 de 20 itens encontrados.</p>

      {/* Bottom Navigation */}
      <footer className="w-full fixed bottom-0 bg-blue-800 border-t py-4 flex justify-around text-white">
        <ShoppingBag size={32} />
        <MapPin size={32} />
        <User size={32} />
      </footer>
    </div>
  );
}
