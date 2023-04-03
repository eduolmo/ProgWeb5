let menu = document.getElementById('menu')
let dropdown = document.getElementById('dropdown')
let autenticar = document.getElementById('autenticar')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')
let aviso1 = document.getElementById('aviso1')
let aviso2 = document.getElementById('aviso2')

let fechado = true
menu.addEventListener('click',() => {
    if(fechado){
        dropdown.style.display = 'flex'
        fechado = false
    }
    else{
        dropdown.style.display = 'none'
        fechado = true
    }
    
})

autenticar.addEventListener('click',() => {
    if(usuario.value == ''){
        usuario.style.borderColor = 'red'
        aviso1.innerHTML = 'Usuário deve ser preenchido!'
        aviso1.style.color = 'red'
    }
    else{
        usuario.style.borderColor = 'green'
        aviso1.innerHTML = ''
    }

    /////////////////////////////

    if(senha.value == ''){
        senha.style.borderColor = 'red'
        aviso2.innerHTML = 'Senha deve ser preenchida!'
        aviso2.style.color = 'red'
    }
    else if(senha.value.length < 6 || senha.value.length > 30){
        senha.style.borderColor = 'red'
        aviso2.innerHTML = 'Senha deve ter entre 6 a 30 caracteres!'
        aviso2.style.color = 'red'
    }
    else{
        senha.style.borderColor = 'green'
        aviso2.innerHTML = ''
    }

})





