function roll(dice, diff) {
	var allResults = [];
	var successes = [];
	var failures = [];
	// Random Number Generator Block
	for(let count = 0; count < dice; count++) {
		let random = Math.floor(Math.random() * 10) + 1;
		allResults.push(random)
		if (random > diff - 1) {
			successes.push(random);
			} else {
			failures.push(random);
			}
	allResults.sort((a, b) => a - b);
	successes.sort((a, b) => a - b);
	failures.sort((a, b) => a - b);		
	}
	// Logs the sorted results of the Random Number Generator Block
	console.log('Combined Results:  ' + allResults.sort((a, b) => a - b));
	console.log('Failed Rolls:  ' + failures.sort((a, b) => a - b));
	console.log('Successful Rolls:  ' + successes.sort((a, b) => a - b));
	// Eval allResults for 1's, then cancel each 1 w/ the highest success, repeat until zero 1's remain
	function critLoop() {
		successes.reverse();
		while (failures[0] === 1 && successes.length > 0) {
			console.log('Cancelling out roll ' + successes[0] + ' and roll ' + failures[0]);
			failures.shift();
			successes.shift();
		}
	}
	critLoop();
	successes.reverse();
	console.log('Final Results: ' + successes);
	// Logs the result of the action being taken
	if (successes.length === 0) {
		console.log('ACTION RESULT: ' + successes.length + ' successes.' + ' << FAILURE >>')
		} else if (successes.length === 1) {
		console.log('ACTION RESULT: ' + successes.length + ' successes.' + ' << SUCCESS >>')
		} else if (successes.length === 2) {
		console.log('ACTION RESULT: ' + successes.length + ' successes.' + ' << STRONG SUCCESS >>')
		} else if (successes.length > 2) {
		console.log('ACTION RESULT: ' + successes.length + ' successes.' + ' << AMAZING SUCCESS >>')
		} else if (successes.length > 4) {
		console.log('ACTION RESULT: ' + successes.length + ' successes.' + ' << OVERWHELMING SUCCESS >>')
		}
}
	
roll(20, 9);