This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

Syntax:
`yarn create next-app nextjs_basic`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About project

### Run fake API

```bash
yarn backend #custom script
#or
yarn json-server server.json -p 3333 -w
```

### Styled components

Por padrão o SSR não funciona para essa biblioteca, sendo necessário adicionar configurações adicionais.

Em um arquivo `babel.config.js`:

```js
module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]],
};
```

Instale: `yarn add babel-plugin-styled-components -D`

É necessário também adicionar algumas configurações do _styled-component_ no arquivo `_document.js || _document.tsx`

Mais informações na documentação do _styled-components_ e em no GitHub da Vercel:

[Docs about SSR](https://styled-components.com/docs/advanced#server-side-rendering)

[GitHub Vercel about styled-components](https://github.com/vercel/next.js/tree/master/examples/with-styled-components)

### Data consumption strategies

- Client Side Fetching: nessa abordagem o consumo da API ocorre após a renderização do componente.
  - Vantagem: TTFB (Time to first byte) menor, melhor para a experiência do usuário.
  - Desvantagem: os elementos construidos com base nos dados retornados da API não são considerados nos motores de busca
- Server Side Rendering: nessa abordagem o consumo da API ocorre na camada do servidor, antes de renderizar o conteúdo visual na tela.
  - Vantagem: uma das melhores escolha para motores de busca, pois exibe os elementos gerados pelas informações buscadas na API ja com seus elementos montados pelo servidor (a página não é construida pelo cliente com js, conforme é feito pelo Client Side Fetching).
  - Desvantagem: aumenta consideravelmente o TTFB, o que pode demorar para exibir os primeiros elementos na tela do usuário.
- Static Site Generation: dessa forma as informações buscadas são servidas de forma estática.
  - Vantagem: maior performance, pois ja constroi a página de forma estática e o cliente simplesmente o exibe (geração de página ocorre no build da aplicação e não na requisição do cliente).
  - Desvantagem: Se existirem muitas páginas que foram configuradas para serem exibidas de forma estática o build do projeto pode ficar extremamente pesado, o _fallback_ pode ser usado para auxiliar nesse problema.
