import React from "react";
import Link from "next/link";
import { modulos } from "infra/dadosTutoriais";

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
      {modulos.map((modulos) => (
        <section
          key={modulos.id}
          style={{
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              color: "#2d3748",
              fontSize: "24px",
              marginBottom: "20px",
              borderBottom: "2px solid #e2e8f0",
              paddingBottom: "8px",
            }}
          >
            {modulos.nomeModulo}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {modulos.tutoriais.map((tutorial) => (
              <div
                key={tutorial.slug}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "24px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#2d3748",
                      fontSize: "20px",
                      marginTop: 0,
                      marginBottom: "12px",
                    }}
                  >
                    {tutorial.tituloMenu}
                  </h3>
                  <p
                    style={{
                      color: "#718096",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {tutorial.subtitulo ||
                      "Acesse para ver o passo a passo completo deste tutorial."}
                  </p>
                </div>
                <Link
                  href={`/bases/${tutorial.slug}`}
                  style={{
                    textDecoration: "none",
                    marginTop: "24px",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      color: "#0056b3",
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Ler Tutorial &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
