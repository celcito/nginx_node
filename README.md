# Projeto de Estudo com Docker Compose, Nginx, Node.js e MySQL

Este repositório é dedicado ao estudo e desenvolvimento de uma aplicação web simples, utilizando Docker Compose para orquestrar serviços de Nginx, Node.js e MySQL. O objetivo é explorar a configuração de um ambiente de desenvolvimento robusto e escalável, com Nginx atuando como um proxy reverso na porta 5000.

## Tecnologias Utilizadas

- **Docker Compose**: Ferramenta para definir e executar aplicações multi-container com Docker.
- **Nginx**: Servidor web e proxy reverso.
- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.

## Instalação e Execução

1. **Clonar o Repositório**:
   git clone https://github.com/celcito/nginx_node

2. **Executar o Docker Compose**:
   Navegue até o diretório do projeto e execute o seguinte comando para construir e iniciar os containers:
   docker-compose up --build

   ## Rotas da Aplicação

- **Inserir Dados**:
 Acesse `http://localhost:5000/insert` para inserir novos registros na tabela `people`.

- **Consultar Dados**:
 Acesse `http://localhost:5000/` para visualizar os registros existentes na tabela `people`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `docker-compose.yml`: Define os serviços do Docker Compose, incluindo Nginx, Node.js e MySQL.
- `nginx/`: Diretório contendo a configuração do Nginx como proxy reverso.
- `app/`: Diretório da aplicação Node.js, incluindo o código-fonte e o `package.json`.
- `mysql/`: Diretório contendo scripts SQL e configurações do banco de dados.

## Contribuição

Contribuições são bem-vindas. Por favor, siga as diretrizes de contribuição do projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
