//variabile che contiene il div
let container = document.getElementById("container");
//Variabile per il div cronometro
let chronometer = document.getElementById('chronometer');
// Array contenente i 5 numeri random
let arrayRandom = arrayRandomNum1to5();
//Array dei num inseriti dall'utente
let arrayUtente = [];
//Array di numeri azzeccati
let arrayNumIndovinati = [];
//Contatore per cronometro
let chrono = 3;



// Stampo a video i 5 numeri generati random
for (i = 0; i < arrayRandom.length; i++) {
    container.innerHTML += `<h3>- Numero ${i + 1}: <span>${arrayRandom[i]}</span></h3>`;
}

//Cronometro a video. Quando scade il tempo faccio partire tutta la logica
let stopWatch = setInterval(cronometro, 1000);



// FUNZIONI

//Cronometro
function cronometro() {

    // Ristampo ogni volta il cronometro
    if (chrono >= 0) {

        chronometer.innerHTML = `<div>Tempo allo scadere: ${chrono}</div>`;

    }
    // Quando raggiungo 0 il tempo scade quindi tolgo tutto quello che è stampato a video
    else if (chrono == -1) {

        container.innerHTML = " ";
        chronometer.innerHTML = " ";

    } else {

        // Stoppo la function cronometro
        clearInterval(stopWatch);

        // Inserisco 5 numeri dal prompt
        arrayUtente = numeriUtente();

        // Questo array contiene i numeri indovinati
        arrayNumIndovinati = checkTwoArray();

        // Se non ho indovinato nessun numero
        if (arrayNumIndovinati.length == 0) {

            container.innerHTML += `<div>Non ho indovinato nessun numero</div>`

        // Se ne ho indovinato uno solo
        } else if (arrayNumIndovinati.length == 1) {

            container.innerHTML += `<div>Ho indovinato: ${arrayNumIndovinati.length} numero</div>`
            container.innerHTML += `<div>Il numero indovinato è :</div><div>-${arrayNumIndovinati[0]}</div>`

        // Se ne ho indovinato più di uno
        } else {
            container.innerHTML += `<div>Ho indovinato: ${arrayNumIndovinati.length} numeri</div>`
            container.innerHTML += `<div>I numeri indovinati sono :</div>`

            for (let z = 0; z < arrayNumIndovinati.length; z++) {
                container.innerHTML += `<div>- ${arrayNumIndovinati[z]}</div>`
            }
        }
    }
    // Contatore del cronometro che va a scendere
    chrono--;
}

//Faccio inserire 5 num all'utente
function numeriUtente() {

    let arrayUtente = []

    for (i = 0; i < 5; i++) {

        let num = parseInt(prompt(`Inserisci numero ${i + 1}: `));

        // Controllo se ho digitato un numero e se maggiore di zero e minore di 100
        if (isNaN(num) || ( num <= 0 || num > 100) ) {

            alert("Inserire un numero corretto");
            // Faccio rispetere il ciclo un ulteriore volta
            i--;

        } else {

            arrayUtente.push(num);

        }
    }

    return arrayUtente;
}

//Controllo se i numeri di due array sono uguali e ritorno un array con tutti i numeri indovinati
function checkTwoArray() {

    let array = [];

    for (let i = 0; i < 5; i++) {

        for (let y = 0; y < 5; y++) {

            if (arrayRandom[i] == arrayUtente[y]) {
                array.push(arrayRandom[i])
            }

        }

    }

    return array;
}

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