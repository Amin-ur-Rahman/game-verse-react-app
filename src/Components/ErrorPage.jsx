import { useState, useEffect } from "react";
import { Home, RefreshCw, Gamepad2 } from "lucide-react";

export default function ErrorPage() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-600 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-15 -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwxODUsMTI5LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="relative">
            <Gamepad2 className="w-24 h-24 text-emerald-400 drop-shadow-2xl" />
            <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-50 animate-pulse"></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1
            className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 tracking-tight ${
              glitchActive ? "animate-pulse" : ""
            }`}
          >
            404
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-3 text-center">
            Game Over!
          </h2>
          <p className="text-gray-300 text-center text-lg mb-8">
            Looks like this level doesn't exist. The page you're looking for has
            respawned elsewhere.
          </p>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl h-48 flex items-center justify-center mb-8 border border-emerald-500/30">
            <div className="text-center">
              <Gamepad2 className="w-16 h-16 text-emerald-500/40 mx-auto mb-2" />
              <p className="text-gray-400 text-sm"></p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/50"
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Return Home
            </button>
            <button
              onClick={() => window.location.reload()}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg border border-emerald-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20 text-center">
            <div className="text-2xl font-bold text-emerald-400">0</div>
            <div className="text-xs text-gray-400 mt-1">Pages Found</div>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20 text-center">
            <div className="text-2xl font-bold text-emerald-500">404</div>
            <div className="text-xs text-gray-400 mt-1">Error Code</div>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20 text-center">
            <div className="text-2xl font-bold text-emerald-600">∞</div>
            <div className="text-xs text-gray-400 mt-1">Retries Left</div>
          </div>
        </div>
      </div>
    </div>
  );
}
