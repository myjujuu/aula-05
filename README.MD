# 🎬 API - Cinema CineStar

## 📌 Sobre o Projeto

A CineStar é uma API de programação de cinema.
Ela fornece informações sobre o cinema, suas salas e os filmes disponíveis.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- Thunder Client

## 🔗 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| GET | / | Boas-vindas ao CineStar |
| GET | /sobre | Informações sobre salas 3D e IMAX |
| GET | /filmes | Lista de filmes |

## 🚀 Como Rodar e Testar

1. Abra o projeto do VS Code.
2. No terminal, execute:

```bash
# 1. Criar o package.json
npm init -y

# 2. Configura ES Modules
npm pkg set type="module"

# 3. Instala o Express
npm install express