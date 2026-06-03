import Link from "next/link";
import React from "react";

/**
 * Componente de página "Work in Progress" para massiro.com
 * Versão ultra-compatível: utiliza estilos inline para garantir o layout
 * e as cores mesmo sem Tailwind configurado.
 */
const App = () => {
  // Cores e estilos base para garantir o funcionamento
  const styles = {
    container: {
      backgroundColor: "#0f172a",
      color: "#e2e8f0", // slate-200
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
      margin: 0,
      padding: "24px",
      textAlign: "center",
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    title: {
      fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
      fontWeight: "800",
      letterSpacing: "-0.05em",
      marginBottom: "1rem",
      color: "#ffffff",
      margin: "0 0 16px 0",
    },
    dot: {
      color: "#3b82f6", // blue-500
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 12px",
      borderRadius: "9999px",
      backgroundColor: "#1e293b",
      color: "#94a3b8",
      fontSize: "14px",
      fontWeight: "500",
      border: "1px solid #334155",
      marginBottom: "32px",
    },
    statusDot: {
      height: "8px",
      width: "8px",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      position: "relative",
      flexShrink: 0,
    },
    text: {
      fontSize: "1.125rem",
      color: "#94a3b8",
      lineHeight: "1.6",
      maxWidth: "500px",
      marginBottom: "48px",
    },
    footer: {
      position: "absolute",
      bottom: "32px",
      color: "#475569",
      fontSize: "12px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  };

  return (
    <div style={styles.container}>
      {/* Injeção de CSS para animações e fontes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .pulse-dot::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: inherit;
          animation: pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes pulse {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }

        /* Reset forçar fundo no body */
        html, body {
          background-color: #0f172a !important;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `,
        }}
      />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h1 style={styles.title}>
          massiro<span style={styles.dot}>.</span>com
          <span style={styles.dot}>.</span>br
        </h1>

        {/* Status Badge */}
        <div style={styles.badge}>
          <span className="pulse-dot" style={styles.statusDot}></span>
          Trabaiano
        </div>

        {/* Mensagem */}
        <p style={styles.text}>Novidades em breve.</p>
      </main>

      {/* Rodapé */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Massiro - Todos os direitos
        reservados.
      </footer>
    </div>
  );
};

export default App;
