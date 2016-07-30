$(document).ready(function(){
	var audio = new Audio("assets/themesong.mp3")
	var masterWordPickerArray = [
	{question:"What is The Hulk's color?", 
	answerA: "Blue",
	answerB: "Red",
	answerC: "Green",
	answerD: "Yellow",
	gif: "thehulk.gif",
	gif1: "thehulk2.gif",
	},
	{question:"Which is the name of Thor brother?", 
	answerA: "Captain Britain",
	answerB: "Vision",
	answerC: "Loki",
	answerD: "The Thing",
	gif: "loki.gif",
	gif1: "thehulk2.gif",
	},
	{question:"Which Avenger is the only non-Earthling?", 
	answerA: "Spiderman",
	answerB: "Iron man",
	answerC: "Thor",
	answerD: "Yellow",
	gif: "thor2.gif",
	gif1: "thehulk2.gif",
	},
	{question:"Which of these Avengers has not been scientifically enhanced?", 
	answerA: "Captain America",
	answerB: "Spiderman",
	answerC: "Thor",
	answerD: "The Hulk",
	gif: "thor.gif",
	gif1: "thehulk2.gif",
	},
	{question:"What is Thor's hammer called?", 
	answerA: "The Hammer of Justice",
	answerB: "Lightning",
	answerC: "Mojilnir",
	answerD: "Moneer",
	gif: "thorhammer.gif",
	gif1: "thehulk2.gif",
	},
	{question:"What is the name of the blue glowing square that Loki uses as a weapon?", 
	answerA: "The Infinity Gem",
	answerB: "The Soulstone",
	answerC: "The Tesseract",
	answerD: "The Forever Cube",
	gif: "loki2.gif",
	gif1: "thehulk2.gif",
	},
	{question:"When Iron Man is struck by Thor's lightning what happens?", 
	answerA: "Tony Stark's chest piece gives out and he goes into cardiac arrest",
	answerB: "His suit shuts down and he is trapped in his own armor",
	answerC: "It super charges his armor up to 400%",
	answerD: "It is deflected and strikes Captain America",
	gif: "ironmanthor.gif",
	gif1: "thehulk2.gif",
	},
	{question:"When the Avengers are in the streets of New York Captain America starts issuing orders. What are his orders to the Hulk?", 
	answerA: "Destroy the force field surrounding the machine that is keeping the hole open",
	answerB: "Throw a nuclear bomb into the rift in space",
	answerC: "Smash",
	answerD: "Turn back into Banner and help Tony reinitialize his armor",
	gif: "smach.gif",
	gif1: "thehulk2.gif",
	},
	// {question:"In one of the final scenes of the film, Pepper and Tony are standing on a section of Stark Tower that has been destroyed holding blueprints for something. As they are standing, the camera pans out so the audience can see more of Stark Tower and only one letter from STARK is left standing. Which letter is it?", 
	// answerA: "K",
	// answerB: "R",
	// answerC: "A",
	// answerD: "S",
	// gif: "starktower.gif",
	// gif1: "thehulk2.gif",
	// },
];

var answerAnswer = []
for (var i = 0; i < masterWordPickerArray.length; i++) {
	answerAnswer[i] = masterWordPickerArray[i].answerC
}
	function stepOne(){
	$("#answers").hide();
	// $("#scoreboard").hide();
	$("#gamebox").hide();
	$("#mute").hide();
	$("#gif").hide();
	correct = 0;
	incorrectanswer = 0;
	unanswered = 0;
	countQuestion= 0;
	}
	stepOne();

	$("#startbutton").click(function(){
		audio.play();
		$("#correctanswer").empty();
		$("#incorrectanswer").empty();
		$("#unanswered").empty();
		$("#startbutton").hide();
		$("#gamebox").show();
		$("#answers").show();
		$("#questions").show();
		$("#mute").show();
		$("#gif").show();

		randomQuestionPicker();
	});

	function gameOver(){
		console.log('game over man!');
		$("#correctanswer").html("correct: " + correct);
		$("#incorrectanswer").html("incorrect: " + incorrectanswer);
		$("#unanswered").html("unanswered: " + unanswered);
		$("#startbutton").html("PLAY AGAIN? ");
		$("#startbutton").show();
		$("#mute").html("Mute");
		stepOne();
		$("#mute").show();
	}


	var wordPickerArray = masterWordPickerArray
	function randomQuestionPicker(){
	$("#answers").show();	
	$('#gif').empty()
	var randomNumber = Math.floor(Math.random() * wordPickerArray.length);
	randomQuestion = wordPickerArray[randomNumber];
	seconds = 12;
	$("#answerround1").html(randomQuestion.answerB);
	$("#answerround2").html(randomQuestion.answerC);
	$("#answerround3").html(randomQuestion.answerD);
	$("#answerround4").html(randomQuestion.answerA);
	$("#timer").html("You have " + seconds + " seconds!");
	$("#questionround").html(randomQuestion.question);
	countDownTimer = setInterval(countDown, 1000);	
	}

	function countDown(){
		seconds--;
		$("#timer").html("You have " + seconds + " seconds left!");
		if (seconds < 1) {
			clearInterval(countDownTimer);
			countDownTimer = undefined;
			unanswered++;
			countQuestion++;
			$("#questionround").html("YOU DID NOT ANSWER THIS QUESTION!");
			$("#answers").hide();
			if (countQuestion >= masterWordPickerArray.length) {
				console.log("YOOOO");
				gameOver();
			}else{

			setTimeout(randomQuestionPicker, 3000);
			$("#gif").html("<img src='assets/images/" + randomQuestion.gif1 + "'>")

			}
		}
	}

	$("#mute").click(function(){
		if(audio.paused === true){
			audio.play();
			$("#mute").html("<img src='assets/images/play.png'>")
		}else{
			audio.pause();
			$("#mute").html("<img src='assets/images/mute.png'>")
		}
	});

	$(".click").click(function(){
		clearInterval(countDownTimer);
		countDownTimer = undefined;
		console.log("I clicked this")
		if ($(this).html() == randomQuestion.answerC) {
			$("#questionround").html("CORRECT ANSWER!")
			correct++;
			console.log("correct" + correct);
			$("#answers").hide();
			$("#gif").html("<img src='assets/images/" + randomQuestion.gif + "'>");

		}else{
			$("#questionround").html("WRONG ANSWER!")
			incorrectanswer++;
			console.log("incorrect" + incorrectanswer);
			$("#answers").hide();
			$("#gif").html("<img src='assets/images/" + randomQuestion.gif1 + "'>");
	
		};
		countQuestion++
		if (countQuestion >= masterWordPickerArray.length) {
				console.log("YOOOO");
				// $("#scoreboard").show();
				gameOver();
			}else{
			setTimeout(randomQuestionPicker, 3000);
		};
	});
});