let num1 = 1;
let num2 = 2;
let num3 = 3;

let homeScore = 0
let guestScore = 0

let homeDisplay = document.getElementById("home-score");
let guestDisplay = document.getElementById("guest-score");
let resultDisplay = document.getElementById('result-display')

function handleClick(team, points) {
	if (team === "home") {
		points === 1
			? (homeScore += num1)
			: points === 2
			? (homeScore += num2)
			: points === 3
			? (homeScore += num3)
			: (homeScore = 0);

		return (homeDisplay.textContent = homeScore);
	}

	if (team === "guest") {
		points === 1
			? (guestScore += num1)
			: points === 2
			? (guestScore += num2)
			: points === 3
			? (guestScore += num3)
			: (guestScore = 0);

		return (guestDisplay.textContent = guestScore);
	}
}

// let time = 10; //20 seconds
// let timerDisplay = document.getElementById("timer-display"); //calling the div where the score would be displayed

//writing the setInterval function
// const timer = setInterval(() => {
// 	if (time > 0) {
// 		timerDisplay.textContent = time + " seconds left";
// 		time--;
// 	} else {
// 		timerDisplay.textContent = "time up !";
// 		clearInterval(timer); //stop the timer
// 	}
// }, 1000); // executes every 1000ms (1 second)

//Set Timeout
// setTimeout(() => {
// 	console.log("This runs after 5 seconds!!");
// }, 5000); //executes after 5000ms(5 seconds)

//Combining stop and start button
// let timered;
// let elapsedTime = 0

// const displayTimer = document.getElementById('display-timer')
// const startBtn = document.getElementById('start-btn')
// const stopBtn = document.getElementById('stop-btn')

// startBtn.addEventListener('click', () =>{
// 	timered = setInterval(() =>{
// 		elapsedTime++
// 		displayTimer.textContent = elapsedTime + ' seconds'
// 	}, 1000) //start timer
// })
// stopBtn.addEventListener('click', () =>{
// 	clearInterval(timered) //stops the timer
// })

//Combining the start and stop button
// let timed;
// let elapsedTime = 0;

// const displayTimer = document.getElementById("display-timer");
// const startBtn = document.getElementById("start-btn");
// const stopBtn = document.getElementById("stop-btn");

// startBtn.addEventListener("click", () => {
// 	timed = setInterval(() => {
// 		elapsedTime++;
// 		displayTimer.textContent = elapsedTime + "seconds";
// 	}, 1000);
// });

// stopBtn.addEventListener("click", () => {
// 	clearInterval(timed);
// });

//Count Up Example
// let seconds = 0

// const countUp = setInterval(() =>{
// 	seconds++;
// 	console.log(`Elapsed time: ${seconds} seconds`)
// 	if(seconds === 10){
// 		clearInterval(countUp)
// 	}
// }, 1000)

//Count Down Example
// let countdown = 10

// const countDown = setInterval(() =>{
// 	console.log(`${countdown} seconds remaining`)
// 	countdown--
// 	if(countdown < 0){
// 		clearInterval(countDown)
// 		console.log(`Time's up!!`)
// 	}
// }, 1000)

//Pause and Resume Timer

//Count Up
let initialTime = 10;
let timeElapsed = initialTime;
let timer;
let isRunning = false;
let displayTimer = document.getElementById("display-timer");
let startBtn = document.getElementById("start-btn");
let pauseBtn = document.getElementById("pause-btn");
let resetBtn = document.getElementById("reset-btn");

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60); // minutes calculation
	const remainingSeconds = seconds % 60; //calculating seconds
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function determineWinner(){
	if(homeScore > guestScore){
		displayTimer.textContent = 'Team A wins!'
	} else if(guestScore > homeScore){
		displayTimer.textContent = 'Team B wins !'
	} else {
		displayTimer.textContent = 'You have a tie !'
	}
}

startBtn.addEventListener("click", () => {
	timeElapsed = initialTime;
	displayTimer.textContent = formatTime(timeElapsed);
	timer = setInterval(() => {
		if (timeElapsed > 0) {
			timeElapsed--;
			displayTimer.textContent = formatTime(timeElapsed);
		} else {
			clearInterval(timer);
			isRunning = false;
			determineWinner()

			homeScore = 0
			guestScore = 0
			homeDisplay.textContent = homeScore;
			guestDisplay.textContent = guestScore;
		}
	}, 1000);
	isRunning = true;
});

pauseBtn.addEventListener("click", () => {
	if (isRunning) {
		clearInterval(timer);
		isRunning = false;
	} else {
		timer = setInterval(() => {
			if (timeElapsed > 0) {
				timeElapsed--;
				displayTimer.textContent = formatTime(timeElapsed);
			} else {
				clearInterval(timer);
				isRunning = false;
			}
		}, 1000);
		isRunning = true;
	}
});

resetBtn.addEventListener("click", () => {
	clearInterval(timer);
	timeElapsed = 0;
	displayTimer.textContent = "5:00";
	isRunning = false;
});
