let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Multan'];
console.log(cities[0]);

// print original string ----------------------------------------------------------- !
for (let i = 0; i < cities.length; i++) {
    document.getElementById("originalString").innerHTML += i + 1 + ') ' + cities[i] + '&emsp;';
}

// clear input --------------------------------------------------------------------- !

function clearInput() {
    document.getElementById("inputText").value = "";
}

// clear result -------------------------------------------------------------------- !

function clearResult(blank) {
    document.getElementById("output").innerHTML = blank
}

// show output function ------------------------------------------------------------ !

function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}

// simple alert function ----------------------------------------------------------- !

function simpleAlert() {
    alert("I'm alert.")
}

// printMyName function ------------------------------------------------------------- !

function printMyName() {
    let myName = document.getElementById("inputText").value;
    let cap = myName.charAt(0).toUpperCase() + myName.slice(1)
    if (!cap) {
        alert("Please Enter Your Name.");
        return;
    }
    showOutput(cap);
}

// print all cities function --------------------------------------------------------- ! 

function printAllCities() {
    clearResult('');
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ') ' + cities[i] + "<br />";
    }
}

// create city function --------------------------------------------------------------- !

function addCity() {
    clearResult('');

    let city = document.getElementById("inputText").value;
    let capCity = city.charAt(0).toUpperCase() + city.slice(1);

    if (!capCity) {
        alert("Please enter your city name.");
        return;
    }

    cities.push(capCity);
    let html = '<span style ="color:green; font-size: 25px">"' + capCity + '"</span> has been successfully added to your list.';
    showOutput(html)
}

// create table function ---------------------------------------------------------------- !

function generateTabel() {
    let number = document.getElementById('inputText').value;

    if (!number) {
        alert("Please type your number.");
        return;
    }
    clearResult('');
    let generatorNumber = +prompt("what is a number where you create number");
    for (let num = 1; num <= generatorNumber; num++) {
        document.getElementById("output").innerHTML += number + " x " + num + " = " + number * num + "<br />";
    }
}