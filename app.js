// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variable de tipo vector para almacenar los nombres ingresados en el input
let amigosVector=[];

// Funcion para agregar amigos
function agregarAmigo(){
    const objeto = document.getElementById('amigo');
    const valorObjeto = objeto.value;
    if (valorObjeto === '' || valorObjeto === undefined || valorObjeto === null || !valorObjeto) {
        alert('Por favor, inserte un nombre.');
        return ;
    } else {
        amigosVector.push(valorObjeto);
    }
    objeto.value = '';
    objeto.focus();
    mostrarAmigos();
}

// Funcion para mostrar los amigos en la lista
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    const conAmigos = conAmigosEnVector();
    if (conAmigos) {
        for (let elemento of amigosVector) {
            let posicion = document.createElement('li');
            posicion.textContent = elemento;
            listaAmigos.appendChild(posicion);
        }
    }
}

// Funcion para validar si existen amigos en el vector
function conAmigosEnVector(){
    let conAmigos = false;
    if (amigosVector) {
        conAmigos = amigosVector.length === 0 ? false : true;
    }    
    return conAmigos;
}

// Funcion para sortear un amigo aleatoriamente
function sortearAmigo(){
    const conAmigos = conAmigosEnVector();
    if (!conAmigos) {
        document.getElementById('resultado').innerHTML = "";
        alert('Ingrese amigos');
        return ;
    }
    const totAmigos = amigosVector.length;
    const semilla = Math.random();
    const elegido = semilla * totAmigos;
    const afortunado = Math.floor(elegido);
    const ganador = amigosVector[afortunado];
    let mostrarGanador = document.getElementById('resultado');
    mostrarGanador.innerHTML = `El amigo sorteado es: ${ganador}`;
    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigosVector.splice(0);
}