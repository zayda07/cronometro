let timeRef = Date.now()
let acumulate = 0
let play = false

console.log(timeRef)

setInterval(() => {

    let counter = document.getElementById("counter")
    
    if(play){
        
        acumulate += Date.now()-timeRef
        
    }
    timeRef = Date.now()
    counter.innerHTML= formatMS(acumulate)

}, 1000/2000); // para que se refresque a 60 fotogramas por segundo 

function formatMS(time_ms) {

    let MS = time_ms % 1000
    let S = Math.floor(((time_ms - MS) / 1000) % 60)
    let M = Math.floor((S/60)%60)
    let H = Math.floor((M/60))

    Number.prototype.ceros = function(n){

        return (this+"").padStart(n,0)

    }
    return H.ceros(2)+":"+M.ceros(2)+":"+S.ceros(2)+"."+MS.ceros(3)

}

// BOTONES

function start() {

    play = true

}

function pause() {

    play = false

} 

function restart() {

    acumulate = 0

}