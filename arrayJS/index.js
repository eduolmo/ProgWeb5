let cores = ['azul','vermelho','amarelo','verde','laranja','roxo','rosa']
let imprimir = document.getElementById('imprimir')
let div = document.getElementById('cores')

imprimir.addEventListener('click', () => {
    div.innerHTML = ''
    for(i in cores){
        div.innerHTML += `Minha cor ${i} é ${cores[i]} <br>`
    }
})

//

let num = [1,2,3,4,5]
let elevar = document.getElementById('elevar')
let quadrado = document.getElementById('quadrado')

elevar.addEventListener('click', () => {
    quadrado.innerHTML = num.map(function(n){return n**2})
})

//

let numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
let romanos = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

let converter = document.getElementById('converter')
let algarismos = document.getElementById('algarismos')

converter.addEventListener('click', () => {
    let x = document.getElementById('num').value
    
    for(i = 0; numeros.length; i++){
        if(x == numeros[i]){
            algarismos.innerHTML = romanos[i]
        }
    }
})


