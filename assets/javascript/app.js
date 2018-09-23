


var questions = [
    {
          "question": "Light travels at the rate of 300000 km second. What distance will it travel in one light year?",
          "option1": "9.5 million km.",
          "option2": "9 million km.",
          "option3": "10 million km.",
          "option4": "8.5 million km.",
        "answer": "1"
    },
    {
        "question": "The river Liffey flows through a capital city. Name the city:",
        "option1": "Santa Fe",
        "option2": "Dublin",
        "option3": "Millan",
        "option4": "Berkshire",
      "answer": "2"
    },
    {
        "question": "Where is the world’s largest gas plant located?",
          "option1": "USSR",
          "option2": "Finland",
          "option3": "Slovakia",
          "option4": "Moldova",
        "answer": "1"
    },
    {
        "question": "Who defeated Muhammad Ali in 1978 in the World Heavyweight Championship?",
          "option1": "Herb Siler",
          "option2": "Anthony Esperti",
          "option3": "Jimmy Robinson",
          "option4": "Leon Spink",
        "answer": "4"
    },
    {
        "question": "Where does one hear the lowest noise?",
          "option1": "Cave",
          "option2": "Island",
          "option3": "Forest",
          "option4": "Desert",
        "answer": "4"
    },
    {
        "question": "After blood circulation stops, how long does the brain take to die?",
          "option1": "4 minutes",
          "option2": "2.5 minutes",
          "option3": "3 minutes",
          "option4": "6 minutes",
        "answer": "3"
    },
    {
        "question": "Which is the world’s oldest free public city library supported by municipal taxes?",
          "option1": "Arabian Library",
          "option2": "Geisel Library",
          "option3": "Boston Public Library",
          "option4": "Georgia State University Library",
        "answer": "3"
    },
    {
        "question": "For which vitamin is human requirement assumed but not proved?",
          "option1": "Vitamin E",
          "option2": "Vitamin C",
          "option3": "Vitamin B",
          "option4": "Folic  Acid",
        "answer": "1"
    },
    {
        "question": "Which disease is Gingivitis?",
          "option1": "Inflammation of lips",
          "option2": "Inflammation of liber",
          "option3": "kidney infection",
          "option4": "Inflammation of gums",
        "answer": "4"
    },
    {
        "question": "Where in the world are the great vampire bats found?",
          "option1": "Brazil",
          "option2": "Mexico",
          "option3": "Costa Rica",
          "option4": "Phillippines",
        "answer": "2"
    }
    
];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
        
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        alert("you got " + score + "/" + totQuestions);
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);



// var score = 0;


// // $("#question").text(questions[0].prompt);
// for(var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//          score++;
//          alert("Correct!");
//     } else {
//          alert("WRONG!");
//     }
// }
// alert("you got " + score + "/" + questions.length);


// $("#button").on("click", function(){
// $("#question").text(questions[i].prompt);

// }) 