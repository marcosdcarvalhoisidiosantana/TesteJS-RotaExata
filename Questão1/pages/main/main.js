botao_autenticacao = document.getElementById('enviar-avaliacao')
select_resposta = document.getElementById('resultado')

botao_autenticacao.addEventListener('click',async() => {
    alert("Obrigado pela avaliação! Sua resposta foi: "+select_resposta.value)
})