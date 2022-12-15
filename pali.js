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
    
// Creo una seconda funzione per verificare il senso di una parola

//DICHIARAZIONE

function verifyReverse(wordReverse){
    
    let reverseWord = "";

    console.log(wordReverse);

    for(let i = wordReverse.length -1;  i >= 0 ; i--){
        console.log(wordReverse[i]);
        reverseWord += wordReverse[i]; 
    }

    console.log(wordReverse);
    return reverseWord;
}
    

//INVOCAZIONE 
verifyReverse(input);

let parolaAlContrario = verifyReverse(input);
console.log(parolaAlContrario)



//Applico una condizionale che dimostri l'uguaglianza della parola sia normale che al contrario tra le due funzioni 
if(input === parolaAlContrario){
    alert('la parola è palindroma!');
}else{
    alert("la parola e diversa");
}
});
    