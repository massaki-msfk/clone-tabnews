import React, { useState, useEffect } from "react";
import Head from "next/head";

// --- Ícones (Inline SVG) ---
const Scale = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

const Hand = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

const Coins = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7 .71-2.82 2.82-.7-.71" />
  </svg>
);

const Skull = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M8 20v2h8v-2" />
    <path d="m12.5 17-.5-1-.5 1h1z" />
    <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const AbadarKeyIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="6" r="4" className="fill-yellow-500/20" />
    <path d="M12 10v12" strokeWidth="3" />
    <path d="M12 18h4" strokeWidth="3" />
    <path d="M12 14h3" strokeWidth="3" />
    <path d="M12 2l0 2" strokeWidth="2" />
    <path d="M8 6h-2" strokeWidth="1" />
    <path d="M16 6h2" strokeWidth="1" />
  </svg>
);

export default function AbadarEnigmaPage() {
  const [coins, setCoins] = useState([]);
  const [fakeCoinId, setFakeCoinId] = useState(null);
  const [attempts, setAttempts] = useState(2);
  const [message, setMessage] = useState(
    "Aproxime-se do Altar do Julgamento...",
  );
  const [handLevels, setHandLevels] = useState({ left: 0, right: 0 });
  const [gameState, setGameState] = useState("playing");
  const [history, setHistory] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Estados para Drag Mobile/Desktop
  const [dragState, setDragState] = useState({
    isDragging: false,
    id: null,
    x: 0,
    y: 0,
  });
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
    resetGame();

    // Injeta o CDN do Tailwind dinamicamente apenas do lado do cliente
    const tailwindScriptId = "tailwind-cdn-script";
    if (!document.getElementById(tailwindScriptId)) {
      const script = document.createElement("script");
      script.id = tailwindScriptId;
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const resetGame = (fullReset = true) => {
    const newCoins = Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      location: "table",
    }));
    setCoins(newCoins);

    if (fullReset) {
      const newFake = Math.floor(Math.random() * 9) + 1;
      setFakeCoinId(newFake);
      setAttempts(2);
      setHistory([]);
      setMessage(
        "Uma moeda é falsa (vale menos). A estátua ergue a oferenda de MAIOR valor.",
      );
    } else {
      setMessage("As moedas retornaram à mesa de pedra.");
    }

    setHandLevels({ left: 0, right: 0 });
    setGameState("playing");
  };

  const handlePointerDown = (e, id) => {
    if (gameState === "selecting") {
      submitGuess(id);
      return;
    }
    if (gameState !== "playing") return;

    setDragState({ isDragging: true, id, x: e.clientX, y: e.clientY });
    setDragStartPos({ x: e.clientX, y: e.clientY });
  };

  // Este evento fica na TELA TODA, então não perde a moeda se mexer muito rápido
  const handlePointerMove = (e) => {
    if (!dragState.isDragging) return;
    setDragState((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handlePointerUp = (e) => {
    if (!dragState.isDragging) return;

    const id = dragState.id;

    // ElementFromPoint ignora a moeda fantasma porque ela tem pointer-events: none
    const targetUnder = document.elementFromPoint(e.clientX, e.clientY);

    const dx = e.clientX - dragStartPos.x;
    const dy = e.clientY - dragStartPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 5) {
      // Clique rápido
      cycleCoinLocation(id);
    } else {
      // Arraste
      const zone = targetUnder?.closest("[data-zone]");
      if (zone) {
        const newLoc = zone.getAttribute("data-zone");
        const currentLoc = coins.find((c) => c.id === id)?.location;
        if (newLoc && newLoc !== currentLoc) {
          moveCoinTo(id, newLoc);
        }
      }
    }

    setDragState({ isDragging: false, id: null, x: 0, y: 0 });
  };

  const moveCoinTo = (coinId, targetLocation) => {
    setCoins((prev) =>
      prev.map((c) => {
        if (c.id !== coinId) return c;
        return { ...c, location: targetLocation };
      }),
    );
    setHandLevels({ left: 0, right: 0 });
  };

  const cycleCoinLocation = (coinId) => {
    const coin = coins.find((c) => c.id === coinId);
    let nextLoc = "table";
    if (coin.location === "table") nextLoc = "left";
    else if (coin.location === "left") nextLoc = "right";
    moveCoinTo(coinId, nextLoc);
  };

  const weighCoins = () => {
    const leftCoins = coins.filter((c) => c.location === "left");
    const rightCoins = coins.filter((c) => c.location === "right");

    if (leftCoins.length === 0 && rightCoins.length === 0) {
      setMessage("As mãos de pedra estão vazias. Ofereça algo.");
      return;
    }
    if (attempts <= 0) {
      setMessage("A estátua permanece imóvel.");
      return;
    }

    const calculateValue = (arr) =>
      arr.reduce((acc, coin) => acc + (coin.id === fakeCoinId ? 9 : 10), 0);
    const leftVal = calculateValue(leftCoins);
    const rightVal = calculateValue(rightCoins);

    let resultMsg = "";
    let newLevels = { left: 0, right: 0 };

    if (leftVal > rightVal) {
      newLevels = { left: 1, right: -0.5 };
      resultMsg = "O braço ESQUERDO se ergue lentamente.";
    } else if (rightVal > leftVal) {
      newLevels = { left: -0.5, right: 1 };
      resultMsg = "O braço DIREITO se ergue lentamente.";
    } else {
      newLevels = { left: 0, right: 0 };
      resultMsg = "A balança permanece em equilíbrio perfeito.";
    }

    setHandLevels(newLevels);
    setAttempts((prev) => prev - 1);

    const logEntry = `Pesagem ${3 - attempts}: Esq[${leftCoins.map((c) => c.id).join(",")}] vs Dir[${rightCoins.map((c) => c.id).join(",")}]. Resultado: ${leftVal > rightVal ? "Esq Sobe" : rightVal > leftVal ? "Dir Sobe" : "Equilíbrio"}`;
    setHistory((prev) => [...prev, logEntry]);

    if (attempts - 1 === 0) {
      setMessage(`${resultMsg} (Última tentativa! Aponte a moeda falsa.)`);
    } else {
      setMessage(resultMsg);
    }
  };

  const handleGuessMode = () => {
    setGameState("selecting");
    setMessage("Toque na moeda que exala falsidade...");
    setHandLevels({ left: 0, right: 0 });
  };

  const submitGuess = (coinId) => {
    if (coinId === fakeCoinId) {
      setGameState("won");
      setMessage(
        `A moeda ${coinId} derrete em chumbo vil. As portas se abrem!`,
      );
    } else {
      setGameState("lost");
      setMessage(`A moeda ${coinId} brilha intensamente. Você escolheu mal.`);
    }
  };

  const Coin = ({ data, isGhost = false }) => {
    const isBeingDragged =
      dragState.isDragging && dragState.id === data.id && !isGhost;

    return (
      <div
        onPointerDown={(e) => {
          if (!isGhost) {
            e.preventDefault();
            handlePointerDown(e, data.id);
          }
        }}
        className={`
                    w-16 h-16 rounded-full flex items-center justify-center relative select-none
                    shadow-[4px_6px_8px_rgba(0,0,0,0.6),_0_0_0_1px_#8B4513] transition-all duration-200
                    ${gameState === "playing" && !isGhost ? "cursor-grab active:cursor-grabbing" : ""}
                    ${!isGhost && !isBeingDragged ? "hover:scale-105 hover:-translate-y-1" : ""}
                    ${gameState === "selecting" && !isGhost ? "animate-pulse ring-4 ring-red-900/50 hover:bg-red-900/20 cursor-pointer" : ""}
                    
                    ${isBeingDragged ? "opacity-40 scale-95" : "opacity-100"}
                    ${isGhost ? "shadow-[0_20px_30px_rgba(0,0,0,0.9),_0_0_0_1px_#8B4513] scale-110 opacity-95 z-50" : ""}
                `}
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, #ffd700 0%, #daa520 25%, #b8860b 60%, #5c4033 100%)",
          pointerEvents: isGhost ? "none" : "auto", // Garante que a moeda fantasma não interfira onde soltamos
          touchAction: "none",
        }}
      >
        <div className="absolute inset-[3px] rounded-full border-2 border-dashed border-[#8B4513]/40 opacity-70"></div>
        <div className="absolute inset-[8px] rounded-full border border-[#ffe066]/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
        <Scale className="absolute w-8 h-8 text-[#5c4033] opacity-20" />
        <span
          className="relative z-10 font-serif font-bold text-2xl text-[#3e2723] drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {data.id}
        </span>
        <div className="absolute top-2 left-3 w-4 h-2 bg-white rounded-[50%] opacity-40 blur-[1px]"></div>
      </div>
    );
  };

  const DropZone = ({ location, children, className, label }) => (
    <div
      data-zone={location}
      className={`relative transition-all duration-500 ${className}`}
    >
      {children}
      <div className="absolute -bottom-6 w-full text-center text-[#5c5c5c] text-xs font-serif tracking-widest uppercase opacity-70 pointer-events-none">
        {label}
      </div>
    </div>
  );

  // Evita erros de hidratação (server rendering mismatch)
  if (!isMounted)
    return (
      <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}></div>
    );

  return (
    <>
      <Head>
        <title>Enigma de Abadar</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Cinzel:wght@700&display=swap');
                
                /* Reset Tailwind Básico (Garante que botões e fontes funcionem sem os estilos globais interferirem) */
                *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; }
                
                .medieval-font { font-family: 'MedievalSharp', cursive; }
                .stone-pattern {
                    background-color: #1a1a1a;
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v5.1L6 20.48V20h14v.5zm0-4.6L0 16v-2h20v2.1zM20 10V0h2v10h-2zm20 10.5V18H20v-2h20v5.1L26 20.48V20h14v.5zm0-4.6L20 16v-2h20v2.1zM0 10h20V0H0v10zm0 30h20V20H0v20zm20 0h20V20H20v20z' fill='%23262626' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                }
                /* Previne pull-to-refresh no mobile */
                body { margin: 0; padding: 0; overscroll-behavior-y: none; }
            `,
        }}
      />

      {/* O SEGREDO DO ARRASTE: Os eventos de move e up ficam na div raiz, que ocupa a tela toda */}
      <div
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="min-h-screen stone-pattern text-[#d4d4d4] medieval-font flex flex-col items-center justify-center p-2 md:p-4 select-none overflow-hidden relative w-full"
        style={{ touchAction: "none" }}
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_90%)] z-0"></div>

        <div className="z-10 w-full max-w-5xl bg-[#1c1917] border-y-8 border-x-2 border-[#292524] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col relative rounded-sm">
          {/* Cabeçalho */}
          <div className="bg-[#151515] p-4 md:p-6 border-b border-[#333] flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent opacity-50"></div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-[#2a2a2a] p-2 md:p-3 rounded-full border border-[#444] hidden sm:block">
                <Scale className="text-[#DAA520] w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(218,165,32,0.5)]" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl text-[#DAA520] tracking-wide drop-shadow-md font-bold m-0 p-0">
                  Altar de Abadar
                </h1>
                <p className="text-[#666] text-[10px] md:text-sm tracking-[0.2em] uppercase m-0 mt-1 p-0">
                  Área 10 • O Julgamento
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[#666] text-[10px] md:text-xs uppercase tracking-widest mb-1">
                Pesagens
              </span>
              <div className="flex gap-1">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-[#444] ${i <= attempts ? "bg-[#DAA520] shadow-[0_0_10px_#DAA520]" : "bg-[#1a1a1a]"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Área Principal (Balança) */}
          <div className="flex-grow p-2 md:p-4 relative min-h-[350px] md:min-h-[450px] flex flex-col justify-center bg-[radial-gradient(ellipse_at_top,_#292524_0%,_#0f0f0f_100%)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 md:w-2 h-20 md:h-32 bg-[#2a2a2a] border-x border-[#111]"></div>
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-2 md:h-4 bg-[#2a2a2a] border border-[#111] rounded-full shadow-lg"></div>

            {/* Pratos da Balança */}
            <div className="flex justify-between items-start w-full px-2 md:px-16 mt-8 md:mt-12 z-20 h-[250px] md:h-[300px]">
              {/* PRATO ESQUERDO */}
              <div
                className="w-[45%] md:w-1/3 flex flex-col items-center transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateY(${handLevels.left * -40}px)` }}
              >
                <div className="h-16 md:h-24 w-[2px] bg-[#444] relative top-2">
                  <div className="absolute -left-6 md:-left-8 top-0 h-16 md:h-24 w-[1px] bg-[#333] rotate-12 origin-top"></div>
                  <div className="absolute -right-6 md:-right-8 top-0 h-16 md:h-24 w-[1px] bg-[#333] -rotate-12 origin-top"></div>
                </div>

                <DropZone
                  location="left"
                  label="Mão Esq."
                  className="w-full pointer-events-auto"
                >
                  <div className="w-full min-h-[120px] relative">
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-20 bg-gradient-to-b from-[#2a2a2a] to-[#111] border-t border-[#444] rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl opacity-90 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-wrap content-end justify-center p-2 gap-2 md:gap-3 min-h-[120px] pb-4 md:pb-6">
                      {coins
                        .filter((c) => c.location === "left")
                        .map((c) => (
                          <Coin key={c.id} data={c} />
                        ))}
                      {coins.filter((c) => c.location === "left").length ===
                        0 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#444] opacity-30 text-3xl pointer-events-none">
                          <Hand />
                        </div>
                      )}
                    </div>
                  </div>
                </DropZone>
              </div>

              {/* CONTROLES CENTRAIS */}
              <div className="absolute inset-x-0 bottom-4 md:static flex md:flex-col gap-4 md:gap-6 items-center justify-center z-30 pointer-events-none md:pointer-events-auto">
                <div className="pointer-events-auto bg-[#1a1a1a]/80 md:bg-transparent p-2 rounded-lg backdrop-blur-sm md:backdrop-blur-none flex md:flex-col items-center gap-4">
                  {gameState === "playing" ? (
                    <>
                      <button
                        onClick={weighCoins}
                        disabled={attempts === 0}
                        className={`
                                                    relative group px-6 py-3 md:px-8 md:py-4 rounded-sm font-bold text-lg md:text-xl tracking-widest transition-all duration-300
                                                    border-2
                                                    ${
                                                      attempts > 0
                                                        ? "bg-[#1a1a1a] border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-[#1a1a1a] shadow-[0_0_20px_rgba(218,165,32,0.1)]"
                                                        : "bg-[#0f0f0f] border-[#333] text-[#333] cursor-not-allowed"
                                                    }
                                                `}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <Scale className="w-5 h-5 hidden md:block" /> PESAR
                        </span>
                      </button>

                      <button
                        onClick={handleGuessMode}
                        className="text-[#888] text-xs md:text-sm hover:text-red-400 transition-all border-b border-transparent hover:border-red-400 pb-1 bg-transparent cursor-pointer"
                      >
                        <span className="flex items-center gap-1 md:gap-2">
                          <Skull className="w-4 h-4" /> Acusar
                        </span>
                      </button>
                    </>
                  ) : (
                    gameState === "selecting" && (
                      <div className="animate-pulse text-red-500 font-bold text-sm md:text-xl drop-shadow-md bg-black/80 p-2 rounded border border-red-900/50 text-center">
                        QUEM TRAI O OURO?
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* PRATO DIREITO */}
              <div
                className="w-[45%] md:w-1/3 flex flex-col items-center transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateY(${handLevels.right * -40}px)` }}
              >
                <div className="h-16 md:h-24 w-[2px] bg-[#444] relative top-2">
                  <div className="absolute -left-6 md:-left-8 top-0 h-16 md:h-24 w-[1px] bg-[#333] rotate-12 origin-top"></div>
                  <div className="absolute -right-6 md:-right-8 top-0 h-16 md:h-24 w-[1px] bg-[#333] -rotate-12 origin-top"></div>
                </div>

                <DropZone
                  location="right"
                  label="Mão Dir."
                  className="w-full pointer-events-auto"
                >
                  <div className="w-full min-h-[120px] relative">
                    <div className="absolute inset-x-0 bottom-0 h-16 md:h-20 bg-gradient-to-b from-[#2a2a2a] to-[#111] border-t border-[#444] rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl opacity-90 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-wrap content-end justify-center p-2 gap-2 md:gap-3 min-h-[120px] pb-4 md:pb-6">
                      {coins
                        .filter((c) => c.location === "right")
                        .map((c) => (
                          <Coin key={c.id} data={c} />
                        ))}
                      {coins.filter((c) => c.location === "right").length ===
                        0 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#444] opacity-30 text-3xl pointer-events-none">
                          <Hand className="scale-x-[-1]" />
                        </div>
                      )}
                    </div>
                  </div>
                </DropZone>
              </div>
            </div>
          </div>

          {/* Mensagem e Narrativa */}
          <div className="bg-[#111] p-3 md:p-4 text-center border-y border-[#333] min-h-[70px] md:min-h-[80px] flex items-center justify-center relative m-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20 pointer-events-none"></div>
            <p className="text-sm md:text-xl text-[#ccc] relative z-10 drop-shadow-md max-w-2xl px-2 m-0 p-0">
              "{message}"
            </p>
          </div>

          {/* Mesa (Área de Estoque) */}
          <DropZone
            location="table"
            label=""
            className="bg-[#1a1a1a] p-4 md:p-8 flex flex-col items-center gap-4 md:gap-6 relative z-10 pointer-events-auto"
          >
            <div className="flex items-center gap-2 text-[#555] text-[10px] md:text-xs uppercase tracking-[0.2em] m-0 p-0">
              <Coins className="w-4 h-4" />
              Arraste ou toque nas moedas
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full max-w-3xl min-h-[100px] md:min-h-[80px] p-4 md:p-6 rounded-lg bg-[#111] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-[#333]">
              {coins
                .filter((c) => c.location === "table")
                .map((c) => (
                  <Coin key={c.id} data={c} />
                ))}
              {coins.filter((c) => c.location === "table").length === 0 && (
                <span className="text-[#333] italic text-sm md:text-lg select-none my-auto">
                  O altar está servido.
                </span>
              )}
            </div>
          </DropZone>

          {/* Fim de Jogo Overlay */}
          {(gameState === "won" || gameState === "lost") && (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50 animate-in fade-in duration-700 backdrop-blur-sm p-4">
              <div
                className={`p-6 md:p-10 rounded-lg border-2 w-full max-w-lg text-center ${gameState === "won" ? "border-[#DAA520] bg-[#1a1a0a]" : "border-red-900 bg-[#1a0a0a]"}`}
              >
                {gameState === "won" ? (
                  <>
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#DAA520]/10 border border-[#DAA520]/30 shadow-[0_0_30px_rgba(218,165,32,0.2)]">
                      <AbadarKeyIcon className="w-16 h-16 md:w-20 md:h-20 text-[#DAA520] animate-bounce" />
                    </div>
                    <h2 className="text-2xl md:text-4xl text-[#DAA520] mb-4 drop-shadow-[0_0_10px_rgba(218,165,32,0.5)] m-0 p-0">
                      A CHAVE DE ABADAR
                    </h2>
                    <p className="text-[#aaa] text-sm md:text-base mb-8 m-0 p-0 mt-4">
                      O tesouro foi destrancado. A moeda falsa revelou sua
                      natureza vil e as armadilhas foram desarmadas.
                    </p>
                  </>
                ) : (
                  <>
                    <Skull className="w-16 h-16 md:w-20 md:h-20 text-red-600 mx-auto mb-6 animate-pulse" />
                    <h2 className="text-2xl md:text-4xl text-red-600 mb-4 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] m-0 p-0">
                      JULGAMENTO FALHO
                    </h2>
                    <p className="text-[#aaa] text-sm md:text-base mb-8 m-0 p-0 mt-4">
                      A estátua não aceita enganos. As moedas desaparecem em
                      fumaça negra para reaparecerem embaralhadas.
                    </p>
                  </>
                )}
                <button
                  onClick={() => resetGame(true)}
                  className="px-6 py-3 md:px-8 bg-[#333] hover:bg-[#ccc] hover:text-black text-white font-bold rounded-sm transition-all flex items-center gap-2 mx-auto uppercase tracking-widest text-xs md:text-sm cursor-pointer mt-6"
                >
                  <RefreshCw className="w-4 h-4" /> Recomeçar Enigma
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé e Histórico */}
        <div className="mt-4 md:mt-8 w-full max-w-5xl flex justify-between items-start opacity-50 hover:opacity-100 transition-opacity">
          <div className="text-[10px] md:text-xs text-[#555] uppercase tracking-widest m-0 p-0">
            Ferramenta do Mestre • v3.1 (Tailwind Dinâmico)
          </div>
          {history.length > 0 && (
            <div className="text-[10px] md:text-xs text-[#666] font-mono text-right bg-black/40 p-2 rounded">
              {history.map((h, i) => (
                <div key={i}>{h}</div>
              ))}
            </div>
          )}
        </div>

        {/* Moeda "Fantasma" que segue o dedo durante o arraste */}
        {dragState.isDragging && (
          <div
            style={{
              position: "fixed",
              left: dragState.x,
              top: dragState.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            <Coin data={{ id: dragState.id }} isGhost={true} />
          </div>
        )}
      </div>
    </>
  );
}
