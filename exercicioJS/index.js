let calcular1 = document.querySelector('#calcular1')
calcular1.addEventListener('click', () => {
    let idade = document.querySelector('#atual').value
    let maxima = document.querySelector('#maxima').value
    let lanches = document.querySelector('#lanches').value
    
    let dias = (maxima - idade) * 365
    let resultado = dias * lanches
    console.log(dias,resultado)
    
    resposta = document.querySelector('#resposta')
    resposta.innerHTML = `Você precisará de ${resultado} lanches para durar até a velhice de ${maxima} anos`
})

let calcular2 = document.querySelector('#calcular2')
calcular2.addEventListener('click', () => {
    let raio = document.querySelector('#raio').value

    //calculos
    comprimento = 2 * Math.PI * raio
    area = Math.PI * raio ** 2
    //

    let resposta1 = document.querySelector('#comprimento')
    resposta1.innerHTML = `A circunferência tem ${comprimento}` 

    let resposta2 = document.querySelector('#area')
    resposta2.innerHTML = `A área é ${area}`
})

let traduzir = document.querySelector('#traduzir')
traduzir.addEventListener('click', () => {
    let idioma = document.querySelector('#idioma').value
    idioma = idioma.toLowerCase()
    console.log(idioma)
    traducao = document.querySelector('#traducao')

    if(idioma == "fr"){
        traducao.innerHTML = 'Bonjour tout le monde!'
    }
    else if(idioma == 'es'){
        traducao.innerHTML = 'Hola, Mundo!'
    }
    else{
        traducao.innerHTML = 'Hello World!'
    }
})

let ativar = document.querySelector('#ativar')
ativar.addEventListener('click', () => {
    let limite = document.querySelector('#limite').value
    let div = document.querySelector('#repeticao')
    
    div.innerHTML = ''

    for(i = 0; i < limite; i++){
        let string = ''
        for(j = 0; j <= i; j++){
            string += j+1
        }
        //let linha = document.createElement('div')
        //linha.innerHTML = string
        div.innerHTML += string + '<br>'
        //document.body.appendChild(linha)
    }
    
})