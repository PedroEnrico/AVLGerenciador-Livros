# Gerenciador de Livros

Sistema de gerenciamento de livros desenvolvido com .NET 6 (Backend) e React (Frontend).

## 🚀 Tecnologias Utilizadas

### Backend
- .NET 6
- Entity Framework Core
- InMemoryDatabase
- Swagger
- AutoMapper

### Frontend
- Angular

## 📋 Pré-requisitos

- .NET 6 SDK
- Node.js (versão 14 ou superior)
- Visual Studio 2022 ou VS Code
- npm ou yarn

## ⚙️ Configuração e Execução

### Backend (APIGerenciador_Livros)

1. Clone o repositório
```bash
git clone https://github.com/PedroEnrico/AVLGerenciador-Livros
```

2. Navegue até a pasta do backend
```bash
cd APIGerenciador_Livros
```

3. Restaure as dependências
```bash
dotnet restore
```

4. Execute o projeto
```bash
dotnet run
```

O backend estará rodando em `https://localhost:7000` (ou a porta configurada)

### Frontend (FRONTGerenciador_Livros)

1. Navegue até a pasta do frontend
```bash
cd FRONTGerenciador_Livros
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```
3. Execute o projeto
```bash
npm start
# ou
yarn start
```

O frontend estará rodando em `http://localhost:4200`

## 🌐 Endpoints da API

A documentação completa da API pode ser acessada através do Swagger UI em:
```
https://localhost:7000/swagger
```

## 📦 Funcionalidades

- Cadastro de livros
- Listagem de livros
- Atualização de informações
- Exclusão de livros

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
