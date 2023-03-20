let aluno = document.getElementById('aluno')
let professor = document.getElementById('professor')
let conteudo = document.getElementById('conteudo')
let botaoAqui = document.getElementById('botaoAqui')
let pessoas = document.getElementById('pessoas')

aluno.addEventListener('click',() => {
    conteudo.style.backgroundColor = 'rgb(231, 255, 196)'
    botaoAqui.innerHTML = ''
    pessoas.innerHTML = ''

    let novoAluno = document.createElement('button')
    novoAluno.innerHTML = 'CRIAR ALUNO'
    botaoAqui.appendChild(novoAluno)

    novoAluno.addEventListener('click',() => {
        let nome = prompt('Digite o nome do aluno:')
        let div = document.createElement('div')
        div.innerHTML = 'ALUNO: ' + nome.toUpperCase()
        div.setAttribute('class','pessoa')
        div.style.backgroundColor = 'rgb(141, 255, 175)'
        pessoas.appendChild(div)
    })

})

professor.addEventListener('click',() => {
    conteudo.style.backgroundColor = 'rgb(255, 215, 202)'
    botaoAqui.innerHTML = ''
    pessoas.innerHTML = ''

    let novoAluno = document.createElement('button')
    novoAluno.innerHTML = 'CRIAR PROFESSOR'
    botaoAqui.appendChild(novoAluno)

    novoAluno.addEventListener('click',() => {
        let nome = prompt('Digite o nome do professor:')
        let div = document.createElement('div')
        div.innerHTML = 'PROFESSOR: ' + nome.toUpperCase()
        div.setAttribute('class','pessoa')
        div.style.backgroundColor = 'rgb(255, 183, 155)'
        pessoas.appendChild(div)
    })

})




