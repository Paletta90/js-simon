//variabile che contiene il div
let container = document.getElementById("container");

// Array contenente i 5 numeri random
let arrayRandom = arrayRandomNum1to5();

for(i = 0; i < arrayRandom.length; i++){
    container.innerHTML += `<h3>- Numero ${i + 1}: <span>${arrayRandom[i]}</span></h3>`;
}

setTimeout(function(){

    let arrayUtente = []

    for(i = 0; i < 5; i++){

        let num = parseInt(prompt(`Inserisci numero ${i + 1}: `));

        // Controllo se ho digitato un numero e se maggiore di zero
        if(isNaN(num) || num <= 0){

            alert("Inserire un numero corretto");
            // Faccio rispetere il ciclo un ulteriore volta
            i--;

        } else{

            arrayUtente.push(num);

        }
    }

}, 3000)

// FUNZIONI
//Genera 5 num da 1 a 100 tutti diversi tra loro;
function arrayRandomNum1to5(){
    let array = [];

    for(i = 0; i < 5; i++){
        let numRandom = Math.floor( (Math.random() * 100 ) + 1 );

        if(array.includes(numRandom)){
            i--;
        }else{
            array.push(numRandom);
        }

    }

    return array;
}