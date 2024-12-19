// javascript

const numEl = document.getElementById("num-el")
const btn = document.getElementById("btn-convert")
const divLength = document.getElementById("length-div")


const divVol = document.getElementById("vol-div")
const divMass = document.getElementById("mass-div")

btn.addEventListener("click",function(){
    let paragraphs = divLength.querySelectorAll('p');
    let paragraphs2 = divVol.querySelectorAll('p');
    let paragraphs3 = divMass.querySelectorAll('p');
    paragraphs.forEach(p=>p.remove())
    paragraphs2.forEach(p=>p.remove())
    paragraphs3.forEach(p=>p.remove())
    
    const value = numEl.value
    divLength.innerHTML+=`<p>${value} meters = ${(value*3.28084).toFixed(3)} feet | ${value} feet = ${(value/3.281).toFixed(3)} meters</p>`
    
    divVol.innerHTML+=`<p>${value} liters = ${(value/3.785).toFixed(3)} gallons | ${value} gallons = ${(value*3.785).toFixed(3)} liters</p>`
     
    divMass.innerHTML+=`<p>${value} kilos = ${(value*2.205).toFixed(3)} pounds | ${value} pounds = ${(value/2.205).toFixed(3)} kilos</p>`
     
})
