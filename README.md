## Introdução

- esse é um projeto consumindo a api do spaceX, na qual lista os lançamentos dos foguetes
#### Foi utilizado
- Redux (toolkit e thunk)
- React Navigation v6

## Resultado

https://user-images.githubusercontent.com/59415818/222617213-e754cba2-b558-4a65-8eaf-6ca3642af05c.mov


# Arquitetura do Projeto

Este projeto segue um padrão comum de arquitetura para aplicações React Native, composto pelas seguintes pastas:

## models
Esta pasta contém todas as interfaces e tipos TypeScript usados no projeto.

## navigation
A pasta de navegação contém a configuração de navegação principal, onde definimos todas as rotas da aplicação usando a biblioteca React Navigation.

## plugins
Esta pasta contém quaisquer bibliotecas ou plugins externos usados no projeto. Aqui temos a configuração do httpClient, bem como quaisquer classes auxiliares usadas em toda a aplicação.

## screens
A pasta de telas contém todas as telas usadas na aplicação. Cada tela é definida como um componente e são organizadas por recurso ou funcionalidade.

## store
A pasta de store contém a configuração para o armazenamento do Redux, incluindo os redutores e ações usados para gerenciar o estado da aplicação.

## services
A pasta de serviços contém a camada de serviço da aplicação. Aqui definimos todos os serviços usados para interagir com APIs externas ou fontes de dados.


# Project Architecture

This project follows a common architecture pattern for React Native applications, consisting of the following folders:

## models
This folder contains all the TypeScript interfaces and types used in the project.

## navigation
The navigation folder contains the main navigation configuration, where we define all the routes of the application using the React Navigation library.

## plugins
This folder contains any external libraries or plugins used in the project. Here we have the httpClient configuration, as well as any helper classes used throughout the application.

## screens
The screens folder contains all the screens used in the application. Each screen is defined as a component, and they are organized by feature or functionality.

## store
The store folder contains the configuration for the Redux store, including the reducers and actions used to manage the application state.

## services
The services folder contains the service layer of the application. Here we define all the services used to interact with external APIs or data sources.

