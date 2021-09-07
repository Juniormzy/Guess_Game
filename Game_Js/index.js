var info1 = document.getElementById("info1");
	var info2 = document.getElementById("info2");
	var info3 = document.getElementById("info3");
	var answer = Math.floor(Math.random() *100) +1;
	var numberOfGuess = 8;
	var guessedNumber = [];
	var atempt = 0;

	function buttonclick(){
		let user_guess = document.getElementById("user_Guess").value;
		user_guess.value = ""
		if (user_guess < 1 || user_guess > 100 ) {
			alert("Enter a Number between 1 - 100 ");
		}
		else{
			guessedNumber.push(user_guess);
			numberOfGuess -= 1;
			atempt  +=1 ;
			
			if (user_guess < answer) {
				info1.innerHTML = "Your guess is too low";
				info2.innerHTML = "Number of Gues left: " + numberOfGuess;
				info3.innerHTML = "Guessed Numbers are: " + guessedNumber;
			}
			else if (user_guess > answer) {
				info1.innerHTML = "Your guess is too high";
				info2.innerHTML =  "Number of Gues left: " + numberOfGuess;
				info3.innerHTML =  "Guessed Numbers are: " + guessedNumber;
			}
			else if ( user_guess == answer){
				info1.innerHTML = "HOORAY YOU WIN";
				info2.innerHTML = "The answer is " + answer;
				info3.innerHTML =  "You won at your " + atempt + "th Attempt";
			}
			if (numberOfGuess <= 0) {
				info1.innerHTML = "YOU LOST";
				info2.innerHTML = "The answer is " + answer;
				info3.innerHTML = null
				document.getElementById("replay").style.display = "block"
				

			}
		}
	}