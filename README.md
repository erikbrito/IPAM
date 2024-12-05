# IPAM TESTE

## Visão Geral

Este é um teste feito em React Native/Expo. O objetivo do teste é criar um aplicativo para gerenciar uma lista de itens, permitindo ao usuário adicionar, visualizar e remover itens. O estado do aplicativo é gerenciado utilizando Redux, e os dados são persistidos utilizando AsyncStorage.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
IPAM/
├── __tests__/
│   └── HomeScreen.test.js
├── assets/
├── src/
│   ├── components/
│   │   ├── TextInput.js
│   │   ├── Button.js
│   │   └── FlatList.js
│   ├── redux/
│   │   ├── Actions.js
│   │   ├── Reducers.js
│   │   └── Store.js
│   ├── screens/
│   │   └── HomeScreen.js
│   ├── App.js
├── app.json
├── index.js
├── package-lock.json
├── package.json
└── setupTests.js
```

## Funcionalidades

- **Adicionar Itens**: Os usuários podem adicionar novos itens à lista.
- **Visualizar Itens**: Todos os itens adicionados são exibidos em uma lista.
- **Remover Itens**: Os usuários podem remover itens da lista.
- **Persistência de Dados**: Os dados são salvos localmente usando AsyncStorage para manter a lista entre reinicializações do aplicativo.

## Passos para Rodar o Projeto

### Pré-requisitos

- Node.js
- Expo CLI

### Passos para Instalação

1. **Clone o Repositório**

```
git clone https://github.com/erikbrito/IPAM
cd IPAM
```

2. **Instale as Dependências**

```
npm install
```

3. **Instale o Expo CLI globalmente (se ainda não estiver instalado)**

```
npm install -g expo-cli
```

4. **Inicie o Aplicativo**

```
npx expo start
```

## Testes

Para rodar os testes, utilize o comando:

```
npm run test
```

Os testes utilizam o Jest e React Testing Library para garantir a funcionalidade dos componentes do aplicativo.

## Explicação sobre as Decisões de Organização do Código

### Estrutura de Diretórios

A estrutura de diretórios é projetada para ser clara e modular, facilitando a manutenção e a escalabilidade do projeto.

#### `src/`

- **`App.js`**: O ponto de entrada do aplicativo.
- **`components/`**: Pasta dos componentes reutilizáveis e independentes.
- **`screens/`**: Pasta das telas do aplicativo.

### Redux

- **`actions.js`**: As ações que podem ser disparadas no aplicativo.
- **`reducers.js`**: Os reducers que respondem às ações.

### Test

- **`setupTests.js`**: Arquivo para exportar o mock do `react-native-async-storage` para ser possivel executar os testes.
- **`__tests__/`**: Pasta de testes.
