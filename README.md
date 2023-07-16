# Search Bank

Este projeto é uma aplicação web feita com React, que lista os usuários e filtrar suas transações bancárias. O objetivo principal é fornecer uma interface para visualizar e filtrar as transações de cada usuário, permitindo que o usuário do sistema tenha uma visão detalhada de suas atividades financeiras.

## Recursos Principais:

1- Filtragem por Nome: O sistema permitirá ao usuário filtrar as transações bancárias pelo nome da pessoa que realizou a transação.

2- Filtragem por Período de Tempo: Além do filtro por nome, o sistema também permitirá filtrar as transações com base no período de tempo em que foram realizadas. O usuário poderá definir uma data de início e uma data de término para restringir a busca a um intervalo específico.

3- Detalhes da Transação: Cada transação listada incluirá informações, como a data da transação, o valor envolvido, e o tipo de transação (por exemplo, depósito, saque, transferência, etc.).

## Instalação
<details>
    <summary>
        <b>
            Instalando o Search Bank com node
        </b>
    </summary>

  <br>

1. Clonando o Projeto do GitHub

```bash
  git clone git@github.com:Pedro0505/PS-Java-React-Front.git
  cd PS-Java-React-Front
```

2. Instalando as dependências

```bash
  npm install
```

3. Preparando o ambiente:

3.1 Na raiz do projeto crie um arquivo chamado .env

3.2 No arquivo .env escreva o host onde a api está rodando

```bash
  # Exemplo:

  REACT_APP_PUBLIC_API=http://localhost:8080
```

4. Iniciar a aplicação:

```bash
  npm start
```

</details>

<details>
    <summary>
        <b>
            Iniciando o projeto com Docker Compose 🐳
        </b>
    </summary>

  ***⚠️ Para garantir um bom funcionamento é necessário que tenha instalado o docker e o docker-compose nas versões 20.10.16 e 1.29 ou superior respectivamente***

1. Clonando o Projeto do GitHub

```bash
  git clone git@github.com:Pedro0505/PS-Java-React-Front.git
  cd PS-Java-React-Front
```

2. Suba os containers

```bash
  docker-compose -f docker-compose.dev.yml up --build -d
```

3. Quando o processo dos containers estiver acabado acesse a aplicação usando o seguinte endereço

```bash
  http://localhost:3000
```

4. Para derrubar os containers

```bash
  docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
```

<br>

</details>

## Stack utilizada

- React
- Typescript
- Material Ui
- React Router Dom
- Dayjs
- Axios
