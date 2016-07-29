$(document).ready(function(){
	var audio = new Audio("assets/themesong.mp3")
	var masterWordPickerArray = [
	{question:"What is the Hulk's color?", 
	answerA: "Blue",
	answerB: "Red",
	answerC: "Green",
	answerD: "Yellow",
	// gif:
	},
	{question:"What is the Walid's color?", 
	answerA: "Blue",
	answerB: "Red",
	answerC: "Green",
	answerD: "Yellow",
	},
	{question:"What is the Kevin's color?", 
	answerA: "Blue",
	answerB: "Red",
	answerC: "Green",
	answerD: "Yellow",
	},
	{question:"What is the Dan's color?", 
	answerA: "Blue",
	answerB: "Red",
	answerC: "Green",
	answerD: "Yellow",
	},
];
	function stepOne(){
	$("#answers").hide();
	$("#scoreboard").hide();
	$("#gamebox").hide();
	correct =0;
	incorrect =0;
	unanswered =0;
	countQuestion=0;
	}
	stepOne();

	

	function gameOver(){
		$("#startbutton").show();
		stepOne();
	}


	$("#startbutton").click(function(){
		audio.play();
		$("#startbutton").hide();
		$("#gamebox").show();
		$("#answers").show();
		$("#questions").show();

		randomQuestionPicker();

	});

	var wordPickerArray = masterWordPickerArray

	function randomQuestionPicker(){

	var randomNumber = Math.floor(Math.random() * wordPickerArray.length);
	randomQuestion = wordPickerArray[randomNumber];
	seconds = 4;
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
			unanswered++;
			countQuestion++;
			$("#questionround").html("YOU DID NOT ANSWER THIS QUESTION!");

			if (countQuestion >= masterWordPickerArray.length) {
				console.log("YOOOO");
				gameOver();
			}else{

			setTimeout(randomQuestionPicker, 2000);
			// gif
			}
		}
	}


	$(".click").click(function(){

		clearInterval(countDownTimer);
		if ($(this).html() == randomQuestion.answerC) {
			$("#questionround").html("CORRECT ANSWER!")
			correct++;
			console.log("correct" + correct);

		}else{
			$("#questionround").html("WRONG ANSWER!")
			incorrect++;
			console.log("incorrect" + incorrect);
		};
		countQuestion++
		if (countQuestion >= masterWordPickerArray.length) {
				console.log("YOOOO");
				gameOver();
			}else{
			setTimeout(randomQuestionPicker, 2000);
		}
		

	});
	















});