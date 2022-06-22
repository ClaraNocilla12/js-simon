// Visualizzare in pagina 5 numeri casuali.Da lì parte un timer 
// di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice 
// quanti e quali dei numeri da indovinare sono stati individuati.




const random=[];





    while(random.length < 5){
     randomNumber=getRandomInt(100);
        if (!random.includes(randomNumber)){
            random.push(randomNumber);
        }
    

    
    }

     document.getElementById('container').innerHTML = random;



setTimeout(reset, 5000);


setTimeout(function(){
const numbers=userNumber();

const guessed= check(numbers, random);
printGuessed(guessed);


},5100)








   function reset(){
       document.getElementById('container').innerHTML='';
       document.getElementById('message').innerHTML = 'Inserisci i numeri';

}


function userNumber(){
    let number=[];
    while(number.length < 5){
        let newNumber=parseInt(prompt('Dammi un numero'));
       
            number.push(newNumber);
        
    }
    return number;
}

function check(insertNumbers,toGuessNumbers){
    const guessed=[];

    for(let i=0; i<insertNumbers.length; i++){
        if(toGuessNumbers.includes(insertNumbers[i])){
            guessed.push(insertNumbers[i])
        }
    }
    return guessed;

}

function printGuessed(guessed){
    let text;
    if(guessed.length == 1){
        text = `hai fatto un punteggio di 1`;
    }else{
        text = `hai fatto un punteggio di ${guessed.length} `;
    }
    document.getElementById('container').innerHTML = text;
    document.getElementById('message').innerHTML = `hai indovinato: ${guessed}`;
}

 


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


