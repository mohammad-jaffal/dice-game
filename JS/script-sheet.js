// condition is true only if reload occured, no need for additional comments :)
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {


    var img1 = document.getElementsByClassName("img1")[0]
    var img2 = document.getElementsByClassName("img2")[0]
    var statusTitle = document.getElementById("status-title")
    var flagImg = document.getElementsByClassName("flag-img")[0]


    var firstDice = Math.floor(Math.random() * 6) + 1;
    var secondDice = Math.floor(Math.random() * 6) + 1;


    img1.src = `./assets/dice${firstDice}.png`
    img2.src = `./assets/dice${secondDice}.png`

    if (firstDice == secondDice) {
        flagImg.style.display = "none"
        statusTitle.textContent = "Draw!"
    }

    if (firstDice > secondDice) {
        flagImg.style.display = "inline-block"
        flagImg.src = "./assets/finish.png"
        statusTitle.innerHTML = "Player 1 wins!"
    }

    if (firstDice < secondDice) {
        flagImg.style.display = "inline-block"
        flagImg.src = "./assets/finish.png"
        statusTitle.innerHTML = "Player 2 wins!"
    }

}