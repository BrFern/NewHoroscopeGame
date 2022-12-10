let player;

function Player(classType, health) {
    this.classType = classType;
    this.health=health;
}

let computer
function Computer(classType, health) {
    this.classType = classType;
    this.health=health;
}

const enemy = new Computer("Zoe D. Yak Killer", 12);
const playerOne = new Player("Your Cosmic Energy", 12)


