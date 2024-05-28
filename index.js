// NOTE: The html input type="number" can take floating point numbers
// Can be used to our advantage in order to make our calculator work with both
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("user-inputted-number")
const lengthResultEl = document.getElementById("length-result")
const convertBtnEl = document.getElementById("convert-btn")
const volumeResultEl = document.getElementById("volume-result")
const massResultEl = document.getElementById("mass-result")
convertBtnEl.addEventListener("click",function(){
    const inputtedValue = inputEl.value
    calculateLength(inputtedValue)
    calculateVolume(inputtedValue)
    calculateMass(inputtedValue)

})


function calculateLength(number){
    number = Number(number) // Since on html it's a string
    let feet = number * 3.28084 // If inputted number is meters calculate feet
    feet = parseFloat(feet.toFixed(3))
    // If feet calculate meters
    let meters =  parseFloat((number / 3.28084).toFixed(3)) 
    let string = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`
    console.log("length?")
    lengthResultEl.innerText = string
}


function calculateVolume(number){
    number = Number(number)
    let gallons = number * 0.264172
    gallons = parseFloat(gallons.toFixed(3))

    let liters = number / 0.264172
    liters = parseFloat(liters.toFixed(3))
    let string = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`
    volumeResultEl.innerText = string
}

function calculateMass(number){
    number = Number(number)
    let pounds = number * 2.20462
    pounds = parseFloat(pounds.toFixed(3))

    let kilograms = number / 2.20462
    kilograms = parseFloat(kilograms.toFixed(3))
    let string = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilograms} kilos`
    massResultEl.innerText = string
}