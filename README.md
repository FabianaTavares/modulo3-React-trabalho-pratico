# Descrição do Trabalho Prático Modulo 3 - React

Bootcamp FrontEnd - IGTI 2020

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Observação

Apesar de o curso fornecer o codigo fonte original aos alunos, procurei deixar o meu codigo, exibindo assim erros e acertos, coisas a melhorar, acho que transparência é um ponto importantíssimo para o profissional.

## Ambiente de Desenvolvimento

### Frontend

Para que o frontend funcione, execute os seguintes comandos (sem aspas):

1. "yarn install", para instalar as dependências
2. "yarn start", para "subir" o frontend

## Ambiente de Produção

Para visualizar o projeto rodando, basta acessar o [link do desafio!](https://fabi-igti-react-trabalho.web.app/)

## Docker Hub

Imagem não disponível no docker hub.

## Objetivos do Trabalho Prático

Exercitar os seguintes conceitos trabalhados no Módulo:

- Implementação de aplicações com JavaScript e React
- Criação de Class Components

## Enunciado

Construa, utilizando React, uma aplicação para controlar as notas dos Módulos dos
Bootcamps do IGTI e indicar se o aluno será aprovado conforme os seguintes critérios,
que foram extraídos do PPC (Plano Pedagógico dos Cursos). Caso consiga apenas um
dos dois critérios abaixo, o aluno(a) se torna apto(a) a obter o certificado:

1. Atingir 60% de aproveitamento em cada um dos 5 módulos;
2. OU atingir 70% de aproveitamento na soma total de pontos do Bootcamp.

## Atividades

Vocês devem desempenhar as seguintes atividades:

1. Implementar, utilizando React, uma aplicação denominada "react-bootcampnotas", que possuirá cinco elementos do tipo input editáveis para a definição das
   notas (0 a 100) e detalhamento de cálculos para indicar se o aluno está aprovado.
2. Considerando que o aluno deve ter assistido as videoaulas até a Aula 7, espera-se
   que a implementação seja feita preferencialmente com Class Components.
   Entretanto, se o aluno desejar fazer a implementação com React Hooks, tudo
   bem. De qualquer forma, aconselho que seja feita com Class Componentes neste
   momento, pois o Desafio irá focar nos React Hooks.
3. Se as notas (0 a 100) tiverem o valor de 60 ou superior, exiba-as com uma cor
   positiva (ex: verde). Se as notas forem abaixo de 60, exiba-as com uma cor
   negativa (ex: vermelho).
4. O aluno deve calcular:
   a. Nota total;
   b. Percentual total;
   c. Se foi aprovado pela média;
   d. Se foi aprovado pelo percentual total.

5. As imagens abaixo ilustram possíveis interfaces e situações diversas da aplicação:

![alt text](https://github.com/FabianaTavares/modulo3-React-trabalho-pratico/blob/main/public/imagem_trabalho.PNG)

## Dicas e sugestões de implementação

- A aplicação que implementei só possui um item no objeto de this.state ➔ grades.
- Na minha implementação, grades representa um array de objetos com id,
  descrição e nota. "Faça o computador trabalhar para você".
- Utilizei o projeto base que foi fornecido, que já possui o Materialize CSS.
- Monte os inputs em loop utilizando array.map.
- Além de App, criei os seguintes componentes:

```
<Grades />, <Grade /> e <Calculations />.
```

- Faça com que os inputs sejam do tipo number, delimitando os valores para o mínimo de 0 e máximo de 100. Assim, o usuário consegue manipulá-los com as setas ↑ e ↓ do teclado.
- Caso sinta dificuldade, verifique este exemplo. Lembre-se de que você aprende muito mais implementando o app sozinho, com o apoio do fórum.
- As dicas acima são apenas sugestões. Fique à vontade para fazer sua própria implementação, desde que as regras de cálculo sejam implementadas corretamente.
