# Catálogo de Filmes

Este projeto é uma aplicação de catálogo de filmes construída com NestJS, Docker, TypeORM, TypeScript, Swagger, Zod e PostgreSQL.

## Tecnologias Utilizadas

- **NestJS**: Um framework para construir aplicações de servidor eficientes, confiáveis e escaláveis em Node.js.
- **Docker**: Uma plataforma aberta para desenvolver, enviar e executar aplicações.
- **TypeORM**: Um ORM que pode ser executado em plataformas NodeJS e pode ser usado com TypeScript e JavaScript.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática e recursos orientados a objetos.
- **Swagger**: Uma estrutura de software para projetar, construir, documentar e usar serviços da Web RESTful.
- **Zod**: Uma biblioteca de validação de dados de baixo nível para TypeScript.
- **PostgreSQL**: Um poderoso sistema de banco de dados relacional de código aberto.
- **Postman**: Uma plataforma popular para testar APIs.

## Como Executar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/EricDaCruz/mks-backend-challenge-resolved.git

```

2. **Installation**

```bash
$ cd mks-backend-challenge-resolved

$ npm install
```

## Running Docker

```bash
$ docker compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


```

Agora, a aplicação deve estar rodando em `http://localhost:3000`.

## Documentação da API

A documentação da API está disponível em `http://localhost:3000/api`.

## Referências

Esta seção é dedicada às referências que foram utilizadas para desenvolver esta aplicação. Aqui estão alguns vídeos e documentações que foram úteis:

### Vídeos

- [Desenvolvimento de APIs com Nest.js: Do zero aos testes automatizados](https://www.youtube.com/watch?v=yggaGQnsnxo&t=3568s)
- [NestJS - Documentação automática com Swagger](https://www.youtube.com/watch?v=fshX_252HbU)
- [Criando um Projeto do Zero com Nest, TypeORM e Postgres](https://www.youtube.com/watch?v=JlTdfXlIuEc)

### Documentações

- [NestJS Documentation](https://docs.nestjs.com/)
- [Docker Documentation](https://docs.docker.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Zod Documentation](https://zod.dev/)


## Overview

Desenvolver este projeto de catálogo de filmes foi uma jornada de aprendizado incrivelmente enriquecedora para mim. Embora eu já tivesse conhecimento acadêmico sobre Docker, Zod, TypeORM e Swagger, nunca havia trabalhado com NestJS antes. Portanto, este projeto representou um desafio interessante e uma oportunidade de expandir meus horizontes.

A maior parte do meu tempo foi gasta lendo e compreendendo a documentação do NestJS. Foi um processo meticuloso, mas necessário, para desenvolver a aplicação. A cada passo, eu me encontrava descobrindo novos aspectos e recursos do NestJS que eu não conhecia antes.

Este projeto me permitiu aplicar e expandir meus conhecimentos existentes, ao mesmo tempo em que me apresentou a novos conceitos e ferramentas. Foi uma experiência de aprendizado muito interessante e estou ansioso para aplicar o que aprendi em futuros projetos.

Em resumo, este projeto foi um desafio gratificante que me permitiu crescer como desenvolvedor e expandir meu conjunto de habilidades.


## Problemas 

### Solutions to validate the body update request

No NestJS, quando você usa o decorador @UsePipes() em um método de manipulador de rota, o pipe é aplicado a cada parâmetro do manipulador que é decorado com um decorador de parâmetro (@Body(), @Param(), etc.).

No seu caso, parece que o ZodValidationPipe está sendo aplicado tanto ao parâmetro id (que é uma string) quanto ao updateMovieDto (que é um objeto). Isso explicaria o erro "Expected object, received string".

Uma solução possível seria aplicar o ZodValidationPipe apenas ao parâmetro updateMovieDto. Você pode fazer isso usando o decorador @Body() assim:

```typescript
@Put(':id')
update(
  @Param('id', new ParseUUIDPipe()) id: string,
  @Body(new ZodValidationPipe(updateMovieSchema)) updateMovieDto: UpdateMovieDto,
) {
  this.moviesService.update(id, updateMovieDto);
}

```
