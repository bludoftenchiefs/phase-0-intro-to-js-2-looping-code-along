// Code your solutions in this file
const cards = (['Lisa', 'Kaitlin', 'Jan']);
let eventName = ('surprise');

function writeCards(cards) {
    let newArray = []
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);   
    }
    return newArray; 
}

writeCards(cards);

function countDown(number) {
  while (number > 0 - 1) {
  console.log(number--);
  } 
}
