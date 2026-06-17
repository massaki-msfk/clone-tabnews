export const moduloCadastros = {
  id: "cadastros",
  nomeModulo: "Módulo Cadastros",
  tutoriais: [
    {
      slug: "cadastro-pessoa-fisica",
      tituloMenu: "Cadastro de Pessoa Física",
      tituloPagina: "Primeiros passos de como cadastrar uma pessoa física",
      subtitulo: "Como cadastrar um cliente ou um profissional no sistema.",
      anterior: null,
      proximo: {
        slug: "cadastro-pessoa-juridica",
        titulo: "Cadastro de Pessoa Jurídica",
      },

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
      slug: "cadastro-pessoa-juridica",
      tituloMenu: "Cadastro de Pessoa Jurídica",
      tituloPagina: "Primeiros passos de como cadastrar uma pessoa jurídica",
      subtitulo:
        "Como cadastrar uma empresa, um fornecedor ou uma transportadora no sistema.",
      anterior: {
        slug: "cadastro-pessoa-fisica",
        titulo: "Cadastro de Pessoa Física",
      },
      proximo: {
        slug: "cadastro-produtos",
        titulo: "Cadastro de Produtos",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu principal, clique em 'Cadastros' e depois em 'Pessoa Física/Jurídica'.",
            "Na tela de pesquisa, clique no botão 'Novo (F2)' e selecione a opção 'Pessoa Jurídica'.",
            "Agora, preencha as informações da sua empresa ou fornecedor nos campos correspondentes.",
            "Os campos ideais pra se manter preenchidos são os seguintes:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "*Razão Social: ",
              explicacao: "Insira o nome completo da empresa ou fornecedor.",
            },
            {
              campo: "*Nome fantasia: ",
              explicacao: "Insira o nome fantasia da empresa ou fornecedor.",
            },
            {
              campo: "*Fone 1: ",
              explicacao: "Insira o número do celular com WhatsApp.",
            },
            {
              campo: "CNPJ: ",
              explicacao: "Insira o CNPJ da empresa ou fornecedor.",
            },
          ],
        },
        {
          tipo: "texto",
          conteudo:
            "Na aba '2. Endereço', também é recomendado, mas não obrigatório, preencher os seguintes campos:",
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "CEP: ",
              explicacao:
                "Insira o CEP do endereço da pessoa. (Esse campo preenche automaticamente o 'Endereço', o 'Bairro' e o 'Municipio')",
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
            "Lembre-se de que apenas os campos em amarelo são obrigatórios para o cadastro ser salvo no sistema.",
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Para concluir e finalizar o processo, clique no botão 'Gravar (F9)' localizado no topo da tela para salvar.",
          ],
        },
      ],
    },
    {
      slug: "cadastro-produtos",
      tituloMenu: "Cadastro de Produtos",
      tituloPagina: "Passo a passo para cadastrar um novo produto",
      subtitulo: "Defina a descrição, categorias e preços de venda e custo.",
      anterior: {
        slug: "cadastro-pessoa-juridica",
        titulo: "Cadastro Pessoa Juridica",
      },
      proximo: null,

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu principal, clique em 'Cadastros' e depois em 'Produtos, Serviços e Pacotes'.",
            "Na tela de pesquisa, clique no botão 'Novo (F2)' e, na lista, selecione a opção 'Produto'.",
            "Na tela de cadastro do produto, preencha os dados principais seguindo as orientações abaixo:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "*Descrição: ",
              explicacao: "Digite o nome completo do produto.",
            },
            {
              campo: "*Grupo, Subgrupo e Marca: ",
              explicacao:
                "Selecione as categorias correspondentes para organizar o produto conforme necessidade.",
            },
            {
              campo: "*Unidade: ",
              explicacao: "Defina como ele é vendido (geralmente 'UNIDADE').",
            },
            {
              campo: "*Valor de Venda: ",
              explicacao: "Informe o preço final para o cliente.",
            },
            {
              campo: "*Valor de Venda 2 (Valor Composição): ",
              explicacao:
                "Informe o preço de custo do produto (utilizado quando ele faz parte da composição de um serviço).",
            },
            {
              campo: "Qtde Doses: ",
              explicacao:
                "Informe o rendimento total do produto e a unidade de medida (ex: 1000 e 'ml' ou 'g').",
            },
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "Apenas os campos com * são obrigatórios para o cadastro ser salvo. Alguns deles já estarão zerados, como o campo 'Valor de venda' e 'Valor de Venda 2'. Não é necessário alterar esses campos caso você não utilize. ",
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Se necessário, você também pode configurar de forma opcional a 'Comissão' pela venda ou marcar se ele 'Possui Composição' (caso ele seja composto por outros produtos).",
            "Após preencher todas as informações, clique no botão 'Gravar (F9)' no canto superior esquerdo para salvar o novo produto.",
          ],
        },
      ],
    },
  ],
};
