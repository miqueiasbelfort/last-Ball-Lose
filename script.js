

const balls = document.querySelectorAll('.balls')
const ballInfoColro = document.querySelector('.ballInfo')
let clicks = 0
const popup = document.querySelector('.popup')
const boxGame = document.querySelector('.boxOfGame')
const score = document.querySelector('.score')

function start(){
    popup.classList.add('desableGame')
    boxGame.classList.add('startGame')
}

balls.forEach((elemt, indece) => {
    elemt.addEventListener('click', e => {

        clicks++
        
        if(clicks <= 3){

            e.target.classList.add('red')
            ballInfoColro.classList.add('red')

        } else if (clicks >= 4) {

            e.target.classList.add('blue')
            ballInfoColro.classList.add('blue')

            if(clicks == 6){
                clicks = 0
            }
        }
    })
})

function mudarCor(){
    if (clicks <= 3){
        clicks = 3
        //console.log('Blue')
    } else {
        clicks = 0
        //console.log('Red')
    }
}

function pontuar(){
    let redPonts = 0
    let bluePoint = 0

    if (clicks <= 3){
        bluePoint++
        //console.log('ultimo red')
    } else if (clicks >= 4 && clicks <= 6){
        redPonts ++
        //console.log('ultimo blue')
    }

    score.innerHTML = `Red: ${redPonts} Blue: ${bluePoint}`

}


function reiniciar(){
    window.location.reload()
    //console.log(`Parou no ${clicks}`)
}