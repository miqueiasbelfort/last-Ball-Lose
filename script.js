

const balls = document.querySelectorAll('.balls')
const ballInfoColro = document.querySelector('.ballInfo')
let clicks = 0
const popup = document.querySelector('.popup')
const boxGame = document.querySelector('.boxOfGame')
//const score = document.querySelector('.score')

const pontuar = document.getElementById('pontuar')

let bp = 0
let rp = 0

function start(){
    popup.classList.add('desableGame')
    boxGame.classList.add('startGame')
}

balls.forEach((elemt, indece) => {
    
    elemt.addEventListener('click', e => {

        clicks++
        console.log(clicks)
        if(clicks <= 3){

            e.target.classList.add('red')
            ballInfoColro.classList.add('red')
            if(ballInfoColro.classList.contains('blue')){
                ballInfoColro.classList.remove('blue')
            }

        } else if (clicks >= 4) {

            e.target.classList.add('blue')
            if(ballInfoColro.classList.contains('red')){
                ballInfoColro.classList.remove('red')
                ballInfoColro.classList.add('blue')
            }

        } else if (clicks >= 6){
            clicks = 0
        }


        pontuar.addEventListener('click', () => {
            const redPonts = document.getElementById('redPoint')
            const bluePoint = document.getElementById('bluePoint')

            if(e.target.classList.contains('red')){
                e.target.classList.remove('red')
                
            } else if (e.target.classList.contains('blue')){
                e.target.classList.remove('blue')
            }

            if (clicks <= 3){
                bp++
                //console.log(bp)
                bluePoint.innerHTML = bp
                clicks = 0
            } else {
                rp++
                //console.log(rp)
                redPonts.innerHTML = rp
                clicks = 0
            }
        
        })       
    })
})

function mudarCor(){
    if (clicks <= 3){
        clicks = 3

        if(ballInfoColro.classList.contains('red')){
            ballInfoColro.classList.remove('red')
            ballInfoColro.classList.add('blue')
        }
        //console.log('Blue')
    } else {
        clicks = 0

        if(ballInfoColro.classList.contains('blue')){
            ballInfoColro.classList.remove('blue')
            ballInfoColro.classList.add('red')
        }
        //console.log('Red')
    }
}

function reiniciar(){
    window.location.reload()
    clicks = 0
    //console.log(`Parou no ${clicks}`)
}