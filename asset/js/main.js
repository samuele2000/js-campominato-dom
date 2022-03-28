/*Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.*/

/*BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.*/


let box = document.getElementById("box")

let livelli = document.getElementById("livelli");

let bottone = document.getElementById("bottone");

var celleLivello = 0;

let puntiFatti = [];

//numeri random da 0 a 100
let array = []
//array per bombe 
let array2 = []
let bombeArray = []

//attivazione gioco al click
bottone.addEventListener("click",
    function () {
        console.log(livelli.value)

        box.innerHTML = "";

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
        for (y = 1; y <= celleLivello + 1; y++) {
            array.push(y);
        }

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5)
        }
        array = shuffle(array)
        console.log(array)

        //generare le 16 bombe 
        for (z = 1; z <= celleLivello; z++) {
            array2.push(z);
        }
        array2 = shuffle(array2)

        //ciclo for per estrarre solo 16 bombe
        for (bombe = 1; bombe <= 16; bombe++) {
            bombeArray.push(array2[bombe])
        }
        console.log(bombeArray)


        //ciclo per creare le celle e i numeri in base ai livelli 
        for (i = 1; i <= celleLivello; i++) {
            let divContainer = document.createElement("div");
            //aggiungere una calsse al div creatp
            divContainer.classList.add("cell")
            //aggiungere i numeri alla singola cella
            divContainer.innerHTML = `${array[i]}`

            //appendere l'elemento creato dentro il div in html con id box
            box.appendChild(divContainer);

            divContainer.addEventListener("click", addClick);

            function addClick() {
                //confronto tra i numeRI normali e le bombe 
                if (bombeArray.includes(parseInt(divContainer.innerHTML))) {
                    //aggiungere una classe con colore rosso se clicco la bomba
                    this.classList.add("color-bomb");
                    alert(`Game over! Hai totalizzato ${puntiFatti.length} punti`);
                    location.reload();

                    //divContainer.removeEventListener("click", addClick)
                } else {
                    //mettere una classe al this
                    this.classList.add("color-cell")
                    puntiFatti.push(document.querySelectorAll("color-cell"))
                }
            }
        }
    }
)