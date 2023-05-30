# Folha de Pagamento Automatizada para Rede Hoteleira
_Este projeto foi feito em colaboração com meu colega de classe Igor Pereira, que também contribuiu para o seu desenvolvimento. Você pode conferir o trabalho dele no GitHub [aqui](https://github.com/igorpereira28)._
### Este projeto foi desenvolvido com o objetivo de praticar conceitos abordados durante o semestre, incluindo requisições HTTP, Express, rotas, EJS ou Handlebars para manipulação de variáveis HTML, CRUD com MySQL usando SQL, CRUD com funções, CRUD com funções que recebem parâmetros e ORM com Sequelize.

## Descrição
(Prova do Profº Claudio Etelvino de Lima)
<br>
A aplicação tem como objetivo informatizar a folha de pagamento de uma rede hoteleira, seguindo as regras estabelecidas pela empresa e as especificações descritas abaixo.

Cada funcionário possui os seguintes dados de entrada: código, número de horas trabalhadas no mês, turno de trabalho (M – matutino, V – vespertino ou N – noturno) e categoria (F – funcionário, G – gerente).

A aplicação realiza as seguintes funcionalidades:

- Leitura das informações dos funcionários: código (inteiro), número de horas trabalhadas (inteiro) no mês, turno (caractere) e categoria (caractere). O valor da hora trabalhada será calculado internamente.
- Cálculo do valor da hora trabalhada de acordo com a categoria e o turno do funcionário, considerando o salário-mínimo estadual fornecido pela aplicação.
- Cálculo do salário inicial do funcionário com base no valor da hora trabalhada e no número de horas trabalhadas.
- Cálculo do valor do auxílio-alimentação recebido pelo funcionário, utilizando um comando de seleção composto encadeado.
- Exibição dos seguintes dados como saída: código, número de horas trabalhadas, valor da hora trabalhada, salário inicial, auxílio-alimentação e salário final (salário inicial + auxílio-alimentação).


## Requisitos e Tecnologias Utilizadas

- Requisições HTTP
- Express
- Rotas
- EJS ou Handlebars para manipulação de variáveis HTML
- MySQL para o CRUD utilizando SQL
- Funções para manipulação do CRUD
- Funções que recebem parâmetros para manipulação do CRUD
- ORM (Object-Relational Mapping) com Sequelize

## Como Usar

- Clone este repositório em sua máquina local.
- Certifique-se de ter as tecnologias e dependências necessárias instaladas.
- Configure as conexões de banco de dados conforme necessário (em database.js).
- Execute a aplicação (acessando a pasta src usando 'cd src' e depois 'nodemon app.js'.
- Preencha as informações dos funcionários conforme solicitado.
- Visualize os resultados exibidos na saída.
