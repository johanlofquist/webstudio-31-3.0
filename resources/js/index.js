let mosquito = document.querySelector("#mosquito")
let x = 200
let y = 500

setInterval(fly, 30);


function fly() {
    let randomX = Math.floor(Math.random() * 9) - 4
    let randomY = Math.floor(Math.random() * 9) - 4
    x += randomX
    y += randomY
    mosquito.style.top = y + "px" 
    mosquito.style.right = x + "px" 
    console.log(randomX)
}