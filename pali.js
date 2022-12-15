console.log('JS OK');

/* 
1)chiedo all'utente di inserire una parola tramite un form
2)creo una funzione o piu' che vadano a dettare delle condizioni affinche' la parola sia palindroma
*/

// prendo gli elementi dal DOM
let input = document.getElementById("input").value;
const button = document.getElementById("button");

// Creo un event listener per memorizzare la parola scritta dall'utente
button.addEventListener("click", function(){
    input = document.getElementById("input").value;
    console.log(input);

// Validazione     
if(!isNaN(input)){
    alert("inserire solo parole!");
}
    
// Creo una prima funzione per verificare il senso di una parola

//DICHIARAZIONE
function palindromefirst(word){
 for(i=0; i < word.length; i++)
 console.log(word);
 return word;
}

 //INVOCAZIONE
palindromefirst('Anna');

// Creo una seconda funzione per verificare il senso di una parola

//DICHIARAZIONE
function reverseword(reverseword){
    for(let i = reverseword.length -1;  i >= 0 ; i--)
    result += reverseword[i];
    console.log(reverseword[i]);
    return reverseword;
}

//INVOCAZIONE 
reverseword('Marco');

    
});