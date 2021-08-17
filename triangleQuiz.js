var submitButton = document.querySelector(".submit-button");
var totalScore = document.querySelector(".quiz-score");
var quizComments = document.querySelector(".quiz-comments");

var correctScore = 0;

submitButton.addEventListener('click', submitQuiz);

function submitQuiz() {
    var answer1 = document.triangleQuiz.question1.value;
    var answer2 = document.triangleQuiz.question2.value;
    var answer3 = document.triangleQuiz.question3.value;
    var answer4 = document.triangleQuiz.question4.value;
    var answer5 = document.triangleQuiz.question5.value;
    var answer6 = document.triangleQuiz.question6.value;
    var answer7 = document.triangleQuiz.question7.value;
    var answer8 = document.triangleQuiz.question8.value;
    var answer9 = document.triangleQuiz.question9.value;
    var answer10 = document.triangleQuiz.question10.value;

    console.log("old current score:" + correctScore)

    if(answer1 == "Yes") {
        correctScore++;
        console.log("Question1:- Correct!");
        console.log("updated score after question1: " + correctScore);
        console.log('answer1: ' + answer1)
    } else {
        console.log("Question1:- Wrong!")
    }
    if(answer2 == "No") {
        correctScore++;
        console.log("Question2:- Correct");
        console.log("updated score after question2: " + correctScore);
        console.log('answer2: ' + answer2);
    } else {
        console.log("Question2:- Wrong");
    }
    if(answer3 == "Yes") {
        correctScore++;
        console.log("Question3:- Correct");
        console.log("updated score after question3: " + correctScore);
        console.log('answer3: ' + answer3)
    } else {
        console.log("Question3:- Wrong");
    }
    if(answer4 == "Yes") {
        correctScore++;
        console.log("Question4:- Correct");
        console.log("updated score after question4: " + correctScore);
        console.log('answer4: ' + answer4)
    } else {
        console.log("Question4:- Wrong");
    }
    if(answer5 == "Yes") {
        correctScore++;
        console.log("Question5:- Correct");
        console.log("updated score after question5: " + correctScore);
        console.log('answer5: ' + answer5);
    } else {
        console.log("Question5:- Wrong");
    }
    if(answer6 == "Isosceles") {
        correctScore++;
        console.log("Question6:- Correct");
        console.log("updated score after question6: " + correctScore);
        console.log('answer6: ' + answer6)
    } else {
        console.log("Question6:- Wrong");
    }
    if(answer7 == "30") {
        correctScore++;
        console.log("Question7:- Correct");
        console.log("updated score after question7: " + correctScore);
        console.log('answer7: ' + answer7)
    } else {
        console.log("Question7:- Wrong");
    }
    if(answer8 == "Both") {
        correctScore++;
        console.log("Question8:- Correct");
        console.log("updated score after question8: " + correctScore);
        console.log('answer8: ' + answer8)
    } else {
        console.log("Question8:- Wrong");
    }
    if(answer9 == "5cm") {
        correctScore++;
        console.log("Question9:- Correct");
        console.log("updated score after question9: " + correctScore);
        console.log('answer9: ' + answer9)
    } else {
        console.log("Question9:- Wrong");
    }
    if(answer10 == "Scaler") {
        correctScore++;
        console.log("Question10:- Correct");
        console.log("updated score after question10: " + correctScore);
        console.log('answer10: ' + answer10)
    } else {
        console.log("Question10:- Wrong");
    }

    console.log("Updated Score:- " + correctScore);

    totalScore.innerHTML = "The score is: " + correctScore;

    if(correctScore <= 4) {
        quizComments.innerHTML = "Better read more about Triangles";
        submitButton.disabled = true;
    } else if(correctScore >=5 && correctScore<=7) {
        quizComments.innerHTML = "That's good!";
        submitButton.disabled = true;
    } else if(correctScore >=8) {
        quizComments.innerHTML = "Great Job!";
        submitButton.disabled = true;
    }
    
}