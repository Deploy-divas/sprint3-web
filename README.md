# JOVI — Sprint 4

O JOVI é uma aplicação web desenvolvida pelo grupo **Deploy Divas**, com o objetivo de facilitar a captura, organização e consulta de conteúdos de estudo.

A proposta é auxiliar estudantes a fotografar conteúdos apresentados em quadros, slides e anotações, transformar essas informações em textos organizados e facilitar a criação e o armazenamento de resumos.

> **Importante:** Nesta versão do projeto, o reconhecimento de texto e a geração de resumos são demonstrativos e utilizam conteúdos predefinidos no código. Ainda não existe integração com uma API real de inteligência artificial para processar imagens ou gerar resumos automaticamente.

## Tecnologias utilizadas

- **React 19:** desenvolvimento da interface e dos componentes.
- **JavaScript:** implementação da lógica e funcionalidades.
- **Vite:** ferramenta de desenvolvimento e compilação.
- **React Router DOM:** gerenciamento de rotas e navegação entre páginas.
- **Tailwind CSS 4:** estilização da interface.
- **CSS3:** estilização personalizada dos componentes.
- **MockAPI:** API externa utilizada para autenticação e armazenamento dos resumos.
- **HTML5:** estruturação da aplicação.
- **Git e GitHub:** versionamento e hospedagem do código-fonte.
- **Vercel:** hospedagem e publicação da aplicação.

## Pré-requisitos

Para executar o projeto, é necessário possuir:

- Node.js (versão 22 ou superior).
- npm (instalado junto com o Node.js).
- Navegador atualizado.
- Conexão com a internet para acessar a MockAPI.

Para verificar se o Node.js e o npm estão instalados:

```bash
node -v
npm -v
```

## Como instalar e executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Deploy-divas/sprint3-web.git
```

### 2. Acessar a pasta do projeto

```bash
cd sprint3-web
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
npm run dev
```

Após executar o comando, o Vite disponibilizará um endereço local, normalmente:

```text
http://localhost:5173
```

Acesse esse endereço pelo navegador para utilizar a aplicação.


## API e serviços externos

O projeto utiliza a **MockAPI** como serviço externo para realizar operações relacionadas aos usuários e aos resumos.

Os endpoints utilizados são:

**Usuários:**

```text
https://6aea5d1a3d3dd3d37be66834.mockapi.io/api/resumos-jovi/Users
```

**Resumos:**

```text
https://6aea5d1a3d3dd3d37be66834.mockapi.io/api/resumos-jovi/Resumos
```

A autenticação consulta os usuários cadastrados no endpoint `Users`, verificando o e-mail e a senha informados na tela de login.

Não existe funcionalidade de cadastro de usuários pela aplicação. O usuário que terá acesso ao sistema deve ser previamente cadastrado na MockAPI.

Os resumos são enviados para o endpoint `Resumos` por meio de requisições HTTP POST e recuperados por meio de requisições GET.

## Autenticação e usuários para teste

O JOVI possui uma tela de login e um sistema de proteção de rotas.

As páginas internas somente podem ser acessadas após a autenticação. Caso um usuário não autenticado tente acessar diretamente uma rota privada, será redirecionado para a tela de login.

Após a autenticação, os dados básicos do usuário são armazenados no `localStorage` do navegador, permitindo manter a sessão durante a navegação.

**Dados de acesso para teste:**

- E-mail: `email@teste`
- Senha: `123`


## Utilização da Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o planejamento e desenvolvimento do projeto JOVI. Seu uso teve como objetivo auxiliar na organização das ideias da equipe, esclarecer dúvidas, revisar os requisitos propostos para o projeto e verificar se as funcionalidades desenvolvidas estavam de acordo com o que foi solicitado. Também foi utilizada como apoio para identificar possíveis melhorias, organizar as etapas de desenvolvimento, e para consolidar este reademe. 

## Postagem

**Link da aplicação na Vercel:**

https://sprint3-web-w78e.vercel.app/


**Link do repositório no github:**

https://github.com/Deploy-divas/sprint3-web


## Equipe

**Deploy Divas**