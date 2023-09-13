# [PT-BR] Trybers & Dragons - RPG

Este projeto é uma implementação de um jogo de interpretação de papéis (RPG - Role Playing Game) que segue os princípios da arquitetura SOLID e da programação orientada a objetos (POO). Ele inclui classes que representam raças, arquétipos e personagens, bem como interfaces para energias e lutadores. O serviço Node.js foi desenvolvido utilizando TypeScript e pode ser executado em um container Docker usando o comando `docker-compose up -d`.

## Tecnologias Utilizadas

- Node.js: plataforma de desenvolvimento em JavaScript do lado do servidor.
- TypeScript: linguagem que adiciona tipagem estática ao JavaScript.
- Docker: plataforma para empacotar, distribuir e executar aplicações em containers.

## Inicialização do Serviço

Para iniciar o serviço, siga os passos abaixo:

1. Certifique-se de que o Docker e o docker-compose estejam instalados em seu sistema.

2. Abra um terminal na pasta do projeto.

3. Execute o seguinte comando para iniciar o container:

```bash
  docker-compose up -d
```

Isso inicializará um container chamado trybers_and_dragons.

## Utilização do Container
Após inicializar o container, você pode interagir com ele usando a linha de comando ou abrindo-o em um ambiente de desenvolvimento como o VS Code.

Para acessar o container via CLI, use o seguinte comando:

```bash
   docker exec -it trybers_and_dragons bash
```

Dentro do container, você pode executar e testar o código relacionado às classes e interfaces definidas no projeto.

## Requisitos
O projeto atende aos seguintes requisitos:

- Foi criada a classe Race.
- Foram criadas classes que herdam de Race.
- Foi criada a interface Energy.
- Foi criada a classe Archetype.
- Foram criadas classes que herdam de Archetype.
- Foi criada a interface Fighter.
- Foi criada a classe Character.
- Foi criada a interface SimpleFighter.

A arquitetura do projeto segue os princípios SOLID, garantindo um design orientado a objetos sólido e expansível.

## Contato

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## Licença

Este projeto não possui licença.

# [EN] Trybers & Dragons - RPG

This project is an implementation of a role-playing game (RPG) that follows the principles of SOLID architecture and object-oriented programming (OOP). It includes classes representing races, archetypes, and characters, as well as interfaces for energies and fighters. The Node.js service was developed using TypeScript and can be executed in a Docker container using the `docker-compose up -d` command.

## Technologies Used

- Node.js: a server-side JavaScript development platform.
- TypeScript: a language that adds static typing to JavaScript.
- Docker: a platform for packaging, distributing, and running applications in containers.

## Service Initialization

To start the service, follow the steps below:

1. Make sure Docker and docker-compose are installed on your system.

2. Open a terminal in the project folder.

3. Execute the following command to start the container:

```bash
docker-compose up -d
```
This will initialize a container named trybers_and_dragons.

## Container Usage
After initializing the container, you can interact with it using the command line or by opening it in a development environment like VS Code.

To access the container via CLI, use the following command:
```bash
   docker exec -it trybers_and_dragons bash
```

Inside the container, you can run and test the code related to the classes and interfaces defined in the project.

## Requirements
The project meets the following requirements:

- The Race class was created.
- Classes that inherit from Race were created.
- The Energy interface was created.
- The Archetype class was created.
- Classes that inherit from Archetype were created.
- The Fighter interface was created.
- The Character class was created.
- The SimpleFighter interface was created.
- The project architecture follows SOLID principles, ensuring a solid and extensible object-oriented design.

## Contact

- LinkedIn: [AlissonTassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)

## License

This project has no license.



