Instruções de uso:

Nesse arquivo contém informações sobre a questão 1 do teste JS para a vaga de 
estágio em desenvolvimento front-end e como fazer seu uso.

É necessário possui o node e o npm instalado na máquina.

https://nodejs.org/en/
https://www.npmjs.com/

Abra o terminal, e acesse a pasta aonde estão localizados os arquivos.
Passo a passo para o windows:
Passo 1: Aperte win + R
Passo 2: Digite cmd na janela Executar
Passo 3: No prompt de comando cd Digite-o-local-do-arquivo
	Exemplo: cd C:\dev\RotaExata
Passo 4: Digite npm install (necessário para a leitura do arquivo.json)
Passo 5: Digite npm start (necessário para a leitura do arquivo.json)
Passo 5: Abra o arquivo login.html

#Para o login, as senhas contidas no autenticacao.json são as seguintes:
login: marcos.santana, senha: senhaTeste
login: rotaExata, senha: TesteDev
Caso queira testar outras opções, basta adicionar o login e a senha no arquivo conforme as citadas acima.

letra c) Pesquise e teste uma forma de armazenar e validar uma senha cifrada.
	Para isso, é necessário utilizar de criptografia. Existem diversas bibiliotecas as quais são
feitas para tal atividade.
Um exemplo encontrado é esse reposítório no github: https://github.com/ricmoo/aes-js
Para autenticar, é necessário criptografar a senha, armazená-la no JSON.
Após isso, o trecho de código no qual verifica o login e a senha do usuário deve encriptar a senha colocada
e após essa etapa verificar se ela esta de acordo com a senha armazenada. 
Existem outras formas em que a parte de criptografar e armazenar a senha em um arquivo,
se torna desnecessária como é o caso da ferramenta oauth que faz isso para o desenvolvedor.
(https://oauth.net/2/).
 