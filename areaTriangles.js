var firstOptionButton = document.querySelector("#first-option-button");
var secondOptionButton = document.querySelector("#second-option-button");
var thirdOptionButton = document.querySelector("#third-option-button");

var displayOptionOneForm = document.querySelector("#option-one-form");
var displayOptionTwoForm = document.querySelector("#option-two-form");
var displayOptionThreeForm = document.querySelector("#option-three-form");

var baseInput = document.querySelector("#base-input");
var heightInput = document.querySelector("#height-input");
var sideAInput = document.querySelector("#sidea-input");
var sideBInput = document.querySelector("#sideb-input");
var sideCInput = document.querySelector("#sidec-input");
var bSideInput = document.querySelector('#bSide-input');
var cSideInput = document.querySelector('#cSide-input');
var angleInput = document.querySelector("#angle-side-input");

var optionOneButton = document.querySelector("#option-one-button");
var optionTwoButton = document.querySelector("#option-two-button");
var optionThreeButton = document.querySelector("#option-three-button");

var optionOneResult = document.querySelector("#option-one-result");
var optionTwoResult = document.querySelector("#option-two-result")
var optionThreeResult = document.querySelector("#option-three-result");

displayOptionOneForm.style.display = "none";
displayOptionTwoForm.style.display = "none";
displayOptionThreeForm.style.display = "none";

firstOptionButton.addEventListener('click', () =>{
    displayOptionOneForm.style.display = "block";
    displayOptionTwoForm.style.display = "none";
    displayOptionThreeForm.style.display = "none";

    optionOneButton.addEventListener('click', () =>{
        var base = Number(baseInput.value);
        console.log("Base: " + base);
        var height = Number(heightInput.value);
        console.log("Height: " + height);
        var area = 0.5 * base * height;
        console.log("Area: " + area);

        if(area === 0) {
            optionOneResult.innerHTML = 'Enter valid value (The result must be 0)';
        } else {
            optionOneResult.innerHTML = "Area: " + area.toFixed(2);
        }
    })
})

secondOptionButton.addEventListener('click', () => {
    displayOptionTwoForm.style.display = "block";
    displayOptionOneForm.style.display = "none";
    displayOptionThreeForm.style.display = "none";    

    optionTwoButton.addEventListener('click', () => {
        var sideA = Number(sideAInput.value);
        console.log("Side A: " + sideA);
        var sideB = Number(sideBInput.value);
        console.log("Side B: " + sideB);
        var sideC = Number(sideCInput.value);
        console.log("Side C: " + sideC);
        
        var s = (sideA + sideB + sideC) / 2;
        console.log("S: " + s);

        var result = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
        if(result === 0) {
            optionTwoResult.innerHTML = "Enter valid values (The result must be 0)";
        } else {
            optionTwoResult.innerHTML = "Area: " + result.toFixed(2);
        }
        console.log("Result: " + result);
    })
})

thirdOptionButton.addEventListener('click', () => {
    displayOptionThreeForm.style.display = "block";
    displayOptionOneForm.style.display = "none";
    displayOptionTwoForm.style.display = "none"; 

    optionThreeButton.addEventListener('click', () => {
        var sideB = Number(bSideInput.value);
        console.log(sideB);
        var sideC = Number(cSideInput.value);
        console.log(sideC);
        var angle = Number(angleInput.value);
        console.log(angle);

        var result = 0.5 * sideB * sideC * Math.sin(angle);
        console.log(result);

        if(result === 0) {
            optionThreeResult.innerHTML = 'Enter valid values (The result must be 0)';
        } else {
            optionThreeResult.innerHTML = "Area: " + result.toFixed(2);
        }
    })
})

