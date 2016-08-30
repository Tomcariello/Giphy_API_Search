//create objects for each question
var animals = ["cat","dog","rabbit","fish","turtle","hawk"];


function loadPresetAnimals() {
	$( ".jumbotron" ).html("");
	for (i=0; i < animals.length; i++) {
		console.log("sending " + animals[i]);
		drawButtons(animals[i]);
	}
}

$('#addAnimal').click(function() {
    
	drawButtons(animalToAdd);
});


function drawButtons(animalToPrint) {
	var buttonToPrint = ("<a class='btn btn-primary btn-lg choice' data-value='" + animalToPrint + "'role='button'>" + animalToPrint + "</a>");
	$( "#buttonContainer" ).append( buttonToPrint );
	trackChoices();
};

function trackChoices() {
	$('.choice').on('click', function(event) {
		var animalClicked = $(this).attr('data-value');
		$( ".jumbotron" ).html("");
		$( ".jumbotron" ).html(animalClicked);
	});
	
}


// function showAnswer() {
// 	$('#timerWindow').css("visibility","hidden");
// 	if (questionSuccess == true) {
// 		anwserToPrint = ("<h2>You got it!</h2><hr>");
// 	} else {
// 		anwserToPrint = ("<h2>Sorry, that was incorrect</h2><hr>");
// 	}
// 	$( ".jumbotron" ).html("");
// 	$( ".jumbotron" ).append( anwserToPrint + questionArray[currentQuestion].success);
// 	currentQuestion++;

// 	setTimeout(function(){
		
// 		printQuestion();
// 	},timeToDisplayAnswers); 
// }





// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
// }

// function printQuestion() {
// 	$('#timerWindow').css("visibility","visible");
// 	if (currentQuestion <= questionArray.length - 1) {
// 		questionSuccess = false;
	
// 		questionToPrint = ("<h2>" + questionArray[currentQuestion].text + "</h2><hr>");
// 			$( ".jumbotron" ).html("");
// 			$( ".jumbotron" ).append( questionToPrint );

// 		for (i=0; i<questionArray[currentQuestion].choices.length; i++) {
// 			choiceToPrint = ("<p><a class='btn btn-primary btn-lg choice' data-value='" + i + "'role='button'>" + questionArray[currentQuestion].choices[i] + "</a></p>");
// 			$( ".jumbotron" ).append( choiceToPrint );
// 		}
// 		startTimer();
// 		trackChoices();
// 	} else {
// 		showEndGame();
// 	}

// }


// function startTimer() {
// 	questionTimer = questionTimerLength;
// 	$('#timer').html(questionTimer);
// 	timerTarget = setInterval(function(){
// 		updateTimer();
// 	},1000); 
// }

// function updateTimer() {
// 	questionTimer--;
// 	$('#timer').html(questionTimer);
// 	if (questionTimer < 1 ) {
// 		clearInterval(timerTarget);
// 		questionsUnanswered++;
// 		showAnswer();
// 	} else if (questionTimer < 6 ) {
// 		$("#timer").addClass("lowTime");
// 	} 
// }


	


// function showEndGame(){
// 	$('#timerWindow').css("visibility","hidden");

// 	var correctInsertion;
// 	var incorrectInsertion;
// 	var unansweredInsertion;

// 	$( ".jumbotron" ).html("");
// 	$( ".jumbotron" ).append("<H1>Game Over!</h1>");
// 	if (questionAnsweredCorrectly == 1) {
// 		correctInsertion = "question";
// 	} else {
// 		correctInsertion = "questions";
// 	}

// 	if (questionAnsweredIncorrectly == 1) {
// 		incorrectInsertion = "question";
// 	} else {
// 		incorrectInsertion = "questions";
// 	}

// 	if (questionsUnanswered == 1) {
// 		unansweredInsertion = "question";
// 	} else {
// 		unansweredInsertion = "questions";
// 	}

// 	$( ".jumbotron" ).append("<p>You got " + questionAnsweredCorrectly + " " + correctInsertion + " correct.</p>");
// 	$( ".jumbotron" ).append("<p>You got " + questionAnsweredIncorrectly + " " + incorrectInsertion + " incorrect.</p>");
// 	$( ".jumbotron" ).append("<p>You left " + questionsUnanswered + " " + unansweredInsertion + " unanswered.</p>");

// 	$('#newGame').css("display", "block");
// }



// $('#playAgain').on('click', function(event) {
// 	startGame();
// });


loadPresetAnimals();