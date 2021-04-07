# Para testar o Backend

> Precisa ter o Node.js instalado
> 
> Precisa ter o MySql instalado 
> 
> Precisa ter as tabelas do Schema "projetoweb" prontas

1. Depois de fazer o clone/pull do repositório, abra o terminal dentro da pasta "backend"
2. Atualize os pacotes do node_modules
`$ npm install`
3. Suba o backend:
`$ npm start`

# Requisições
## Usuario
### GET - Listar
> URL: https://localhost:3000/usuarios

Listar todos os usuários

* AUTHORIZATION
  
* HEADERS
  | - | - |
  |---|---|
* BODY
  ```
  [NO BODY]
  ```
* RESPONSE
  ```
  [
    {
      "id": 1,
      "tipo": 2,
      "nome": "Admin",
      "email": "admin@admin",
      "telefone": "123465789"
    },
    {
      "id": 2,
      "tipo": 1,
      "nome": "Eveline",
      "email": "eveline@eveline",
      "telefone": "999888777"
    },
    ...
  ]
  ```
### POST - porID
> URL: https://localhost:3000/usuario

Buscar usuário por ID

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 4
  }
  ```
* RESPONSE
  ```
  {
    "id": 4,
    "tipo": 1,
    "nome": "Nicolas",
    "email": "nicolas@nicolas.nic",
    "telefone": "666123456"
  }
  ```
### POST - Adicionar
> URL: https://localhost:3000/cadastro

Cadastrar um novo usuário (O é enviado um e-mail para este usuário para confirmar sua conta)

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
      "tipo": 1,
      "nome": "Mariana5",
      "email": "13biagg@gmail.com",
      "telefone": "81987765246",
      "senha": "marimari" 
  }
  ```
* RESPONSE
  ```
  {
    "id": 24,
    "tipo": 0,
    "nome": "Mariana5",
    "email": "13biagg@gmail.com",
    "telefone": "81987765246"
  }
  ```
### PUT - Editar
> URL: https://localhost:3000/usuario

Edita informações do usuário
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 24,
    [ Passar quais propriedades quer editar: "tipo", "nome", "email", "telefone", "senha"]
  }
  ```
* RESPONSE
  ```
  {
    "id": 8,
    "tipo": 1,
    "nome": "Fernanda",
    "email": "fernada2@mail.com",
    "telefone": "203651"
  }
  ```
### DEL - Remover
> URL: https://localhost:3000/usuario

Remove um usuário
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 7
  }
  ```
* RESPONSE
  ```
  {
    "Mensagem": "Usuário de id: 7, deletado"
  }
  ```

## Autenticação

### POST - Login
> URL: https://localhost:3000/login

Fazer login

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "email": "bia@bia.bi",
    "senha": "biaaib"
  }
  ```
* RESPONSE
  ```
  {
    "usuario": {
      "id": 3,
      "tipo": 1,
      "nome": "Bia",
      "email": "bia@bia.bia",
      "telefone": "987456123"
    },
    "token": "eyJ...."
  }
  ```

## UsuarioProcedimento

### GET - Listar
> URL: https://localhost:3000/procedimento

Listar todos os procedimentos

* AUTHORIZATION
  
* HEADERS
  | - | - |
  |---|---|
* BODY
  ```
  [NO BODY]
  ```
* RESPONSE
  ```
  [
    {
      "id": 1,
      "duracao": 1,
      "nome": "LIVRE"
    },
    {
      "id": 2,
      "duracao": 1,
      "nome": "Pigmentação"
    },
    ...
  ]
  ```
### POST - porID
> URL: https://localhost:3000/procedimento

Buscar procedimento por ID

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 4
  }
  ```
* RESPONSE
  ```
  {
    "id": 5,
    "duracao": 1,
    "nome": "Fazer x"
  }
  ```
### POST - Procedidomento por UserID
> URL: https://localhost:3000/procedimentos-marcados

Buscar procedimento pelo id de um usuário.

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 3
  }
  ```
* RESPONSE
  ```
[
  {
    "id": 3,
    "hora": 14,
    "dia": "2021-01-01",
    "usuario_id": 3,
    "procedimento_id": 2,
    "usuario": {
      "id": 3,
      ....
    },
    "procedimento": {
      "id": 2,
      ...
    }
  },
  {
    ...
  }
]
  ```
### POST - Adicionar
> URL: https://localhost:3000/cadastrar-procedimento

Cadastrar um novo procedimento

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "duracao": 1,
    "nome": "Fazer x"
  }
  ```
* RESPONSE
  ```
  {
    "id": 5,
    "duracao": 1,
    "nome": "Fazer x"
  }
  ```
### PUT - Editar
> URL: https://localhost:3000/procedimento

Edita informações do usuário
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 5,
    "duracao": 2,
    "nome": "Fazer y"
  }
  ```
* RESPONSE
  ```
  {
    "id": 5,
    "duracao": 2,
    "nome": "Fazer y"
  }
  ```
### DEL - Remover
> URL: https://localhost:3000/usuario

Remove um usuário
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 7
  }
  ```
* RESPONSE
  ```
  {
    "Mensagem": "procedimento de id: 7, deletado"
  }
  ```

## Procedimento

### GET - Listar
> URL: https://localhost:3000/usuarioprocedimentos

Listar todos os usuariosprocedimentos

* AUTHORIZATION
  
* HEADERS
  | - | - |
  |---|---|
* BODY
  ```
  [NO BODY]
  ```
* RESPONSE
  ```
  [
    {
      "id": 1,
      "hora": 8,
      "dia": "2021-01-01",
      "usuario_id": 4,
      "procedimento_id": 3
    },
    {
      "id": 2,
      "hora": 10,
      "dia": "2021-01-01",
      "usuario_id": 2,
      "procedimento_id": 2
    },
    ...
  ]
  ```
### GET - Livres
> URL: https://localhost:3000/procedimentos-livres

Listar todos os usuariosprocedimentos livres

* AUTHORIZATION
  
* HEADERS
  | - | - |
  |---|---|
* BODY
  ```
  [NO BODY]
  ```
* RESPONSE
  ```
  [
    {
      "id": 4,
      "hora": 15,
      "dia": "2021-01-01",
      "usuario_id": 1,
      "procedimento_id": 1
    },
    {
      "id": 5,
      "hora": 16,
      "dia": "2021-01-01",
      "usuario_id": 1,
      "procedimento_id": 1
    },
    ...
  ]
  ```
### GET - Marcados
> URL: https://localhost:3000/procedimentos-marcados

Listar todos os usuariosprocedimentos marcados

* AUTHORIZATION
  
* HEADERS
  | - | - |
  |---|---|
* BODY
  ```
  [NO BODY]
  ```
* RESPONSE
  ```
  [
    {
      "id": 2,
      "hora": 10,
      "dia": "2021-01-01",
      "usuario_id": 2,
      "procedimento_id": 2,
      "usuario": {
        "id": 2,
        "tipo": 1,
        "nome": "Eveline",
        "email": "eveline@eveline",
        "telefone": "999888777",
        "senha": "eveline123"
      },
      "procedimento": {
        "id": 2,
        "duracao": 1,
        "nome": "Pigmentação"
      }
    },
    ...
  ]
  ```
### POST - porID
> URL: https://localhost:3000/usuarioprocedimentos

Buscar procedimentousuário por ID

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 4
  }
  ```
* RESPONSE
  ```
  {
    "id": 21,
    "hora": 11,
    "dia": "2021-04-04",
    "usuario": {
      "id": 3,
      "tipo": 1,
      "nome": "Bia",
      "email": "bia@bia.bia",
      "telefone": "987456123",
      "senha": "biaaib"
    },
    "procedimento": {
      "id": 2,
      "duracao": 1,
      "nome": "Pigmentação"
    }
  }
  ```
### POST - Adicionar
> URL: https://localhost:3000/cadastrar-horarios

Cadastrar um ou mais usuariosprocedimentos livres

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  [
    {
      "hora": 8,
      "dia": "2021-04-01"
    },
    {
      "hora": 9,
      "dia": "2021-04-02"
    }
  ]
  ```
* RESPONSE
  ```
  [
    {
      "id": 18,
      "hora": 8,
      "dia": "2021-04-01T00:00:00.000Z",
      "usuario_id": 1,
      "procedimento_id": 1
    },
    {
      "id": 19,
      "hora": 9,
      "dia": "2021-04-02T00:00:00.000Z",
      "usuario_id": 1,
      "procedimento_id": 1
    }
  ]
  ```
### POST - marcar
> URL: https://localhost:3000/marcar-horario

Marcar um procedimento

* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 21,
    "usuario": 3,
    "procedimento": 2
  }
  ```
* RESPONSE
  ```
   {
      "id": 21,
      "hora": 11,
      "dia": "2021-04-04",
      "usuario_id": 3,
      "procedimento_id": 2
    }
  ```
### PUT - Editar
> URL: https://localhost:3000/usuarioprocedimentos

Edita informações de um usuário procedimento
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
      "id": 1,
     "dia": "2021-01-02"
  }
  ```
* RESPONSE
  ```
  {
    "id": 1,
    "hora": 7,
    "dia": "2021-01-02T00:00:00.000Z",
    "usuario_id": 4,
    "procedimento_id": 3
  }
  ```
### DEL - Remover
> URL: https://localhost:3000/usuario

Remove um usuarioprocedimento
* AUTHORIZATION
  
* HEADERS
  | Content-Type | application/json |
  |--------------|------------------|
* BODY
  ```
  {
    "id": 7
  }
  ```
* RESPONSE
  ```
  {
    "Mensagem": "usuarioprocedimento de id: 7, deletado"
  }
  ```


