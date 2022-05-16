
var Section = document.getElementById('content')
var Input_pre = document.getElementById('Valor_pre')
var Input_des = document.getElementById('Valor_des')
var Submit = document.getElementById('Submit_button')

Input_pre.onfocus = ManterValor(Input_pre.value)
Input_des.onfocus = ManterValor(Input_des.value)

Submit.addEventListener('click', function(e){

    Div_sobrando = document.getElementById("Div_resultado")
    EliminaDivSobrando(Div_sobrando)

    var Valor_pre = Input_pre.value
    var Valor_des = Input_des.value

    const Porc_total = 100
    var Porc_aplicada = 100 - Valor_des

    var Valor_original = (Valor_pre * Porc_total) / Porc_aplicada

    var Div_resultado = document.createElement("div")
    Div_resultado.setAttribute("id", "Div_resultado")
    var Div_texto = document.createTextNode(VerificaValorNulo(Valor_original))
    Div_resultado.appendChild(Div_texto)

    Section.appendChild(Div_resultado)

})

function EliminaDivSobrando(Div_sobrando){

    if(Section.contains(Div_sobrando)){
        Div_sobrando.remove()
    }

}

function VerificaValorNulo(Valor_original){

    console.clear()

    var Valor_pre = Number(Input_pre.value)
    var Valor_des = Number(Input_des.value)

    // console.log("Valor com desconto: " + Valor_pre)
    // console.log("Porcentagem de desconto: " + Valor_des)
    // console.log("Valor original: " + Valor_original)
    // console.log("Tipo de valor pre: " + typeof Valor_pre)
    // console.log("Tipo de valor des: " + typeof Valor_des)
    // console.log(isNaN(Valor_pre))
    // console.log(isNaN(Valor_des))

    if(isNaN(Valor_pre) || isNaN(Valor_des)){
        console.log("Expected")
        return ("Insira um valor válido")
    } else if((Valor_pre=="Insira o preço ") || (Valor_des=="Insira o desconto ") || (Valor_original==0)){
        return ("Insira um valor válido")
    } else {
        console.log("else")
        return ("O valor do preço antes da aplicação do desconto era de R$ " + Valor_original.toFixed(2))
    }

}

function ManterValor(Valor_input){
    this.innerHTML = Valor_input
}