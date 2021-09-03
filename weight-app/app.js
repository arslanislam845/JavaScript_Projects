let lbs = document.querySelector("#lbsInput")
let g = document.querySelector("#gramsOutput")
let kg = document.querySelector("#kgOutput")
let oz= document.querySelector("#ozOutput")

lbs.addEventListener("input",function(e){
    
    g.innerHTML = `<h4>${e.target.value /  0.0022046}</h4>`
    kg.innerHTML = `<h4>${e.target.value /  0.0022046}</h4>`
    oz.innerHTML = `<h4>${e.target.value * 16}</h4>`
})