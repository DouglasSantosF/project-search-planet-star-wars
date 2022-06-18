
# Projeto StarWars Planets Search

#### Este projeto foi desenvolvido para testar o conhecimento sobre  **React**, **Javascript**, **CSS**, **manipulação de componentes**, **Utilizar a Context API do React para gerenciar estado**, **Criar React Hooks customizados**. 

---
<br>
Este projeto foi importante pra mim, pois nele consegui testar meus conhecimentos em gerenciamento de estado através do Context API que é nativo do React.Também pude por em prática a criação e manipulação de tabelas no React.



### **Tecnologias utilizadas**
---
---

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>



---
---
<br>
<br>

## **SOBRE:**
---
 Neste projeto, através de uma requisição a uma api com dados sobre os planetas do universo **Star Wars**, mostramos na tela uma lista com os planetas. </br>
Na lista tem diversos dados sobre cada planeta, como o numero de habitantes, nome , diâmetro e até o clima, entre outras informações.
 
 Na parte de cima da tela, temos um Header com algumas opções de filtro, temos o **Planetas**, que é um campo onde o usuário pode escrever o nome do planeta e pesquisar por ele, o filtro irá procurar pelo planeta cujo o nome contenha a palavra escrita pelo usuário. 

 Temos também um filtro onde o usuário pode escolher entre as opções: **Population**, **orbital_period**, **diameter**, **rotation_period** e **surface water**.

 Um segundo filtro contém as opções **maior que**, **menor que** e **igual a**.

 Depois temos um campo para inserir um valor numérico e um botão **Buscar**
<br>

Ao escolher uma das opções do filtro o usuário deve selecionar se ele que buscar os planetas que possuem exatamente um determinado valor, se quer os planetas que possuem valores menores que o inserido, ou se quer os planetas que possuem os valores maiores que o inserido. Após inserir o valor e clicar em buscar, irá aparecer os planetas filtrados na lista.
 
Além disso, o filtro selecionado, será removido da lista de filtros, e irá aparecer um botão com o nome do filtro selecionado. O usuário pode fazer uma segunda filtragem, a partir do resultado da primeira, e ao selecionar uma segunda opção e escolher o tipo de filtragem e inserir o valor e clicar em buscar, a segunda filtragem irá resultar na em um novo resultado, e o usuário pode fazer quantas filtragem ele quiser. caso ele queira desfazer alguma das filtragens, basta ele clicar no botão que apareceu com a filtragem em questão, e após clicar no botão, ele irá sumir, e a opção de filtragem irá voltar pra lista de opções de filtro, e a lista será gerada removendo a filtragem excluída.
 
  </br>
  Na página principal, também possui um botão **ADICIONAR CARTÃO** onde é possível adicionar um novo filme, e até a imagem colando o link de uma imagem.
  
  </br>
  Nas transições entre páginas, aparece a palavra carregando, até que as operações solicitadas estejam prontas.

<br>
<br>

## Dificuldades do projeto
---
 Foi meu primeiro projeto usando as funcionalidades do context API 

- Utilizar a Context API do React para gerenciar estado.
- Utilizar o React Hook useState;
- Utilizar o React Hook useContext;
- Utilizar o React Hook useEffect;
- Criar React Hooks customizados.

fazer a manipulação da filtragem da tabela de modo que fosse possível desfazer apenas uma das filtragens, aprendi muito sobre a manipulação de objetos nesse projeto. 

## Baixando o projeto
---
Caso queira clonar para rodar localmente, após dar o gitclone em sua máquina, devemos entrar na pasta raíz do projeto e executar no terminal o comando **npm install** para instalar todas as dependências, e após tudo instalado, é preciso rodar o comando **npm start** para iniciar em seu navegador. É necessário o node.js instalado.



## Caso queira ver na prática como funciona, acesse o link abaixo: 
---
<br>

https://project-search-planet-star-wars.vercel.app/