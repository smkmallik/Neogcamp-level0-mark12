var lengthInput = document.querySelector("#length-input");
var heightInput = document.querySelector("#height-input");
var calculateHypotenuseButton = document.querySelector("#calculate-button");
var hypotenuseResult = document.querySelector("#hypotenuse-answer");

calculateHypotenuseButton.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    var length = Number(lengthInput.value);
    console.log(length);
    var height = Number(heightInput.value);
    console.log(height);

    var answer = Math.sqrt(Math.pow(length,2)+Math.pow(height,2));
    console.log(answer);

    hypotenuseResult.innerHTML = "The result is " + answer.toFixed(2);

}