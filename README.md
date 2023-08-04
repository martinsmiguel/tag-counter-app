# Tag Counter App - Desafio de Contagem de Tags HTML

Este é um projeto React.js com TypeScript desenvolvido para resolver o desafio de contagem de tags HTML em páginas da web. O objetivo é criar um programa que identifique as tags HTML presentes em páginas carregadas a partir de URLs fornecidas, contabilizando a quantidade de cada tag em cada página e armazenando as informações em um banco de dados. A seguir, você encontrará informações sobre a estrutura do projeto, instruções de instalação, uso e tecnologias utilizadas.

## Estrutura do Projeto


```bash
/src
  /components
    TagCounter.tsx
  /styles
    App.css
    index.css
    TagCounter.css
  App.tsx
  index.tsx
```

### Componentes

#### `TagCounter.tsx`

Este é o componente principal do desafio. Ele apresenta um formulário onde você pode inserir a URL de uma página da web e obter a contagem de tags HTML presentes nessa página. Os resultados são exibidos em uma tabela com as tags encontradas e suas respectivas quantidades.

### Estilos

Os arquivos CSS nesta pasta (`App.css`, `index.css`, `TagCounter.css`) são responsáveis pela estilização do projeto.

## Instruções de Instalação

1. Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

2. Faça o clone deste repositório em uma pasta local:

```bash
git clone https://github.com/martinsmiguel/tag-counter-app.git
```

3. Navegue até a pasta do projeto:
```bash
cd tag-counter-app
```

4. Instale as dependências necessárias:
```bash
npm install
```
ou

```bash
yarn install
```

## Instruções de Uso

Execute o projeto localmente com o seguinte comando:

```bash
npm start
```
ou

```bash
yarn start
```
- Abra seu navegador e acesse a URL http://localhost:3000 para visualizar o aplicativo.

- No formulário apresentado, digite a URL de uma página da web que deseja analisar e clique no botão "Contar Tags".

- Aguarde o processamento e os resultados serão exibidos em uma tabela, mostrando as tags HTML encontradas na página e suas quantidades.

## Tecnologias Utilizadas

- React.js: Biblioteca JavaScript para a construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- Axios: Cliente HTTP para fazer solicitações a APIs e páginas da web.
- CSS: Linguagem de estilo utilizada para a formatação do layout.