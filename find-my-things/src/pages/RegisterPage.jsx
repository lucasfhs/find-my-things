import React from "react";
import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="w-full h-screen flex bg-gray-200">
            {/* Left side */}
            <div className="w-1/2 h-full bg-blue-800 flex flex-col justify-center p-12">
                <h1 className="text-5xl text-white font-bold mb-4">Crie sua conta</h1>
                <p className="text-2xl text-gray-100">
                    Comece agora a localizar tudo o que é importante para você!
                </p>
            </div>

            {/* Right side */}
            <div className="w-1/2 h-full bg-gray-50 flex flex-col items-center justify-center border-l border-gray-300">
                <h1 className="text-4xl mb-10">Encontre Já!</h1>
                <h2 className="text-4xl font-semibold mb-10">Cadastro</h2>

                <form className="w-2/3 flex flex-col gap-8" onSubmit={(e) => {
                    e.preventDefault();
                    alert("Usuário cadastrado com sucesso!");
                }}>
                    <div className="flex flex-col gap-2">
                        <Label.Root className="text-lg font-medium">Nome Completo:</Label.Root>
                        <input
                            type="text"
                            className="border border-gray-400 rounded-md p-3"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label.Root className="text-lg font-medium">Email:</Label.Root>
                        <input
                            type="email"
                            className="border border-gray-400 rounded-md p-3"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label.Root className="text-lg font-medium">Senha:</Label.Root>
                        <input
                            type="password"
                            className="border border-gray-400 rounded-md p-3"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label.Root className="text-lg font-medium">Confirmar Senha:</Label.Root>
                        <input
                            type="password"
                            className="border border-gray-400 rounded-md p-3"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-sky-900 text-white p-4 rounded-md text-lg mt-4"
                    >
                        Criar conta
                    </button>

                    {/* Link para Login */}
                    <p className="text-center text-gray-700 mt-4">
                        Já possui conta?{" "}
                        <Link to="/" className="text-sky-900 underline">
                            Faça login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
