# API AUTHENTICATION LOGIN

Como o próprio nome já diz, essa é uma api de autenticação !

## Tutorial

* Primeiro comando:
```
git clone https://github.com/JoaoFelixx/api-authentication-login.git
```

* Segundo comando: 
```
yarn install / npm install
```

* Terceiro comando: 
```
yarn start / npm start (node) 
yarn dev / npm dev (nodemon)
```

## Conteúdo 

Aqui neste projeto, aborda um sistema que cria usuários, ao usuário ser criado, ele pode enviar seus dados (e-mail e senha) para uma rota de autenticação ! tal rota devolve ID, e-mail, e token (válido por 1 dia). Somente com o token (JWT) que for passado no `Header` das requisições pode ter acesso a rota ***/user'*** que ao token ser invalido ou nulo retorna `status(401) Unauthorized` o que impossibilita a rota de ser usada.

## Banco de dados

Ao usar o projeto, lembre-se que existe uma pasta chamada ***database*** e nela tem um arquivo que cria uma tabela no banco MySql, eu escolhi esse banco de dados por preferência própria, mas se quiser usar um bando diferente como: MongoDB, PostgreSql, SqlLite, etc. Crie as configurações como: `host, port e database` na pasta ***config*** e crie a conexão na pasta ***connection*** para manter o código limpo e finalize criando o arquivo que faz as queries na pasta ***repository***. Fazendo isso passe o novo repository para a pasta service e pronto. 

## Sistema de rotas

## Sistema de rotas
HTTP | ROUTE | BODY | HEADER | DESCRIÇÃO |
| --- | ------ | ------ | ------ |-----------
| GET | /users | | Authorization: Bearer (token) | Rota retorna `status(200)` se token for válido.
| POST | /users | JSON (email (string), password (string) | | Rota para criar usuários.
| POST | /auth | JSON (email (string), password (string) | | Rota que gera token de usuário já cadastrado.

## Relatório de Status 

* 200 - OK (tudo certo)
* 201 - Created (algo foi criado, token ou usuário)
* 204 - No content (e-mail não cadastrado)
* 400 - Bad request (dados enviados são inválidos)
* 401 - Unauthorized (token é invalido ou nulo)
* 404 - Page not a found (Rota não existe)
* 409 - Conflict (Erro ao criar ou e-mail já cadastrado)
* 500 - Internal server error (provavelmente não aparecerá, mas se aparecer crie uma issue e me diga oque houve para que eu possa ajudar)