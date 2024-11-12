let choice = ["gunting", "batu", "kertas"];
let playerChoice
const comDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function menang(){
    console.log("menang")
    resultDisplay.textContent = "Kamu menang!!!";
    resultDisplay.style.backgroundColor ="lightgreen";
}

function kalah(){
    console.log("kalah")
    resultDisplay.textContent = "Kamu kalah!!!";
    resultDisplay.style.backgroundColor = "tomato";
}

function start(playerChoice){
    const computerChoice = choice[Math.floor(Math.random()*3+1)] 
    if (playerChoice) {
        if (playerChoice == computerChoice){
            console.log("seri")
        }
        else{
            switch (true){
                case playerChoice == "gunting":
                    console.log(computerChoice)
                    comDisplay.textContent = computerChoice
                    computerChoice == "kertas" ? menang() : kalah();
                    break;
                case playerChoice == "batu":
                    console.log(computerChoice)
                    comDisplay.textContent = computerChoice
                    computerChoice == "gunting" ? menang() : kalah();
                    break;
                case playerChoice == "kertas":
                    console.log(computerChoice)
                    comDisplay.textContent = computerChoice
                    computerChoice == "batu" ? menang() : kalah();
                    break;
                default:
                    console.error("I DONT KNOW, IN CODE :L.M.A.O.")
            }
        }
    }
    else {
       console.error("error undefined") 
       window.alert("pilih setidaknya satu benda")
    }


}
