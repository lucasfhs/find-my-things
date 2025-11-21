import React from "react";
import * as Label from "@radix-ui/react-label";

import LottieContainer from "./components/LottieContainer";
import animation from "./assets/animation.json";
// Removed invalid Radix button import

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex bg-gray-200">
      {/* Left side */}
      <div className="w-1/2 h-full bg-white flex flex-col justify-between p-12">
        <div className="mt-12">
          <h1 className="text-5xl font-bold mb-2">Perdeu as suas coisas?</h1>
          <p className="text-3xl text-gray-600">A gente te ajuda a achar</p>
        </div>

        <div className="w-full h-full rounded-xl flex items-center justify-center">
          <LottieContainer animationData={animation} width={900} heigth={900}/>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 h-full bg-gray-50 flex flex-col items-center justify-center border-l border-gray-300">
        <h1 className="text-4xl mb-24">Encontre Ja!</h1>
        <h2 className="text-4xl font-semibold mb-12">LOGIN</h2>

        <form className="w-2/3 flex flex-col gap-8">
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

          <button className="bg-sky-900 text-white p-4 rounded-md text-lg mt-4" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
