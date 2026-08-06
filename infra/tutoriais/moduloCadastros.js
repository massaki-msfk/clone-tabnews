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
    {
      slug: "cadastro-servicos",
      tituloMenu: "Cadastro de Serviços",
      tituloPagina: "Passo a passo para cadastrar um novo serviço",
      subtitulo:
        "Defina o nome, preço, duração e comissão padrão dos seus serviços no sistema.",
      anterior: {
        slug: "cadastro-produtos",
        titulo: "Cadastro de Produtos",
      },
      proximo: {
        slug: "cadastro-pacotes-servico",
        titulo: "Cadastro de Pacotes",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu superior, clique em 'Cadastros' e depois em 'Produtos, Serviços e Pacotes'.",
            "Na tela de pesquisa, clique no botão 'Novo (F2)' e, na lista, selecione a opção 'Serviço'.",
            "Na aba '1. Informações Gerais', preencha os dados principais do serviço seguindo as orientações abaixo:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "*Descrição: ",
              explicacao: "O nome completo do serviço.",
            },
            {
              campo: "*Abreviado: ",
              explicacao:
                "Uma sigla de até 4 letras utilizada para identificação rápida na agenda.",
            },
            {
              campo: "*Grupo e Subgrupo: ",
              explicacao:
                "As categorias correspondentes para organizar o serviço.",
            },
            {
              campo: "*Duração (minutos): ",
              explicacao:
                "O tempo total estimado que o serviço leva para ser concluído.",
            },
            {
              campo: "*Valor de Venda (R$): ",
              explicacao:
                "O preço de venda que será cobrado do cliente final, separado por dias. Ao preencher um dia, o sistema dará um aviso para perguntar se deseja preencher os outros.",
            },
            {
              campo: "Comissão (%): ",
              explicacao:
                "O percentual de comissão padrão definido para os profissionais que executarem o serviço.",
            },
            {
              campo: "Comissão Fixa R$: ",
              explicacao:
                "O valor fixo de comissão definido para os profissionais que executarem o serviço.",
            },
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "Caso seja informada uma comissão fixa, ela terá prioridade sobre a percentual.",
        },
        {
          tipo: "alerta",
          conteudo:
            "Os campos em amarelo no sistema são obrigatórios para o cadastro ser salvo. Alguns deles já estarão zerados, como o campo 'Valor de venda 2'. Não é necessário alterar esse campo caso você não utilize.",
        },
        {
          tipo: "texto",
          conteudo:
            "Com todos os dados preenchidos, clique no botão 'Gravar (F9)' no canto superior esquerdo para salvar o novo serviço.",
        },
      ],
    },
    {
      slug: "cadastro-pacotes-servico",
      tituloMenu: "Cadastro de Pacotes de Serviço",
      tituloPagina: "Passo a passo para cadastrar um pacote de serviços",
      subtitulo:
        "Aprenda a criar um pacote, definir o preço e incluir as sessões de serviços.",
      anterior: {
        slug: "cadastro-servicos",
        titulo: "Cadastro de Serviços",
      },
      proximo: null,

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu principal, clique em 'Cadastros' e depois em 'Produtos, Serviços e Pacotes'.",
            "Na tela de pesquisa, clique no botão 'Novo (F2)' e selecione a opção 'Pacote de Serviços'.",
            "Na tela de cadastro, preencha as informações gerais do pacote seguindo as orientações abaixo:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "*Descrição: ",
              explicacao: "O nome do pacote (ex: Pacote 10 Manicures).",
            },
            {
              campo: "*Grupo e SubGrupo: ",
              explicacao:
                "As categorias correspondentes para organizar o pacote.",
            },
            {
              campo: "Valor: ",
              explicacao:
                "O preço total de venda do pacote é calculado automaticamente ao incluir os serviços.",
            },
            {
              campo: "Disponíveis na: ",
              explicacao:
                "Marque os dias da semana em que o pacote poderá ser utilizado pelo cliente.",
            },
            {
              campo: "Dias: ",
              explicacao:
                "Preencha o prazo de validade desse pacote, se vazio, o pacote não irá expirar.",
            },
          ],
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Na parte inferior da tela, clique no botão 'Incluir' para adicionar os serviços que compõem o pacote.",
            "Na janela que se abrir, informe:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "*Serviço: ",
              explicacao:
                "Selecione o serviço que será incluído no pacote. Ele precisa estar cadastrado.",
            },
            {
              campo: "*Qtde de Sessões: ",
              explicacao:
                "Informe a quantidade de sessões desse serviço que o cliente terá ao adquirir o pacote.",
            },
            {
              campo: "*Valor Unitário R$: ",
              explicacao:
                "Informe o valor unitário do serviço que o cliente terá direito ao adquirir o pacote.",
            },
            {
              campo: "Valor de Venda (R$): ",
              explicacao:
                "Aqui você pode informar se os valores mudam conforme o dia da semana. (Opcional)",
            },
          ],
        },

        {
          tipo: "paragrafos",
          paragrafos: [
            "Em seguida, clique no botão 'Gravar (F9)' daquela janela.",
            "Caso o pacote possua mais de um tipo de serviço, basta clicar em 'Gravar e Novo (F7)' e repetir o processo para cada um deles.",
            "Após adicionar todos os serviços correspondentes, clique no botão principal 'Gravar (F9)' no canto superior esquerdo para salvar o pacote.",
          ],
        },
      ],
    },
    {
      slug: "cadastro-usuarios-sistema",
      tituloMenu: "Cadastro de Usuários do Sistema",
      tituloPagina: "Passo a passo para cadastrar um usuário do sistema",
      subtitulo:
        "Crie um novo login, senha e defina o perfil de acesso para um colaborador",
      anterior: null,
      proximo: null,

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu principal, clique em 'Utilitários', vá na opção 'Segurança' e, em seguida, clique em 'Usuários do Sistema'.",
            "Na tela de pesquisa que se abrir, clique no botão 'Novo (F2)' para iniciar a criação do novo acesso.",
            "Agora, preencha as informações do novo usuário seguindo as orientações abaixo:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "Nome: ",
              explicacao: "O nome completo do colaborador.",
            },
            {
              campo: "Login: ",
              explicacao:
                "O nome de usuário (username) que será digitado para realizar o acesso.",
            },
            {
              campo: "Senha: ",
              explicacao: "Defina a senha inicial de acesso do usuário.",
            },
            {
              campo: "Confirmar Senha: ",
              explicacao:
                "Repita exatamente a mesma senha definida no campo anterior para validação.",
            },
            {
              campo: "Perfil do usuário: ",
              explicacao:
                "Clique na lupa e selecione o grupo de permissões correspondente às funções dele (ex: RECEPÇÃO, PROFISSIONAL).",
            },
            {
              campo: "Profissional: ",
              explicacao:
                "Caso esse usuário utilize o app Mobile, selecione o profissional vinculado a ele.",
            },
          ],
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Com todos os dados de acesso configurados corretamente, clique no botão 'Gravar (F9)' para salvar o novo usuário.",
          ],
        },
      ],
    },
  ],
};
