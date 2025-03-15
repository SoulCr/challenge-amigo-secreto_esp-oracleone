
//defino lista de nombres
let listaAmigos= [];


//Esta funcion Agrega nombres de amigos y los muestra de manera en ul(html)
function agregarAmigo(){
     
     //obtengo el valor del nombre del input(html)
     let nombreAmigo = document.getElementById('amigo').value;
     
     //verificamos que lo ingresado no este vacio y no contega caracteres especiales ni numeros(/^[a-zA-Z\s]+$/.test(nombreAmigo) prueba personal)
     if(nombreAmigo!== '' && /^[a-zA-Z\s]+$/.test(nombreAmigo)){
        listaAmigos.push(nombreAmigo);
        
        //creo un elemento li para que se vayan agregando a la ul(ListaHtml), asi poder mostrar los nombres ingresados
        let listaUl = document.createElement('li');
        listaUl.textContent= nombreAmigo;

        let listaHtml = document.getElementById("listaAmigos");
        listaHtml.appendChild(listaUl);       
        
        limpiarCaja();
        
     }else{
        alert("Por favor , ingrese un nombre valido");
     }
     
     
}



// Elige un nombre de amigo al azar y muestra su resultado 

function sortearAmigo(){
    if(listaAmigos!= 0 ){
        //sorteamos un numero , esto es que genera un numero aleatorio entero , dependiendo de la longitud de la lista , y el numero obtenido es el valor en esa posicion en la lista 
        let AmigoASortear= listaAmigos[Math.floor(Math.random()* listaAmigos.length)];

        //muestro el resultado obtenido
        let resultadoSorteado = document.getElementById('resultado');
        
        //llamo a limpiar caja por el simple hecho de limpiar los resultados y no se vayan acumulando, asi reutilizo la funcion.
        limpiarCaja();
        
        //limpio la lista de nombres
        LimpiarLista();

        //creo un elemento li para que aparezca en la ul del html , el cual se mostrara en pantalla

        let ResultadoAmigo = document.createElement('li');
        ResultadoAmigo.textContent=`El nombre del amigo secreto sorteado es : ${AmigoASortear}`;

        resultadoSorteado.appendChild(ResultadoAmigo)

    }else{
        alert('No hay amigos para sortear, por favor ingrese nombres!');
    }

}


//limpia el input(html) para que sea mas dinamico el modo de ingresar nombres 
function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';

    //agregue esta linea para limpiar el resultado , una vez que se quiera iniciar de nuevo(funcionaria como un reincio)
    let LimpioResultado = document.getElementById('resultado');
    LimpioResultado.innerHTML='';
    
}

 // limpio la lista de nombres ingresados , asi se muestra el resultado de manera mas clara.
function LimpiarLista(){
    let listaAmigosHtml = document.getElementById("listaAmigos")
    listaAmigosHtml.innerHTML = '';

    // esta linea la agregue porque cada vez que apretaba sortear, sorteaba nombres de la lista por mas que no se vieran 
    // y perjudicaba el funcionamiento , simplemente con esta linea vuelvo la lista vacia
    // una desventaja de esto es que si por ejemplo el amigo sorteado no esta
    // y quieras sortear de nuevo se tendrian que agregar de nuevo los nombres , comentando esta linea podras sortear varias veces.(esto esta hecho a modo prueba)
    listaAmigos=[];
}
