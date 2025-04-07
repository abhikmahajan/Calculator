const output = document.getElementById("output");

function appendtoDisplay(input){
    output.value += input;
}

function clearDisplay(){
    output.value = "";
}

function calculate(){
    try{
    output.value = eval(output.value);
    }
    catch(Error){
        output.value = "ERROR";
    }
}