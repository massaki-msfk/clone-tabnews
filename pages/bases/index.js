import React from "react";
import Link from "next/link";
import { tutoriais } from "infra/dadosTutoriais";

const Home = () => {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{ color: "#1a202c", fontSize: "36px", marginBottom: "16px" }}
        >
          Central de Ajuda e Treinamento Saikoo B-Tech
        </h1>
        <p
          style={{
            color: "#4a5568",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Encontre o passo a passo para configurar e utilizar todas as
          funcionalidades do nosso sistema.
        </p>
        <div
          id="busca"
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#f7fafc",
            borderRadius: "8px",
            color: "a0aec0",
            maxWidth: "600px",
            margin: "30px auto 0 auto",
          }}
        >
          [ Futura barra de busca aqui ]
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {tutoriais.map((tutorial) => (
          <div
            key={tutorial.slug}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Link
              href={`/bases/${tutorial.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "24px",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      color: "#2d3748",
                      fontSize: "20px",
                      marginTop: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {tutorial.tituloMenu}
                  </h2>
                  <p
                    style={{
                      color: "718096",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {tutorial.subtitulo ||
                      "Acesse para ver o passo a passo completo deste tutorial."}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "24px",
                    color: "#0056b3",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Ler Tutorial &rarr;
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
