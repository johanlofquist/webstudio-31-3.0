let mosquito = document.querySelector("#mosquito")
let x = 200
let y = 500

setInterval(fly, 5);


function fly() {
    let randomX = Math.floor(Math.random() * 5) - 2
    let randomY = Math.floor(Math.random() * 5) - 2
    x += randomX
    y += randomY
    mosquito.style.top = y + "px" 
    mosquito.style.right = x + "px" 
    console.log(randomX)
}