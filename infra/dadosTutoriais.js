export const tutoriais = [
  {
    slug: "configuracao-mobile",
    tituloMenu: "Configuração Mobile",
    tituloPagina: "Configuração para novos Usuários no Mobile",
    subtitulo:
      "Passo a passo para configurar o aplicativo para mobile do Saikoo BTech",
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
  {
    slug: "cadastro-pessoa-fisica",
    tituloMenu: "Cadastro de Pessoa Física",
    tituloPagina: "Primeiros passos de como cadastrar uma pessoa física",
    subtitulo: "Como cadastrar um cliente ou um profissional no sistema",
    anterior: null,
    proximo: null,

    passos: [
      {
        tipo: "paragrafos",
        paragrafos: [
          "No menu principal, clique em 'Cadastros' e depois em 'Pessoa Física/Jurídica'.",
          "Na tela de cadastro, clique no botão 'Novo (F2)' e selecione 'Pessoa Física'.",
          "Na tela de cadastro de pessoa física, vão aparecer vários campos. A seguir, alguns deles os quais são interessantes preencher:",
        ],
      },
      {
        tipo: "lista",
        itens: [
          {
            campo: "*Nome Completo: ",
            explicacao:
              "Insira o nome completo do seu cliente ou do seu profissional.",
          },
          {
            campo: "*Sexo: ",
            explicacao: "Selecione o sexo dessa pessoa.",
          },
          {
            campo: "*Celular Wpp: ",
            explicacao: "Insira o número do celular com WhatsApp.",
          },
          {
            campo: "Apelido: ",
            explicacao:
              "Insira o apelido o qual a pessoa prefere ser chamada. (Opcional: Pode ser usado para preencher o nome social do cliente)",
          },
          {
            campo: "CEP: ",
            explicacao:
              "Insira o CEP do endereço da pessoa. (Esse campo preenche automaticamente o 'Endereço' e o 'Bairro')",
          },
          {
            campo: "Endereço: ",
            explicacao:
              "Insira o logradouro desta pessoa. (Rua, Avenida, Travessa, etc.)",
          },
        ],
      },
      {
        tipo: "alerta",
        conteudo:
          "Apenas os campos com '*' são obrigatórios para o cadastro ser salvo, no sistema eles aparecerão em amarelo. Os outros campos são opcionais, mas é recomendado preencher o máximo de informações possível.",
      },
    ],
  },
  {
    slug: "cadastro-pessoa-fisica",
    tituloMenu: "Cadastro de Pessoa Física",
    tituloPagina: "Primeiros passos de como cadastrar uma pessoa física",
    subtitulo: "Como cadastrar um cliente ou um profissional no sistema",
    anterior: null,
    proximo: null,

    passos: [
      {
        tipo: "paragrafos",
        paragrafos: [
          "No menu principal, clique em 'Cadastros' e depois em 'Pessoa Física/Jurídica'.",
          "Na tela de cadastro, clique no botão 'Novo (F2)' e selecione 'Pessoa Física'.",
          "Na tela de cadastro de pessoa física, vão aparecer vários campos. A seguir, alguns deles os quais são interessantes preencher:",
        ],
      },
      {
        tipo: "lista",
        itens: [
          {
            campo: "*Nome Completo: ",
            explicacao:
              "Insira o nome completo do seu cliente ou do seu profissional.",
          },
          {
            campo: "*Sexo: ",
            explicacao: "Selecione o sexo dessa pessoa.",
          },
          {
            campo: "*Celular Wpp: ",
            explicacao: "Insira o número do celular com WhatsApp.",
          },
          {
            campo: "Apelido: ",
            explicacao:
              "Insira o apelido o qual a pessoa prefere ser chamada. (Opcional: Pode ser usado para preencher o nome social do cliente)",
          },
          {
            campo: "CEP: ",
            explicacao:
              "Insira o CEP do endereço da pessoa. (Esse campo preenche automaticamente o 'Endereço' e o 'Bairro')",
          },
          {
            campo: "Endereço: ",
            explicacao:
              "Insira o logradouro desta pessoa. (Rua, Avenida, Travessa, etc.)",
          },
        ],
      },
      {
        tipo: "alerta",
        conteudo:
          "Apenas os campos com '*' são obrigatórios para o cadastro ser salvo, no sistema eles aparecerão em amarelo. Os outros campos são opcionais, mas é recomendado preencher o máximo de informações possível.",
      },
    ],
  },
  {
    slug: "cadastro-pessoa-fisica",
    tituloMenu: "Cadastro de Pessoa Física",
    tituloPagina: "Primeiros passos de como cadastrar uma pessoa física",
    subtitulo: "Como cadastrar um cliente ou um profissional no sistema",
    anterior: null,
    proximo: null,

    passos: [
      {
        tipo: "paragrafos",
        paragrafos: [
          "No menu principal, clique em 'Cadastros' e depois em 'Pessoa Física/Jurídica'.",
          "Na tela de cadastro, clique no botão 'Novo (F2)' e selecione 'Pessoa Física'.",
          "Na tela de cadastro de pessoa física, vão aparecer vários campos. A seguir, alguns deles os quais são interessantes preencher:",
        ],
      },
      {
        tipo: "lista",
        itens: [
          {
            campo: "*Nome Completo: ",
            explicacao:
              "Insira o nome completo do seu cliente ou do seu profissional.",
          },
          {
            campo: "*Sexo: ",
            explicacao: "Selecione o sexo dessa pessoa.",
          },
          {
            campo: "*Celular Wpp: ",
            explicacao: "Insira o número do celular com WhatsApp.",
          },
          {
            campo: "Apelido: ",
            explicacao:
              "Insira o apelido o qual a pessoa prefere ser chamada. (Opcional: Pode ser usado para preencher o nome social do cliente)",
          },
          {
            campo: "CEP: ",
            explicacao:
              "Insira o CEP do endereço da pessoa. (Esse campo preenche automaticamente o 'Endereço' e o 'Bairro')",
          },
          {
            campo: "Endereço: ",
            explicacao:
              "Insira o logradouro desta pessoa. (Rua, Avenida, Travessa, etc.)",
          },
        ],
      },
      {
        tipo: "alerta",
        conteudo:
          "Apenas os campos com '*' são obrigatórios para o cadastro ser salvo, no sistema eles aparecerão em amarelo. Os outros campos são opcionais, mas é recomendado preencher o máximo de informações possível.",
      },
    ],
  },
  {
    slug: "cadastro-pessoa-fisica",
    tituloMenu: "Cadastro de Pessoa Física",
    tituloPagina: "Primeiros passos de como cadastrar uma pessoa física",
    subtitulo: "Como cadastrar um cliente ou um profissional no sistema",
    anterior: null,
    proximo: null,

    passos: [
      {
        tipo: "paragrafos",
        paragrafos: [
          "No menu principal, clique em 'Cadastros' e depois em 'Pessoa Física/Jurídica'.",
          "Na tela de cadastro, clique no botão 'Novo (F2)' e selecione 'Pessoa Física'.",
          "Na tela de cadastro de pessoa física, vão aparecer vários campos. A seguir, alguns deles os quais são interessantes preencher:",
        ],
      },
      {
        tipo: "lista",
        itens: [
          {
            campo: "*Nome Completo: ",
            explicacao:
              "Insira o nome completo do seu cliente ou do seu profissional.",
          },
          {
            campo: "*Sexo: ",
            explicacao: "Selecione o sexo dessa pessoa.",
          },
          {
            campo: "*Celular Wpp: ",
            explicacao: "Insira o número do celular com WhatsApp.",
          },
          {
            campo: "Apelido: ",
            explicacao:
              "Insira o apelido o qual a pessoa prefere ser chamada. (Opcional: Pode ser usado para preencher o nome social do cliente)",
          },
          {
            campo: "CEP: ",
            explicacao:
              "Insira o CEP do endereço da pessoa. (Esse campo preenche automaticamente o 'Endereço' e o 'Bairro')",
          },
          {
            campo: "Endereço: ",
            explicacao:
              "Insira o logradouro desta pessoa. (Rua, Avenida, Travessa, etc.)",
          },
        ],
      },
      {
        tipo: "alerta",
        conteudo:
          "Apenas os campos com '*' são obrigatórios para o cadastro ser salvo, no sistema eles aparecerão em amarelo. Os outros campos são opcionais, mas é recomendado preencher o máximo de informações possível.",
      },
    ],
  },
];
