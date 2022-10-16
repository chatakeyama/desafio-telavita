# AnimaVita - Consultas online com animes e mangás

Projeto de desenvolvimento frontend para teste técnico do processo seletivo da empresa Telavita.  

## Desafio

Estamos implementando a página de listagem dos nossos super animes e mangás. Precisamos mostrar pelo menos 4 cards com as informações dos personagens e melhorar a interface e usabilidade do layout atual.

### Requisitos:

* Utilizar React para componentizar a aplicação
* Melhorar a interface e usabilidade da página atual
* A página deverá conter no mínimo 4 cards
* As informações mínimas que deverão aparecer em cada card são: imagem, nome, breve descrição e outros nomes que o personagem utiliza, quando tiver
* As informações deverão ser consumidas da API [Kitsu](https://kitsu.docs.apiary.io/#reference/characters-&-people/characters)
 
### Diferenciais

* Paginação
* BEM
* Styled Components
* Storybook
* Testes unitários

## Sobre o projeto que foi desenvolvido

Este projeto foi desenvolvido utilizando a versão v16.11.0 do NodeJs.
>[ Node.js]( https://nodejs.org/dist/v16.11.0/)

### Execução da aplicação

Entre na pasta raíz do projeto e execute o comando de instalação das dependências:
```
npm install
```
Execute o comando a seguir para iniciar a aplicação:
```
npm run start
```
### Storybook
Para visualizar o storybook dos componentes, execute:
```
npm run storybook
```
### Testes automatizados
Os testes automatizados foram feitos utilizando Jest e React Testing Library. Para executá-los, execute:
```
npm run test
```