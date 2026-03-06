//перше завдання 
let box = document.querySelector(".box")
let minutes = 60

let timerID = setInterval(() => {
    minutes -= 1
    box.textContent = minutes + " хв"

    if (minutes === 30) {
        alert("Залишилось менше половини часу!")
    }

    if (minutes === 0) {
        clearInterval(timerID)
    }

}, 60000)

//друге завдання
let timerText = document.querySelector(".timerText")
let startBtn = document.querySelector(".startBtn")

let duration = 30000
let startTime
let interval
let timerRunning = false

function startTimer(){

    timerRunning = true
    startTime = Date.now()

    interval = setInterval(() => {

        let timeLeft = duration - (Date.now() - startTime)

        if(timeLeft <= 0){
            clearInterval(interval)
            timerText.textContent = "00:000"
            timerRunning = false
            return
        }

        let seconds = Math.floor(timeLeft / 1000)
        let milliseconds = timeLeft % 1000

        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(3,"0")

        timerText.textContent = `${seconds}:${milliseconds}`

        if(seconds <= 10){
            timerText.classList.add("timeAnimation")
        }

    },10)

}

startBtn.addEventListener("click", () => {

    if(timerRunning) return

    timerText.classList.remove("timeAnimation")
    startTimer()

})

startTimer()