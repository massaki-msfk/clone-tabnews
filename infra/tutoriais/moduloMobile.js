export const moduloMobile = {
  id: "mobile",
  nomeModulo: "Módulo Mobile",
  tutoriais: [
    {
      slug: "configuracao-mobile",
      tituloMenu: "Configuração Mobile",
      tituloPagina: "Configuração para novos Usuários no Mobile",
      subtitulo:
        "Passo a passo para configurar o aplicativo para mobile do Saikoo BTech.",
      anterior: null,
      proximo: {
        slug: "liberar-uso",
        titulo: "Liberar o uso do app",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "Seu primeiro passo será baixar o app pela Play/App Store.",
            "Após baixar o app, abra-o e siga as instruções para avançar até a página inicial.",
            "Na página inicial, você verá uma engrenagem no canto superior direito.",
            "Na página de configurações, clique no botão de '+' para adicionar uma nova configuração.",
            "Preencha os campos necessários:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "CNPJ: ",
              explicacao: "Insira o CNPJ da empresa que está acessando.",
            },
            {
              campo: "Endereço Servidor: ",
              explicacao:
                "É o endereço do app, fornecido pela equipe de suporte. Entre em contato com o suporte caso tenha dúvidas sobre o endereço do servidor.",
            },
            {
              campo: "Empresa: ",
              explicacao:
                "É um campo que fica bloqueado para edição, ele é preenchido automaticamente com base no CNPJ fornecido.",
            },
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "O 'Endereço Servidor' pode ser encontrado nas páginas de configuração dos aplicativos que já estão configurados, caso essa não seja sua primeira vez.",
        },
        {
          tipo: "texto",
          conteudo:
            "Após preencher os campos, clique no botão de 'Salvar Configuração' para concluir. Agora você pode retornar a tela inicial e acessar o aplicativo com o seu login e senha do Saikoo B-Tech (computador). Se seu dispositivo não estiver liberado, você pode seguir para o próximo tutorial: Liberar o uso do app",
        },
      ],
    },
    {
      slug: "liberar-uso",
      tituloMenu: "Liberar o uso do app",
      tituloPagina: "Liberação do uso do app para novos dispositivos",
      subtitulo:
        "Passo a passo para liberar o uso após a configuração do app Mobile.",
      anterior: {
        slug: "configuracao-mobile",
        titulo: "Configuração Mobile",
      },
      proximo: {
        slug: "outro-tutorial 3",
        titulo: "Em breve",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "Ao tentar logar a primeira vez, o aplicativo irá dar um erro de dispositivo não liberado para uso.",
            "Para liberar o uso do aplicativo, você deve acessar o cadastro de pessoa física do usuário que tentou acessar.",
            "No cadastro de pessoa física, vá até a aba '15. Móbile' e verifique o se o modelo de telefone apareceu.",
            "Caso o modelo do telefone tenha aparecido, basta clicar duas vezes no modelo e mudar o status de 'Liberar Uso:' para 'SIM'.",
          ],
        },
      ],
    },
  ],
};
