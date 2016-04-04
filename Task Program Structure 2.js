//Page Structurte - Task2
//div%3 -> "Fizz"
//div%5 -> "Buzz"
//both -> "FizzBuzz"

for (i = 1; i <= 100; i++){
	if ((i%3 === 0) && (i%5 === 0)){
		console.log("FizzBuzz");
	}
	else if (i%3 === 0) {
		console.log("Fizz");
	}
	else if (i%5 ===0) {
		console.log("Buzz");
	}
	else console.log(i);
}