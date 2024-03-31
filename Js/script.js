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
    if (!myName) {
        alert("Please Enter Your Name.");
        return;
    }
    showOutput(myName);
}

// print all cities function --------------------------------------------------------- ! 

function printAllCities(){
    clearResult('');
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ') ' + cities[i] + "<br />" ;
    }
}