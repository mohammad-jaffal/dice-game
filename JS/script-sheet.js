window.onload = function () {

    var img1 = document.getElementsByClassName("img1")[0]
    var img2 = document.getElementsByClassName("img2")[0]
    var statusTitle = document.getElementById("status-title")


    var firstDice = Math.floor(Math.random() * 6) + 1;
    var secondDice = Math.floor(Math.random() * 6) + 1;

    console.log(firstDice)
    console.log(secondDice)

    img1.src = `./assets/dice${firstDice}.png`
    img2.src = `./assets/dice${secondDice}.png`

    if (firstDice == secondDice){
        statusTitle.textContent = "Draw!"
    }

    if (firstDice > secondDice){
        statusTitle.textContent = "Player 1 wins! "
    }

    if (firstDice < secondDice){
        statusTitle.textContent = "Player 2 wins! "
    }


}