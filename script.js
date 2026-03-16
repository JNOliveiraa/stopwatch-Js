
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
    seconds ++

    if(seconds === 60) {
      seconds = 0
      minutes ++ 
    }

    if (minutes === 60) {
      minutes = 0
      hours ++
    }

    updateDisplay()
  }, 1000)
}

function Stop () {
  clearInterval(timer)
  timer = null
}

function Reset () {
  clearInterval(timer)
  timer = null

  seconds = 0
  minutes = 0
  hours = 0

  updateDisplay()
}

function updateDisplay () {

  let h = hours < 10 ? "0" + hours : hours
  let m = minutes < 10 ? "0" + minutes : minutes
  let s = seconds < 10 ? "0" + seconds : seconds 

  time.innerText = `${h} : ${m} : ${s}`
}

btnStart.addEventListener("click", Start)
btnStop.addEventListener("click", Stop)
btnReset.addEventListener("click", Reset)

