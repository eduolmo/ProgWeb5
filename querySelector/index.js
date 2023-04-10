let cabecalho = document.querySelectorAll('.accordion-cabecalho')
let conteudo = document.querySelectorAll('.accordion-conteudo')

cabecalho[0].addEventListener('click', () => {
    if(conteudo[0].style.display == 'none'){
        conteudo[0].style.display = 'flex'
    }
    else{
        conteudo[0].style.display = 'none'
    }
})

cabecalho[1].addEventListener('click',() => {
    if(conteudo[1].style.display == 'none'){
        conteudo[1].style.display = 'flex'
    }
    else{
        conteudo[1].style.display = 'none'
    }
})

cabecalho[2].addEventListener('click',() => {
    if(conteudo[2].style.display == 'none'){
        conteudo[2].style.display = 'flex'
    }
    else{
        conteudo[2].style.display = 'none'
    }
})


