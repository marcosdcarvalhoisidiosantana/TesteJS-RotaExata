let produtos = [
    {
    "nome": "Produto 1",
    "descricao": "Descrição do produto 1",
    "valor": 50,
    "opcionais": [
    "Opcional 1",
    "Opcional 2",
    "Opcional 3"
    ]
    },
    {
    "nome": "Produto 2",
    "descricao": "Descrição do produto 2",
    "valor": 75,
    "opcionais": [
    "Opcional 1",
    "Opcional 2",
    "Opcional 3",
    "Opcional 4"
    ]
    },
    {
    "nome": "Produto 3",
    "descricao": "Descrição do produto 3",
    "valor": 100,
    "opcionais": [
    "Opcional 1",
    "Opcional 2",
    ]
    }
]


let table = document.getElementById('tabela')
let table_invertida = document.getElementById('tabela-invertida')

produtos.forEach((object) => {
    let row = table.insertRow();
    let nome = row.insertCell()
    let descricao = row.insertCell()
    let valor = row.insertCell()
    let opcionais = row.insertCell()
    nome.innerHTML = object.nome
    descricao.innerHTML = object.descricao
    valor.innerHTML = object.valor
    opcionais.innerHTML = object.opcionais
})

produtos.sort((a,b) => {
    let string = a.nome.split(" ")
    let string2 = b.nome.split(" ")
    let valor = string2[1] - string[1]
    return valor
});

produtos.forEach((object) => {
    let row = table_invertida.insertRow();
    let nome = row.insertCell()
    let descricao = row.insertCell()
    let valor = row.insertCell()
    let opcionais = row.insertCell()
    nome.innerHTML = object.nome
    descricao.innerHTML = object.descricao
    valor.innerHTML = object.valor
    opcionais.innerHTML = object.opcionais

})