#  XP Investimentos

## Sobre o Projeto
Este é um projeto desenvolvido atrávez de um teste técnico disponibilizado pela XP Investimentos, onde foi solicitado o desenvolvimento de uma aplicação de investimentos em ações e funcionalidades de conta digital. O objetivo é demonstrar habilidades em next e desenvolvimento frontend quanto também em backend, entregando uma aplicação funcional com foco em experiência do usuário e usabilidade, além de ir além dos requisitos mínimos para oferecer um diferencial criativo.

## Tecnologias Utilizadas
- **Frontend**: Next
- **Backend**: Node
- **Ferramentas e Bibliotecas**: 
  - ZOD
  - Sonner
  - Shadcnui
  - Tailwind

## Funcionalidades
### Funcionalidades Principais
- **Tela de Login**: permite o acesso seguro à aplicação com validações de e-mail e senha.
- **Tela de Depósito e Saque**: possibilita operações básicas de movimentação na conta digital.
- **Tela de Listagem de Ações**: exibe todas as ações disponíveis e diferencia ações na carteira das não investidas.
- **Tela de Compra e Venda de Ações**: permite realizar operações de compra e venda de ativos.

### Funcionalidades Adicionais
- **Salvamento de Usuário Local**: armazena o último usuário logado e exibe data e hora do último acesso na tela de login.
- **Tratamento de Erros**: captura e exibe mensagens de erro amigáveis ao usuário.
- **Testes Unitários**: verificação de funcionalidades críticas da aplicação.
- **Deploy**: aplicação disponível online para acesso.

## API Endpoints
### Requisições para Investimentos
- **Compra de Ações**: `POST /investimentos/comprar`
  - Campos: `codCliente`, `codAtivo`, `qtdeAtivo`
  - Validação: Quantidade de ativo comprada deve ser <= quantidade disponível.
  
- **Venda de Ações**: `POST /investimentos/vender`
  - Campos: `codCliente`, `codAtivo`, `qtdeAtivo`
  - Validação: Quantidade de ativo vendida deve ser <= quantidade na carteira.

- **Consulta por Cliente**: `GET /ativos/{cod-cliente}`
  - Campos: `codCliente`, `codAtivo`, `qtdeAtivo`, `valor`

- **Consulta por Ativo**: `GET /ativos/{cod-ativo}`
  - Campos: `codAtivo`, `qtdeAtivo`, `valor`

### Requisições para Conta Digital
- **Depósito**: `POST /conta/deposito`
  - Campos: `codCliente`, `valor`
  - Validação: Valor deve ser positivo e > 0.

- **Saque**: `POST /conta/saque`
  - Campos: `codCliente`, `valor`
  - Validação: Valor deve ser <= saldo disponível e > 0.

