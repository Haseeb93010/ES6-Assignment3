let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Multan'];
console.log(cities[0]);

// clear input --------------------------------------------------------------------- !

function clearInput(){
    document.getElementById("inputText").value ="";
}

// clear result -------------------------------------------------------------------- !

function clearResult(){
    document.getElementById("output").innerHTML =""
}

// show output function ------------------------------------------------------------ !

function showOutput(output){
    document.getElementById("output").innerHTML = output;
}

// simple alert function ----------------------------------------------------------- !

function simpleAlert(){
    alert("I'm alert.")
}

// printMyName function ------------------------------------------------------------- !

function printMyName(){
    let myName = document.getElementById("inputText").value;
    if(!myName){
        alert("Please Enter Your Name.");
        return;
    }
    showOutput(myName);
}
