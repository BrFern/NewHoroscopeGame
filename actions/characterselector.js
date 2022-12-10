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



// const horoscopeButtons = document.querySelectorAll('.horoscope')
// const allButtons = ["ho-1", "ho-2", "ho-3", "ho-4", "ho-5", "ho-6", "ho-7", "ho-8", "ho-9", "ho-10", "ho-11", "ho-12"];
// function userChoice() {
// for (let i = 0; i < 12; i++) {
//     if (allButtons[0]) { 
//         console.log("You picked Capricorn!")

//     }
// }
// }
// btn.addEventListener('click', userChoice())



// const urlSearchParams = new URLSearchParams('pages/battle.html?s=capricorn');
// urlSearchParams.get ('capricorn')

// function userDisplay () {
 
//     const urlSearchParams = new URLSearchParams('pages/battle.html?s=capricorn');
//     urlSearchParams.get ('capricorn')
//     document.getElementById('.playerChoice').innerHTML = "Welcome"
 
// }
// console.log(userDisplay())

