let login = document.getElementById('login')
let senha = document.getElementById('senha')
let opcaoSim = document.getElementById('sim')
let opcaoNao = document.getElementById('nao')
let botaoLogin = document.getElementById('btn-login')
let botaoReset = document.getElementById('btn-reset')
let opcoesFrutas = document.getElementsByName('fruta')
let sinalControleLogin = false
let sinalControleSenha = false
let sinalControleTesteRobo = false
let sinalControleFrutas = false
let sinalControleBotaoLogin = false


opcoesFrutas.forEach((element) => {
    element.addEventListener('change',async () => {
        let contador = 0
        opcoesFrutas.forEach((element) => {
            if(element.checked) {
                contador++
            }
        })
        if(sinalControleFrutas === false) {
            mostra_oculta('msg-validacao-fruta')
            sinalControleFrutas = true
        }
        if(sinalControleFrutas === true && contador === 0) {
            mostra_oculta('msg-validacao-fruta')
            sinalControleFrutas = false
        }
    })
})

async function read_json() {
    await fetch("http://localhost:3000/autenticacao")
    .then(async function(resp) {
        return resp.json();
    }).then(async function(data) {
        await data.forEach(async (obj) => {
            if(obj.login === login.value && obj.senha == senha.value)
                {
                    sinalControleBotaoLogin = true
                    return
                } 
            }
        )
    })
    return
}

async function mostra_oculta(element){
    var x = document.getElementById(element);
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

opcaoSim.addEventListener('change', async () => {
    if(sinalControleTesteRobo === false) {
        mostra_oculta('msg-validacao-pizza')
    }
    sinalControleTesteRobo = true
})

opcaoNao.addEventListener('change',async () => {
    if(sinalControleTesteRobo === false) {
        mostra_oculta('msg-validacao-pizza')
    }
    sinalControleTesteRobo = true
})

login.addEventListener('change',async () => {
    if(login.value != "") {
        sinalControleLogin = true
        mostra_oculta('msg-validacao-login')
    } else {
        sinalControleLogin = false
        mostra_oculta('msg-validacao-login')
    }
})

senha.addEventListener('change',async () => {
    if(senha.value != "") {
        sinalControleSenha = true
        mostra_oculta('msg-validacao-senha')
    } else {
        sinalControleSenha = false
        mostra_oculta('msg-validacao-senha')
    }
})

botaoLogin.addEventListener('click',async () => {
    if(sinalControleLogin && sinalControleSenha && sinalControleTesteRobo && sinalControleFrutas) {
        read_json().then(async () => {
            if(sinalControleBotaoLogin === true) {
                document.location.reload()
                window.location.href ="../main/main.html"
            } else {alert('Login ou senha inválidos')}
        })     
    } else {
        alert('Complete os campos citados em vermelho')
    }   
})

botaoReset.addEventListener('click',() => {
    document.location.reload()
})

