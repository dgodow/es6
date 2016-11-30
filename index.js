class Character {
  constructor (name, attackPower, health) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
  }

  attack (opposingPlayer) {
    if (Math.random() > 0.5) opposingPlayer.health -= this.attackPower;
  }
}

const ryu = new Character('ryu', 2, 30);
const ken = new Character('ken', 4, 20);

////////////////////////

let winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

let result = winnerArr.map(winner => ({winner: winner}));

////////////////////////

let foo = 'bar';
console.log(foo);

const x = 42;
// x = 'buffalo wings';
console.log('the meaning of life is', x);

////////////////////////

function battle (fighter1, fighter2) {
  let win = false;
  let winner;

  function winCheck (fighter1, fighter2) {
    if (fighter1.health <= 0) {
      win = true;
      winner = fighter2;
    }
  }

  while (!win) {
    fighter1.attack(fighter2);
    winCheck(fighter1, fighter2);
    fighter2.attack(fighter1);
    winCheck(fighter2, fighter1);
  }

  return `${winner.name} is the winner!`;
}

console.log(battle(ryu, ken));