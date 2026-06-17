import React from "react";
import { useRouter } from "next/router";
import { modulos } from "infra/dadosTutoriais";
import Link from "next/link";

const TutorialDinamico = () => {
  const router = useRouter();
  const { slug } = router.query;

  const tutorialAtual = modulos
    .flatMap((m) => m.tutoriais)
    .find((t) => t.slug === slug);

  if (!tutorialAtual) {
    return (
      <p style={{ padding: "20px", fontFamily: "sans-serif" }}>
        Opa! Tutorial não encontrado.
      </p>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          color: "#1a202c",
          borderBottom: "2px solid #eaeaea",
          paddingBottom: "10px",
          marginBottom: "30px",
        }}
      >
        {tutorialAtual.tituloPagina}
      </h1>
      <div style={{ display: "flex" }}>
        <aside
          style={{
            width: "280px",
            paddingRight: "20px",
            borderRight: "1px solid #eaeaea",
          }}
        >
          {modulos.map((modulos) => (
            <div key={modulos.id} style={{ marginBottom: "24px" }}>
              <h4
                style={{
                  margin: "0 0 10px 0",
                  color: "#718096",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {modulos.nomeModulo}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {modulos.tutoriais.map((tutorial) => {
                  const taAtivo = tutorial.slug === slug;

                  return (
                    <li key={tutorial.slug} style={{ marginBottom: "6px" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        href={`/bases/${tutorial.slug}`}
                      >
                        <span
                          style={{
                            display: "block",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: taAtivo ? "600" : "400",
                            color: taAtivo ? "#0056b3" : "#4a5568",
                            backgroundColor: taAtivo
                              ? "#e6f0ff"
                              : "transparent",
                            cursor: "pointer",
                            transition: "all 0.2s ease-in-out",
                          }}
                        >
                          {tutorial.tituloMenu}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </aside>

        <section
          id="conteudo-tutorial"
          style={{
            flex: 1,
            paddingLeft: "40px",
            lineHeight: "1.6",
            color: "#2d3748",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "20px",
              color: "#1a202c",
              fontSize: "22px",
            }}
          >
            {tutorialAtual.subtitulo}
          </h2>

          {tutorialAtual.passos.map((passo, index) => {
            switch (passo.tipo) {
              case "texto":
                return (
                  <p key={index} style={{ marginBottom: "16px" }}>
                    {passo.conteudo}
                  </p>
                );

              case "paragrafos":
                return (
                  <>
                    {passo.paragrafos.map((paragrafo, i) => (
                      <p key={i} style={{ marginBottom: "16px" }}>
                        {paragrafo}
                      </p>
                    ))}
                  </>
                );

              case "lista":
                return (
                  <ul
                    key={index}
                    style={{ paddingLeft: "20px", marginBottom: "16px" }}
                  >
                    {passo.itens.map((item, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        <strong>{item.campo}</strong>
                        {item.explicacao}
                      </li>
                    ))}
                  </ul>
                );

              case "alerta":
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff9db",
                      color: "#856404",
                      borderLeft: "4px solid #f59f00",
                      padding: "16px",
                      borderRadius: "4px",
                      margin: "20px 0",
                    }}
                  >
                    <strong>Atenção: </strong>
                    {passo.conteudo}
                  </div>
                );
              default:
                return null;
            }
          })}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
              paddingTop: "20px",
              borderTop: "1px solid #eaeaea",
            }}
          >
            <div>
              {tutorialAtual.anterior && (
                <Link href={`/bases/${tutorialAtual.anterior.slug}`}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "10px 16px",
                      backgroundColor: "#f7fafc",
                      color: "#4a5568",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "14px",
                      border: "1px solid #e2e8f0",
                      cursor: "pointer",
                    }}
                  >
                    &larr; Anterior: {tutorialAtual.anterior.titulo}
                  </span>
                </Link>
              )}
            </div>

            <div>
              {tutorialAtual.proximo && (
                <Link href={`/bases/${tutorialAtual.proximo.slug}`}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "10px 16px",
                      backgroundColor: "#0056b3",
                      color: "#ffffff",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "14px",
                      border: "1px solid #0056b3",
                      cursor: "pointer",
                    }}
                  >
                    Próximo: {tutorialAtual.proximo.titulo} &rarr;
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TutorialDinamico;
