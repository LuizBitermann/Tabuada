function gerar() {
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
if (num.value.length == 0) { // aqui esta dizendo se o valor dentro da caixa de resposta for 0 nao ira funcionar
   
    window.alert (' Por favor insira um numero')
}else{
    let n = Number(num.value) // convertendo para numeros o valor que o usuario inseriu
    let c = 1  
    tab.innerHTML = '' // esta servindo para limpar o select
    while (c <= 10) { // enquanto c for menor ou igual a 10 vai ser realizado os comandos a baixo
        let item = document.createElement('option') // esta criando options no select pelo js
        item.text = `${n} x ${c} = ${n * c}` // sendo feito a conta da tabuada 
        item.value = `tab${c}`
        tab.appendChild(item) //esta botando as option dentro do select(tab)
        c++ // somando 1 para realizar as multiplicacoes
    }
}







}

