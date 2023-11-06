import { Teste } from "./ola.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".soundOn")
const buttonSoundOf = document.querySelector(".soundOff")
let minutes
let setTimeCount
let minutesDisplay = document.querySelector(".minute")
let secundeDisplay = document.querySelector(".segundos")

function resetControllers() {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  buttonStop.classList.add("hide")
  buttonSet.classList.remove("hide")
}

function updateDisplay(minute, segundo) {
  minutesDisplay.textContent = String(minute).padStart(2, "0")
  secundeDisplay.textContent = String(segundo).padStart(2, "0")
}

function contDown() {
  setTimeCount = setTimeout(() => {
    let segundos = Number(secundeDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes == 0 && segundos == 0) {
      resetControllers()
      return
    }

    if (segundos <= 0) {
      segundos = 60
      --minutes
    }
    updateDisplay(minutes, segundos - 1)
    contDown()
  }, 1000)
}

buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSet.classList.add("hide")
  contDown()
})
buttonPause.addEventListener("click", () => {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")

  clearTimeout(setTimeCount)
})
buttonStop.addEventListener("click", () => {
  clearTimeout(setTimeCount)
  resetControllers()
  updateDisplay(0, 0)
})
buttonSoundOn.addEventListener("click", () => {
  buttonSoundOn.classList.add("hide")
  buttonSoundOf.classList.remove("hide")
})
buttonSoundOf.addEventListener("click", () => {
  buttonSoundOf.classList.add("hide")
  buttonSoundOn.classList.remove("hide")
})

buttonSet.addEventListener("click", () => {
  minutes = prompt("Quantos minutos?") || 0
  if (isNaN(minutes)) {
    updateDisplay(0, 0)
    return
  }
  updateDisplay(minutes, 0)
})

Teste.testes()
