let millisseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

let timer = null

let time = document.querySelector(".time")

const btnStart = document.querySelector(".Start")
const btnStop = document.querySelector(".Stop")
const btnReset = document.querySelector(".Reset")

function Start() {
  if (timer !== null) return 
  timer = setInterval(() => {
    millisseconds ++

    if(millisseconds === 100) {
      millisseconds = 0
      seconds++
    }

    if(seconds === 60) {
      seconds = 0
      minutes++
    }

    if(minutes === 60) {
      minutes = 0
      hours++
    }

    updateDisplay()
  }, 10)
}

function Stop () {
  clearInterval(timer)
  timer = null
}

function Reset () {
  clearInterval(timer)
  timer = null

  millisseconds = 0
  seconds = 0
  minutes = 0
  hours = 0

  updateDisplay()
}

function updateDisplay () {

  let h = hours < 10 ? "0" + hours : hours
  let m = minutes < 10 ? "0" + minutes : minutes
  let s = seconds < 10 ? "0" + seconds : seconds 
  let ms = millisseconds < 10 ? "0" + millisseconds : millisseconds

  time.innerText = `${h}:${m}:${s}:${ms}`
}

btnStart.addEventListener("click", Start)
btnStop.addEventListener("click", Stop)
btnReset.addEventListener("click", Reset)

