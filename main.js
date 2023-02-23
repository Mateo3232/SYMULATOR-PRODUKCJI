let magazyn = [];
let kompensator;
let meterStart;
let meterEnd;
let meterMarking = 0;
let magazynResult = document.querySelectorAll('.magazynSelector');
let startnResult = document.querySelectorAll('.startSelector');
let EndResult = document.querySelectorAll('.endSelector');
let startProd = document.getElementById('produkcjaSTART');
let stopProd = document.getElementById('produkcjaSTOP');
let startOdb = document.getElementById('odbieraczSTART');
let stopOdb = document.getElementById('odbieraczSTOP');
let kompensatorSelector = document.getElementById('kompensator');
let intervalMagazine;
let intervalOdb;

// for (i = 0; i < 95; i ++){
//     magazyn.unshift(i)
// }

function collectKilometers (){
kompensator = JSON.stringify(magazyn)
kompensatorSelector.innerHTML = kompensator
magazyn.unshift(`${meterMarking} m`)
magazynResult[0].innerHTML = magazyn[0]
meterMarking += 1
console.log(magazyn[0])  
}

function startProduction (){
    if(!intervalMagazine)
    {
    intervalMagazine = setInterval(collectKilometers, 600)
    }
}

function stopProduction(){
clearInterval(intervalMagazine)
intervalMagazine = null
}

startProd.addEventListener("click", startProduction);
stopProd.addEventListener("click", stopProduction);

function collectOdb(){
    kompensator = JSON.stringify(magazyn)
    kompensatorSelector.innerHTML = kompensator
    EndResult[0].innerHTML =  magazyn.pop()
}

function startOdbieracz (){
    
    if(!intervalOdb)
    {
        intervalOdb = setInterval(collectOdb, 300)
        if(EndResult[0].innerHTML == ''){startnResult[0].innerHTML = '0 m'}
       else{setTimeout(()=>startnResult[0].innerHTML =  EndResult[0].innerHTML, 300) }
    }
    
}

function stopOdbieracz(){
clearInterval(intervalOdb)
intervalOdb = null
}

startOdb.addEventListener("click", startOdbieracz);
stopOdb.addEventListener("click", stopOdbieracz);