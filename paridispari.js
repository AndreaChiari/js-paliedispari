console.log('JS OK')
/*
1)scegliere tra pari o dispari
2)inserire un numero da 1 a 5 tramite form
3)genero un numero random per il computer usando una funzione
4)sommo i due numeri
5)stabilisco se la somma e' pari o dispari usando una funzione
6)dichiaro il vincitore
*/

// prendo gli elementi dal DOM
const button = document.getElementById('button')
console.log(input)

// scelgo pari e dispari tramite un prompt
const pairUnpair = prompt("pari o dispari?");
console.log(pairUnpair);


// creo un input che forzi a scegliere dei numeri da 1 - 5 
button.addEventListener("click",function(){
    const input = input.document.getElementById("input").value
    console.log(input)

})