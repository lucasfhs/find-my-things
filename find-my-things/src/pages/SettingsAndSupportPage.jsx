import React, { useState } from "react";
import { ShoppingBag, MapPin, User, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function ConfiguracoesAjuda() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const [userData, setUserData] = useState({
    nome: "Lucas Henrique",
    email: "usuario@email.com",
    telefone: "(00) 00000-0000",
  });

  // Controle dos FAQs abertos
  const [openFaq, setOpenFaq] = useState(null);

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const faqList = [
    {
      title: "Como cadastrar os meus itens?",
      text: "Para cadastrar um item, vá até a aba 'Minhas Coisas' e toque no botão 'Cadastrar novo item'. Preencha os campos e salve.",
    },
    {
      title: "Como localizar os meus itens?",
      text: "Acesse o mapa em tempo real, procure o nome do item e visualize a localização aproximada dentro da planta da sua casa.",
    },
    {
      title: "Como posso aprender mais sobre o encontre já?",
      text: "Você pode acessar nossa documentação ou entrar em contato com o suporte humano para mais detalhes.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">

      {/* Header */}
      <header className="w-full bg-blue-800 text-white border-b py-6 text-center">
        <h1 className="text-3xl font-bold">Configurações e Ajuda</h1>
      </header>

      {/* Conteúdo */}
      <div className="w-full max-w-xl px-4 mt-8 flex flex-col items-center gap-8">

        {/* Botão Editar Dados */}
        <button
          onClick={() => setShowEditModal(true)}
          className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3 rounded-md text-lg"
        >
          Editar dados cadastrais
        </button>

        {/* Título FAQ */}
        <div className="w-full text-left text-gray-700 text-lg">
          <strong>Dúvidas Frequentes:</strong>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-4">
          {faqList.map((faq, i) => (
            <div
              key={i}
              className="w-full bg-white hover:bg-gray-50 border rounded-md p-4 flex flex-col gap-2"
            >
              <button
                className="w-full text-left text-gray-900 font-medium"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.title}
              </button>

              {/* Texto que aparece quando o item é clicado */}
              {openFaq === i && (
                <p className="text-gray-600 text-sm mt-2">
                  {faq.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Botão Ajuda */}
        <button
          onClick={() => setShowSupportModal(true)}
          className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3 rounded-md text-lg mt-4"
        >
          Preciso de suporte humano
        </button>
      </div>


      {/* Bottom Navigation */}
      <footer className="w-full fixed bottom-0 bg-blue-800 border-t py-4 flex justify-around text-white">
        <Link to="/minhas-coisas">
          <ShoppingBag className="hover:text-black" size={32} />
        </Link>
        <Link to="/localizacao">
          <MapPin  className="hover:text-black" size={32} />
        </Link>
        <Link to="/configuracao-ajuda">
          <User className="hover:text-black" size={32} />
        </Link>
      </footer>

      {/* ================================== */}
      {/* MODAL — Editar Dados Cadastrais */}
      {/* ================================== */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-4 z-20">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">

            <button
              className="absolute right-4 top-4"
              onClick={() => setShowEditModal(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Editar Dados</h2>

            <div className="flex flex-col gap-4">
              <input
                name="nome"
                value={userData.nome}
                onChange={handleInputChange}
                placeholder="Nome"
                className="border rounded-md p-2"
              />

              <input
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
                className="border rounded-md p-2"
              />

              <input
                name="telefone"
                value={userData.telefone}
                onChange={handleInputChange}
                placeholder="Telefone"
                className="border rounded-md p-2"
              />

              <button
                onClick={() => setShowEditModal(false)}
                className="bg-blue-700 text-white py-3 rounded-md"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================== */}
      {/* MODAL — Suporte Humano */}
      {/* ================================== */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-4 z-20">
          <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg relative text-center">

            <button
              className="absolute right-4 top-4"
              onClick={() => setShowSupportModal(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-3">Suporte</h2>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Geovana</strong> está entrando em contato...
            </p>

            <p className="text-gray-500 text-sm mb-4">
              Aguarde um instante, estamos conectando você ao suporte humano.
            </p>

            <button
              onClick={() => setShowSupportModal(false)}
              className="bg-blue-700 text-white py-2 px-6 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
