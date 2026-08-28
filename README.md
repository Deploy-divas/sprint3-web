# Challenge JOVI — Sprint 3

Aplicação web desenvolvida pelo grupo **Deploy Divas**. O projeto consiste em um protótipo de aplicativo que utiliza o conceito de **IA para reconhecimento e geração de resumos de conteúdos estudantis**.

A aplicação simula o fluxo de captura de uma imagem de um conteúdo, reconhecimento do texto, possibilidade de edição do texto identificado e geração de um resumo. Em seguida, tudo é organizado por matéria.

## Tecnologias utilizadas

* **React 19** — desenvolvimento da interface da aplicação;
* **JavaScript** — implementação da lógica e dos componentes;
* **Vite** — ferramenta utilizada para desenvolvimento e execução do projeto;
* **React Router DOM** — gerenciamento da navegação entre as páginas;
* **HTML5** — estruturação dos elementos da aplicação;
* **CSS3** — estilização e responsividade das telas;
* **Git e GitHub** — versionamento e armazenamento do projeto.


*OBS: Antes de executar o projeto, é necessário ter o **Node.js 22** ou superior instalado na máquina.*

Para verificar se o Node.js e o npm estão instalados:

```bash
node -v
npm -v
```
---

A aplicação utiliza componentes(pasta components) reutilizáveis, como `Celular`, `ResumoCard` e `MateriaCard`, enquanto as páginas(pasta pages) representam as principais etapas do fluxo da aplicação. Nela também é utilizado local storage para armazenar os resumos criados e math para calcular o tempo de leitura de cada um.


## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Deploy-divas/sprint3-web.git
```

### 2. Acesse a pasta do projeto

```bash
cd sprint3-web
```

### 3. Instale as dependências

```bash
npm install
```


## ▶️ Como executar o projeto

Após instalar as dependências, execute:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e exibirá no terminal o endereço local para acessar a aplicação, normalmente:

```text
http://localhost:5173
```

Abra o endereço informado pelo Vite em um navegador.


## Uso de Inteligência Artificial

 Ferramentas de IA foram utilizadas como apoio durante o desenvolvimento para auxiliar na resolução de dúvidas de programação, estruturação de componentes, estilização e correção de problemas no código. Em destaque, podemos colocar:
 
 * Auxiliou na **organização das pastas e arquivos**, contribuindo para estruturar melhor a aplicação. 
 * Utilizada para **aprender sobre o React Router DOM**, uma dependência responsável pela navegação entre páginas da aplicação.
 * Utilizada para buscar **ideias de como usar a função "math" no projeto**.
 * E por fim, fez algumas correções neste readme.


## 👩‍💻 Equipe

**Deploy Divas**
