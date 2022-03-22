//Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
//bonus
// Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49


let box = document.getElementById("box")

let livelli = document.getElementById("livelli");

let bottone = document.getElementById("bottone");

var celleLivello = 0;

//numeri random da 0 a 100
let array = []



//attivazione gioco al click
bottone.addEventListener("click",
    function () {
        console.log(livelli.value)

        if (livelli.value == "livello medio") {
            celleLivello = 81;
            document.documentElement.style.setProperty("--numero-celle", "9");

        } else if (livelli.value == "livello difficile") {
            celleLivello = 49;
            document.documentElement.style.setProperty("--numero-celle", "7");

        } else {
            celleLivello = 100;

        }

        //funzione per generare numeri random
        for (y = 1; y <= celleLivello +1; y++ ) {
            array.push(y);
        }
        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5)
        }
        array = shuffle(array)
        console.log(array)
        
        //generare le bombe in base alle difficoltà 
        //ciclo for per creare le bombe  
        //creare un array per il numero bombe random 
        //creare un array dove si estraggono solo 16 bombe 
        //ciclo for per estrarre solo 16 bombe

        //ciclo per creare le celle e i numeri in base ai livelli 
        for (i = 1; i <= celleLivello; i++) {
            let divContainer = document.createElement("div");
            //aggiungere una calsse al div creatp
            divContainer.classList.add("cell")
            //aggiungere i numeri alla singola cella
            divContainer.innerHTML = `${array[i]}`

            //appendere l'elemento creato dentro il div in html con id box
            box.appendChild(divContainer);

            //fumzione evento cliccato
            divContainer.addEventListener("click",
                function () {
                    //mettere una classe al this
                    this.classList.add("color-cell")

                    //partire col confronto tra i numeir normali e le bombe 
                    //fare un ciclo if con includes mettendo parseint al this
                    //aggiungere una classe con colore rosso se la condizione è vera 
                }

            )

        }

    }

)


//utilizzare il removeeventlistener per togliere la funzione al click
