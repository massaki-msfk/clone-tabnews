export const moduloAtendimento = {
  id: "atendimento",
  nomeModulo: "Módulo Atendimento",
  tutoriais: [
    {
      slug: "novo-agendamento",
      tituloMenu: "Novo Agendamento",
      tituloPagina: "Passo a passo para realizar um novo agendamento",
      subtitulo:
        "Aprenda a marcar horários, gerenciar o status do atendimento e abrir a comanda do cliente",
      anterior: null,
      proximo: {
        slug: "abertura-fechamento-comanda",
        titulo: "Abertura e Fechamento de Comanda",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "Para acessar a grade de horários, clique em 'Agenda' no menu lateral esquerdo ou acesse o menu superior em 'Atendimento' > 'Agenda de Horários'.",
            "Localize o profissional e dê um duplo clique no horário desejado (ou clique com o botão direito sobre o horário e selecione a opção 'Marcar Horário').",
            "Na janela de agendamento que se abrir, preencha os dados principais do atendimento:",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "Cliente: ",
              explicacao:
                "Busque e selecione o cliente que receberá o atendimento.",
            },
            {
              campo: "Serviço: ",
              explicacao:
                "Selecione o serviço desejado. Os campos de duração e valor serão preenchidos de forma automática com base no cadastro do serviço, mas você pode alterá-los manualmente se precisar.",
            },
          ],
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Após conferir as informações, clique no botão 'Gravar (F9)' para salvar e fixar o horário na agenda.",
            "Quando o cliente chegar ao estabelecimento, clique com o botão direito do mouse sobre o bloco do agendamento na grade e altere o seu status (por exemplo, para 'Em Espera' ou 'Em Andamento').",
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "Assim que você alterar o status do agendamento, o sistema exibirá uma mensagem perguntando se deseja abrir a comanda. Clique em 'Sim' para que a comanda seja criada automaticamente com o serviço já lançado. Se o cliente já tiver uma comanda em aberto, o serviço será incluido nessa comanda.",
        },
      ],
    },
    {
      slug: "abertura-fechamento-comanda",
      tituloMenu: "Abertura e Fechamento de Comanda",
      tituloPagina: "Passo a passo para abrir e fechar uma comanda manualmente",
      subtitulo:
        "Aprenda a iniciar uma comanda, lançar itens, processar pagamentos e encerrar a venda",
      anterior: {
        slug: "abertura-fechamento-comanda",
        titulo: "Abertura e Fechamento de Comanda",
      },
      proximo: {
        slug: "alt-prof-comanda-finalizada",
        titulo: "Alteração de Profissional (Comanda Finalizada)",
      },

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu lateral, clique em 'Comanda' e, em seguida, no botão '(F2) ABRIR COMANDA'.",
            "Na janela 'Informações da Comanda' que se abrir, clique na lupa ao lado do campo 'Cliente' para pesquisar e selecionar o cliente.",
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "Caso o cliente prefira não se identificar no momento, você pode utilizar o cadastro padrão 'CONSUMIDOR FINAL'.",
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Após definir o cliente, clique em 'Gravar (F9)' para acessar a tela de lançamento de itens.",
            "Nessa nova tela, selecione o 'Serviço' ou 'Produto', preencha a 'Qtd' (quantidade), indique o 'Profissional' correspondente e clique no botão 'Incluir' para fixar o item na comanda.",
            "Com todos os itens devidamente lançados, clique no botão '(F6) RECEBER' para abrir a tela de fechamento.",
            "Na tela de 'Forma de Pagamento', escolha o método desejado (Dinheiro, Cartão, etc.), insira o valor pago e clique em 'Incluir'.",
          ],
        },
        {
          tipo: "alerta",
          conteudo:
            "O sistema permite o recebimento com múltiplas formas de pagamento. Caso o cliente queira dividir a conta, basta selecionar a primeira forma, incluir o valor pago por ela e depois repetir o processo com o restante utilizando outro método.",
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Assim que o valor total da comanda for totalmente atingido pelas formas de pagamento incluídas, clique em 'Fechar Comanda (F9)' e confirme clicando em 'Sim' para finalizar a venda com sucesso.",
          ],
        },
      ],
    },
    {
      slug: "alt-prof-comanda-finalizada",
      tituloMenu: "Alteração de Profissional (Comanda Finalizada)",
      tituloPagina:
        "Passo a passo para alterar o profissional de uma comanda finalizada",
      subtitulo:
        "Corrija o profissional responsável por um serviço ou produto em vendas que já foram encerradas",
      anterior: {
        slug: "abertura-fechamento-comanda",
        titulo: "Abertura e Fechamento de Comanda",
      },
      proximo: null,

      passos: [
        {
          tipo: "paragrafos",
          paragrafos: [
            "No menu principal, acesse 'Atendimento' e clique em 'Comandas Finalizadas'.",
            "Utilize os filtros de busca (como o intervalo de datas) para localizar a venda, clique no botão azul para aplicar o filtro e clique sobre a comanda desejada.",
            "Com a comanda selecionada, vá até a seção 'ITENS DA COMANDA' localizada na parte inferior da tela.",
            "Clique no botão 'Alterar Profissional do Serviço/Produto' para abrir a janela de correção.",
          ],
        },
        {
          tipo: "lista",
          itens: [
            {
              campo: "Selecione o Profissional correto: ",
              explicacao:
                "Escolha na lista o nome do novo profissional que deve receber o lançamento.",
            },
            {
              campo: "Informe o Motivo: ",
              explicacao:
                "Caso queira, preencha justificando a alteração (campo opcional).",
            },
          ],
        },
        {
          tipo: "paragrafos",
          paragrafos: [
            "Para concluir e salvar a alteração, clique no botão 'Gravar (F9)'.",
          ],
        },
      ],
    },
  ],
};
