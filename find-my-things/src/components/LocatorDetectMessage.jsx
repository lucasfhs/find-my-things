import React from "react";

export default function LocatorDetectMessage() {
  const [detected, setDetected] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDetected(true);
    }, 3000); // tempo até "identificar"

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-2 mb-1">
      {/* Ícone animado */}
      <div className="relative w-20 h-20 flex items-center justify-center mb-2">

        {/* Ondas – aparecem apenas antes de detectar */}
        {!detected && (
          <>
            <span className="absolute w-10 h-10 border-2 border-blue-400 rounded-full animate-ping opacity-70"></span>
            <span className="absolute w-14 h-14 border-2 border-blue-300 rounded-full animate-ping opacity-40 delay-200"></span>
            <span className="absolute w-20 h-20 border-2 border-blue-200 rounded-full animate-ping opacity-30 delay-500"></span>
          </>
        )}

        {/* Ícone central */}
        <div
          className={`
            w-12 h-12 flex items-center justify-center rounded-xl 
            transition-all duration-700
            ${detected ? "bg-green-500 text-white" : "bg-blue-600 text-white"}
          `}
        >
          {detected ? (
            // Check ✔️
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            // Ícone de celular 📱 com ondas internas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            </svg>
          )}
        </div>
      </div>

      {/* Texto inferior */}
      <p
        className={`
          text-center text-sm font-medium transition-all duration-700
          ${detected ? "opacity-100 text-green-700" : "opacity-70 text-gray-700"}
        `}
      >
        {detected
          ? "Localizador do item identificado!"
          : "Aproxime do celular o item com o localizador acoplado."}
      </p>
    </div>
  );
}
