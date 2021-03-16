//Esercizio 1
/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */
 console.log(`Esercizio 1:

 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
 `);
 minPeso = 100;
 var biciclette = [
    {
        'nome': 'Merida',
        'peso': 21
    },
    {
        'nome': 'Marin',
        'peso': 20
    },
    {
        'nome': 'Kona',
        'peso': 19
    },
    {
        'nome': 'Scott',
        'peso': 18
    },
    {
        'nome': 'Santa Cruz',
        'peso': 22
    },
];

console.log(biciclette);

biciLeggera = {};

biciclette.forEach((element) => {
    const {nome, peso} = element;
    if (minPeso > peso) {
        minPeso = peso;
        biciLeggera = element;
    }
});

console.log(`La biciletta più leggera è:
Marca: ${biciLeggera.nome}
Peso: ${biciLeggera.peso}`);


/////////////////////////////////////////////////////////////////////
//Esercizio 2
/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 
0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console. */

console.log(`Esercizio 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 
0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
contengono solo nomi e falli subiti e stampiamo tutto in console.`);

var squadre = [
    {
        'nome': "Como",
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': "Pro Vercelli",
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': "Renate",
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': "Lecco",
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': "Pro Patria",
        'puntiFatti': 0,
        'falliSubiti': 0
    }
];

console.log(squadre);

var squadre2 = [];

squadre.forEach((element) => {
    element.puntiFatti = Math.floor(Math.random() * (80 - 1 + 1)) + 1;
    element.falliSubiti = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

    const {nome, falliSubiti} = element;
    let nuovoElemento = {};
    nuovoElemento.nome = nome;
    nuovoElemento.falliSubiti= falliSubiti;
    squadre2.push(nuovoElemento);
});

console.log(squadre2);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 3
/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter */

console.log(`Esercizio 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter`);

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxEsercizio3 = Math.floor(Math.random()* 9 + 1);
const minEsercizio3 = Math.floor(Math.random()* maxEsercizio3);


let range = {
    max: maxEsercizio3,
    min: minEsercizio3
};

console.log(range);

let numeriInRange = [];
let arrayRisultato = array.forEach((element, index) => {

    if (index >= range.min && index <= range.max){
        numeriInRange.push(element);
    }
});

console.log(numeriInRange);


//Esercizietto con filter
/* let array2 = array.filter(element => {
    return element%2 === 0;
});

console.log(array2); */