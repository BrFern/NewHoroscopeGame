
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
        if (dieOneValue > dieTwoValue) {
          winnerDisplay.innerHTML="Pos I. Tivvibes has won the dice roll! Take that universe!";
        } else if (dieOneValue < dieTwoValue) {
          winnerDisplay.innerHTML="Uh-oh! Zoe D. Yak Killer has won the dice roll!";
         } else if (dieOneValue === dieTwoValue) 
          winnerDisplay.innerHTML="The cosmic energy has aligned too much! Roll again!";
        }
        console.log(displayOutcome())

        //Subtracting health
        function subtractHealth() {
            if (dieOneValue > dieTwoValue) {
             computer.health -= 1
             document.getElementById(".computer").innerHTML = "You hit that killer! Keep going!"
        } else if (dieOneValue < dieTwoValue) {
            player.health -= 1
            document.getElementById(".player").innerHTML = "Ouch, you got hit! Still keep them positive vibes!"
        } else if (dieOneValue === dieTwoValue) {
            winnerDisplay.innerHTML="The cosmic energy has aligned too much! Roll again!";
        };
           
        console.log(subtractHealth())
        //Game Loop
        function gameLoop() {
        while (player.health > 0) {
            if (player.health && computer.health > 0) {
                alert ("Keep that cosmic energy going!")
            } else if (computer.health == 0) {
                alert ("Yasss, you killed the Zoe D. Yak Killer. Wait does that make you one?")
            } else if (player.health == 0) {
                alert ("Darn, your cosmic energy wasn't enough this time. Must be a Mars Retrograde or somethin'. Maybe choose a character with better cosmic energy next time. ")
            }
        }
            console.log(gameLoop())
        }
        
    }
        

    document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
  
    },
    1000
    );
}
