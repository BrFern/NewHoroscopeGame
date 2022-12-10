
let images = ["../decor/images/dice/dice1.png",
"../decor/images/dice/dice2.png", 
"../decor/images/dice/dice3.png",
"../decor/images/dice/dice4.png",
"../decor/images/dice/dice5.png",
"../decor/images/dice/dice6.png" ];



let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die) {
        die.classList.add("shake");
    });

    //Setting a stop on the animation
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });

     

        //Randomize the dice roll
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6); 
        // console.log(dieOneValue, dieTwoValue)

        function displayOutcome() {
            let winnerDisplay = document.getElementById("roll-dice")
            // let subtractCompHealth = document.getElementById("computer")
            // let subtractPlayerHealth = document.getElementById("player-one")
        if (dieOneValue > dieTwoValue) {
          winnerDisplay.innerHTML="Player one has won the dice roll!";
          // subtractCompHealth.innerHTML = (computer.health- 1)
        } else if (dieOneValue < dieTwoValue) {
          winnerDisplay.innerHTML="Computer has won the dice roll!";
          // subtractPlayerHealth.innerHTML = (player.health - 1)
         } else if (dieOneValue === dieTwoValue) 
          winnerDisplay.innerHTML="It's a tie! Re-roll!";
        }

        displayOutcome()
       
        
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
  
    },
    1000
    );
}
