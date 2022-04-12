# Projeto Trybesmith
CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.

## Linguagens
<div style="display: inline_block">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&logoWidth=20"/>
  <img src="https://img.shields.io/badge/dockerfile-2496ED?style=for-the-badge&logo=docker&logoColor=fff&logoWidth=20"/>
  <img src="https://img.shields.io/badge/shell-4EAA25?style=for-the-badge&logo=gnubash&logoColor=fff&logoWidth=20"/>
</div>

## Autores
- **Thomas Ferreira** (76%, 22 commits)
- **trybe-tech-ops** (17%, 5 commits)
- **rafaelmaltez** (7%, 2 commits)

## Habilidades
- Declarar variáveis e funções com tipagens;
- Construir uma API Node Express.

## Rodando o projeto

### Atenção!
Esse projeto utiliza variáveis de ambiente no formato de arquivo. Renomeie `.env.example` para `.env` e altere os valores se preferir!

### Via docker + node:
```sh
npm run compose:up
```

### Via docker:
```sh
sudo sh ./scripts/compose-up.sh
```
## Exemplo de uso

### Endpoint para o cadastro de pessoas usuárias

**POST** | http://localhost:3001/users

body:
```json
{
  "username": "Jopari",
  "classe": "Explorer",
  "level": 4,
  "password": "SayanKotor"
}
```
response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6IkpvcGFyaSJ9LCJpYXQiOjE2NDk3MzQxNzZ9.Vtgl6hUwrHI0nx2KkoR944l3vfDKpCD6nRORi5aiGa0"
}
```

### Endpoint para o login de pessoas usuárias

**POST** | http://localhost:3001/login

body:
```json
{
  "username": "Jopari",
  "password": "SayanKotor"
}
```
response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6IkpvcGFyaSJ9LCJpYXQiOjE2NDk3MzQ2MTV9.K6bby8N3UwfOFg8trD7QMcmdAC3P2mX2N9ThqxTW-bo"
}
```

### Endpoint para o cadastro de produtos

**POST** | http://localhost:3001/products

body:
```json
  {
    "name": "Subtle Knife",
    "amount": "2000 gold pieces "
  }
```

headers:
```
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6IkpvcGFyaSJ9LCJpYXQiOjE2NDk3MzQ2MTV9.K6bby8N3UwfOFg8trD7QMcmdAC3P2mX2N9ThqxTW-bo
```

response:

```json
{
  "item": {
    "id": 1,
    "name": "Subtle Knife",
    "amount": "2000 gold pieces "
  }
}
```

### Endpoint para a listagem de produtos

**GET** | http://localhost:3001/products

headers:
```
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6IkpvcGFyaSJ9LCJpYXQiOjE2NDk3MzQ2MTV9.K6bby8N3UwfOFg8trD7QMcmdAC3P2mX2N9ThqxTW-bo
```

response:

```json
[
  {
    "id": 1,
    "name": "Subtle Knife",
    "amount": "2000 gold pieces "
  },
  {
    "id": 2,
    "name": "Alethiometer",
    "amount": "3010 gold pieces "
  },
  {
    "id": 3,
    "name": "Amber Spyglass",
    "amount": "1200 gold pieces "
  }
]
```
