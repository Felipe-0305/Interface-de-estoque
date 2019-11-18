var campo_nome = document.querySelector("input[name='nome']")
var campo_estado = document.querySelector("input[name='estado']")
var campo_produto = document.querySelector("input[name='produto']")
var campo_quantidade = document.querySelector("input[name='quantidade']")
var campo_calendario = document.querySelector("input[name='calendario']")
var campo_descricao = document.querySelector("input[name='descricao']")
var corpo_tabela = document.querySelector(".tbody")
var botao_adicionar = document.querySelector("#btt")
function Entrevista(nome, produto, quantidade, calendario, descricao, estado){
    this.nome = nome
    this.produto = produto
    this.quantidade = quantidade
    this.calendario = calendario
    this.descricao = descricao
    this.estado = estado 
    
    this.criar_linha_tabela = function (){
        var linha = document.createElement("tr");
        var campo_nome = document.createElement("td")
        var campo_estado = document.createElement("td")
        var campo_produto = document.createElement("td")
        var campo_quantidade = document.createElement("td")
        var campo_calendario = document.createElement("td")
        var campo_descricao = document.createElement("td")
        //texto
        var texto_nome = document.createTextNode(this.nome)
        var texto_estado = document.createTextNode(this.estado)
        var texto_produto = document.createTextNode(this.produto)
        var texto_quatidade = document.createTextNode(this.quantidade)
        var texto_calendario = document.createTextNode(this.calendario)
        var texto_descricao = document.createTextNode(this.descricao)
        //vincular
        campo_nome.appendChild(texto_nome)
        campo_estado.appendChild(texto_estado)
        campo_produto.appendChild(texto_produto)
        campo_quantidade.appendChild(texto_quatidade)
        campo_calendario.appendChild(texto_calendario)
        campo_descricao.appendChild(texto_descricao)
        //
        linha.appendChild(campo_nome)
        linha.appendChild(campo_estado)
        linha.appendChild(campo_produto)
        linha.appendChild(campo_quantidade)
        linha.appendChild(campo_calendario)
        linha.appendChild(campo_descricao)
        //corpo tabela
        corpo_tabela.appendChild(linha)
    }
}

function adicionar_dados(){
    event.preventDefault();

    let nova_entrevista = new Entrevista (campo_nome.value,campo_estado.value, campo_produto.value,
        campo_quantidade.value,campo_descricao.value,campo_calendario.value)
        
    nova_entrevista.criar_linha_tabela();
}

botao_adicionar.addEventListener('click', adicionar_dados)