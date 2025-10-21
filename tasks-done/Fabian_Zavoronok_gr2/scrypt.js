
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
	// 1) Event handling: log and alert on button click
	const btnLog = document.getElementById('btn-log');
	if (btnLog) {
		btnLog.addEventListener('click', function () {
			console.log('Button Clicked!');
			alert('Button Clicked!');
		});
	}

	// 4) DOM manipulation: change div background to a random color
	const btnColor = document.getElementById('btn-color');
	const colorBox = document.getElementById('color-box');
	function randomColor() {
		// simple random hex color
		return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	}
	if (btnColor && colorBox) {
		btnColor.addEventListener('click', function () {
			const col = randomColor();
			colorBox.style.background = col;
			console.log('Changed color to', col);
		});
	}

	// 2) Loops and arrays: sum with for loop, map to double
	const numbers = [1, 2, 3, 4, 5];
    console.log('Numbers array:', numbers);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log('Sum (for loop):', sum); // expected 15

	const doubled = numbers.map(n => n * 2);
	console.log('Doubled (map):', doubled); // [2,4,6,8,10]

	// 3) Conditional statements: even or odd check
	function checkEvenOdd(n) {
		if (typeof n !== 'number' || !Number.isFinite(n)) {
			console.log(n, 'is not a valid number');
			return;
		}
		if (n % 2 === 0) {
			console.log(n, 'is even');
		} else {
			console.log(n, 'is odd');
		}
	}

	// Run example checks
	checkEvenOdd(7);
	checkEvenOdd(10);
    checkEvenOdd(15,5);
    checkEvenOdd(4.2);
    checkEvenOdd('test');

	// 5) Form submit: log username, email, password to console
	const signupForm = document.getElementById('signup-form');
	if (signupForm) {
		signupForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const username = document.getElementById('username')?.value;
			const email = document.getElementById('email')?.value;
			const password = document.getElementById('password')?.value;
			console.log('Form submitted. Values:');
			console.log('Username:', username);
			console.log('Email:', email);
			console.log('Password:', password);
			// clear sensitive field
			document.getElementById('password').value = '';
		});
	}

	// Helper: blur element after click so it doesn't remain focused/active
	function blurAfterClick(el) {
		if (!el) return;
		el.addEventListener('click', function () {
			// small timeout to allow any click handlers to run first
			setTimeout(() => {
				if (document.activeElement === el) el.blur();
			}, 0);
		});
	}

	// Attach blur helper to all buttons on the page
	const allButtons = document.querySelectorAll('button');
	allButtons.forEach(btn => blurAfterClick(btn));
});
