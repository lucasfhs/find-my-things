import React from "react";
import * as Label from "@radix-ui/react-label";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-200">

            {/* Right side (form) — aparece primeiro no mobile */}
            <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen bg-gray-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-gray-300 p-8">

                <div className="flex items-center mb-12 md:mb-24">
                    <img
                        src="/favicon/favicon-96x96.png"
                        alt="Logo Encontre Já"
                        className="w-10 h-10 md:w-16 md:h-16 object-contain"
                    />

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-sky-900">
                        ncontre Já
                    </h1>
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-10">Cadastro</h2>

                <form
                    className="w-full max-w-md flex flex-col gap-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Usuário cadastrado com sucesso!");
                    }}
                >
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

                    <p className="text-center text-gray-700 mt-4">
                        Já possui conta?{" "}
                        <Link to="/" className="text-sky-900 underline">
                            Faça login
                        </Link>
                    </p>
                </form>
            </div>

            {/* Left side — vai para baixo no mobile */}
            <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen bg-blue-800 flex flex-col justify-center p-8 md:p-12 text-center md:text-left">

                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
                    Crie sua conta
                </h1>

                <p className="text-xl md:text-2xl text-gray-100">
                    Comece agora a localizar tudo o que é importante para você!
                </p>

            </div>
        </div>
    );
}
