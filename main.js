//variabile che contiene il div
let container = document.getElementById("container");
//Variabile per il div cronometro
let chronometer = document.getElementById('chronometer');
// Array contenente i 5 numeri random
let arrayRandom = arrayRandomNum1to5();
//Array dei num inseriti dall'utente
let arrayUtente = [];
//Contatore per cronometro
let chrono = 3;

// Stampo a video i 5 numeri generati random
for (i = 0; i < arrayRandom.length; i++) {
    container.innerHTML += `<h3>- Numero ${i + 1}: <span>${arrayRandom[i]}</span></h3>`;
}

//Cronometro a video
let stopWatch = setInterval(cronometro, 1000);

// FUNZIONI
//Genera 5 num da 1 a 100 tutti diversi tra loro;
function arrayRandomNum1to5() {
    let array = [];

    for (i = 0; i < 5; i++) {
        let numRandom = Math.floor((Math.random() * 100) + 1);

        if (array.includes(numRandom)) {
            i--;
        } else {
            array.push(numRandom);
        }

    }

    return array;
}

//Cronometro
function cronometro() {

    chronometer.innerHTML = `<div>Tempo allo scadere: ${chrono}</div>`;
    chrono--;
    // Quando raggiungo 0 il tempo scade
    if (chrono == -1) {
        
        clearInterval(stopWatch);
        chronometer.innerHTML = `<div>Tempo Scaduto</div>`
        
        arrayUtente = numeriUtente();
        
    }
}

//Faccio inserire 5 num all'utente
function numeriUtente() {

    let arrayUtente = []

    for (i = 0; i < 5; i++) {

        let num = parseInt(prompt(`Inserisci numero ${i + 1}: `));

        // Controllo se ho digitato un numero e se maggiore di zero
        if (isNaN(num) || num <= 0) {

            alert("Inserire un numero corretto");
            // Faccio rispetere il ciclo un ulteriore volta
            i--;

        } else {

            arrayUtente.push(num);

        }
    }

    return arrayUtente;
}