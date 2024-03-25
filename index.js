// Code your solutions in this file

function  writeCards(namesArray, events){
    let thankYouMessages = [];

    for(let i = 0; i < namesArray.length; i++){
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    
    return thankYouMessages;


}

function countDown(startingNumber){
    
    while( startingNumber> 0){
        console.log(startingNumber);
        startingNumber -=1;
    }

    console.log(startingNumber);


}