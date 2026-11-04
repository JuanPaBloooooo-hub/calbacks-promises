//Declaramos la funcióm que servirá como callback

function despedirse() {
    console.log('Adios putos');
}

//Declara a funcion principa que recibe un parametro llamado callback 
//que recibe un parametro llamado callback

function iniciaeProceso(miCallback) {
    console.log( "Iniciando el proceso...");
    //invocamos la funcion que recibimos como argumento
    miCallback();
}

iniciaeProceso(despedirse)