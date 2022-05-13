
var Section = document.getElementById('content')
var Input_pre = document.getElementById('Valor_pre')
var Input_desc = document.getElementById('Valor_des')
var Submit = document.getElementById('Submit_button')

Submit.addEventListener('click', function(e){


    Div_sobrando = document.getElementById("Div_resultado")
    EliminaDivSobrando(Div_sobrando)

    var Valor_pre = Input_pre.value
    var Valor_des = Input_desc.value

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
        console.log("Div detectada")
    }

}

function VerificaValorNulo(Valor_original){

    var Valor_pre = Input_pre.value
    var Valor_des = Input_desc.value

    if((Valor_pre||Valor_des=="Insira o preço"||"Insira o desconto") || (Valor_original==0)){
        console.log(Valor_pre)
        console.log(Valor_des)
        console.log(Valor_original)
        return "Insira um valor válido"
    } else {
        return `O valor do preço antes da aplicação do desconto era de ${Valor_original}`
    }

}
