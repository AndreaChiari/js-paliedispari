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
const input = document.getElementById('input')
const button = document.getElementById('button')
const select = document.getElementById('select')
const pari = document.getElementById('pari')
const dispari = document.getElementById('dispari')

// creo un input che forzi a scegliere dei numeri da 1 - 5 e che siano pari o dispari in base alla scelta che ho fatto
let min = 1
let max = 5
const numberPair = (input.value % 2 === 0)
const numberUnpair = (input.value % 3,5 === 0)
const number = input.value

button.addEventListener('click', function(){
    if(isNaN(number) || number < min || number > max){
        alert('devi inserire un numero tra 1 e 5');
        return;
    }
    console.log(number);
})



























/*button.addEventListener("click",function(){
    const input = document.getElementById("input").value
    console.log(input)
    if(input > min && input < max){
    console.log(input);
}
    else(
        alert('inserire un numero corretto!')
    )
    
    function randomNumber(min=1, max=5){

        )
   
    
    
    randomNumber();
    
    // sommo i numeri
    if(isNaN(input)){
    const sum = (input + randomNumber())  
    console.log(sum);
    }
})
 */