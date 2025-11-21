import React from "react";
import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import LottieContainer from "../components/LottieContainer";
import animation from "../assets/animation.json";

export default function LoginPage() {
  const [showForgot, setShowForgot] = React.useState(false);
  const [emailReset, setEmailReset] = React.useState("");

  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row bg-gray-200">

      {/* Modal Esqueci minha senha */}
      {showForgot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-11/12 sm:w-96 flex flex-col gap-4">

            <h2 className="text-2xl font-bold text-center">Redefinir Senha</h2>
            <p className="text-gray-600 text-sm text-center">
              Digite seu email para enviarmos um link de redefinição.
            </p>

            <input
              type="email"
              value={emailReset}
              onChange={(e) => setEmailReset(e.target.value)}
              placeholder="Seu email"
              className="border border-gray-400 rounded-md p-3"
            />

            <button
              className="bg-sky-900 text-white p-3 rounded-md"
              onClick={() => {
                if (!emailReset) {
                  alert("Digite um email válido!");
                  return;
                }
                alert("Enviamos um link para redefinir sua senha!");
                setShowForgot(false);
                setEmailReset("");
              }}
            >
              Enviar link
            </button>

            <button
              className="text-gray-600 underline text-sm"
              onClick={() => setShowForgot(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Right side (Login) - aparece primeiro no mobile */}
      <div className="w-full md:w-1/2 h-auto md:h-full bg-gray-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-gray-300 p-8">

        <h1 className="text-3xl md:text-4xl mb-12 md:mb-24">Encontre Já!</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12">LOGIN</h2>

        <form className="w-full max-w-md flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Label.Root className="text-lg font-medium">EMAIL:</Label.Root>
            <input
              type="email"
              className="border border-gray-400 rounded-md p-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label.Root className="text-lg font-medium">SENHA:</Label.Root>
            <input
              type="password"
              className="border border-gray-400 rounded-md p-3"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowForgot(true)}
            className="text-sm text-sky-900 underline text-left"
          >
            Esqueci minha senha
          </button>

          <p className="text-center text-gray-700 mt-4">
            Não possui conta?{" "}
            <Link to="/registrar" className="text-sky-900 underline">
              Criar conta
            </Link>
          </p>

          <Link
            className="bg-sky-900 text-center text-white p-4 rounded-md text-lg mt-4"
            to="/minhas-coisas"
          >
            <button type="submit">Entrar</button>
          </Link>
        </form>
      </div>

      {/* Left side (Texto + animação) - vai pra baixo no mobile */}
      <div className="w-full md:w-1/2 h-auto md:h-full bg-white flex flex-col justify-between p-8 md:p-12">

        <div className="mt-4 md:mt-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Perdeu as suas coisas?</h1>
          <p className="text-xl md:text-3xl text-gray-600">A gente te ajuda a achar</p>
        </div>

        <div className="w-full flex items-center justify-center py-8">
          <LottieContainer animationData={animation} width={350} heigth={350} />
        </div>
      </div>
    </div>
  );
}
