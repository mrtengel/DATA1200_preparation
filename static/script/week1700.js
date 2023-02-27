function printName() {
    let nameEntered = document.getElementById('full-name').value;
    document.getElementById('name-print').innerHTML = nameEntered;
}

function printAge() {
    let ageEntered = document.getElementById('age').value;
    ageEntered = parseInt(ageEntered);
    if (ageEntered >= 1) {
    document.getElementById('age-print').innerHTML = ageEntered + ' years registered, thanks!';
        }
        else {
            document.getElementById('age-print').innerHTML = "Age is not a number, or too low";
        }
}


let celcius = document.getElementById('celcius').value;
let farenheit = document.getElementById('farenheit').value;

let fConverted = (celcius * (9/5) + 32);
let cConvert = farenheit * (5/9) - 32;

function cToF() {
    document.getElementById('farenheitPrint') = fConverted;
}

function fToC() {
    document.getElementById('celciusPrint') = cConverted;
}