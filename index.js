// Code your solutions in this file
const writeCards = (['Lisa', 'Kaitlin', 'Jan']);
let eventName = ('surprise');

function cards(writeCards) {
    for (let i = 0; i < writeCards.length; i++) {
        console.log(`Thank you ${writeCards[i]} for the wonderful ${eventName} gift`);   
    }
    return writeCards; 
}

cards(writeCards);

let countDown = 10;
while (countDown > 0 - 1) {
  console.log(countDown--);
} 
