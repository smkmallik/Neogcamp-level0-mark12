var angleAInput = document.querySelector('#angle-a-input');
var angleBInput = document.querySelector('#angle-b-input');
var angleCInput = document.querySelector('#angle-c-input');
var buttonInput = document.querySelector('#calculate-button');
var angleSolution = document.querySelector('.angles-solution');
var angleErrorSolution = document.querySelector('.angles-error-solution');

buttonInput.addEventListener("click", calculateSumOfAngles);

function calculateSumOfAngles() {
    var angleA = Number(angleAInput.value);
    var angleB = Number(angleBInput.value);
    var angleC = Number(angleCInput.value);

    console.log(angleA);
    console.log(angleB);
    console.log(angleC);

    var sum = angleA + angleB + angleC;
    console.log(sum);

    if(sum === 180) {
        angleSolution.innerHTML = "Provided angles make a triangle!";
    } else if(sum === 0) {
        angleSolution.innerHTML = "Enter valid values";
    } 
    else {
        angleSolution.innerHTML = "Provided angles does not make a triangle!";
    }
}