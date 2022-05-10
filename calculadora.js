
var Section = document.getElementById('content')
var Input_pre = document.getElementById('Valor_pre')
var Input_desc = document.getElementById('Valor_des')
var Submit = document.getElementById('Submit_button')

Submit.addEventListener('click', function(e){

    
    if (Section.contains(Div_Resultado)){
        Div_resultado.remove()
        console.log("Elemento retirado")
    }

    var Valor_pre = Input_pre.value
    var Valor_des = Input_desc.value

    console.log(`Valor preço = ${Valor_pre}`)
    console.log(`Valor desconto = ${Valor_des}`)

    const Porc_total = 100
    var Porc_aplicada = 100 - Valor_des

    var Valor_original = (Valor_pre * Porc_total) / Porc_aplicada

    var Div_resultado = document.createElement("div")
    Div_resultado.setAttribute("id", "Div_Resultado")
    var Div_texto = document.createTextNode(`O valor do preço 
    antes da aplicação do desconto era de ${Valor_original}`)

    Div_resultado.appendChild(Div_texto)
    Section.appendChild(Div_resultado)


})
