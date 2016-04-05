function countBs(str){
	return countChar(str,"B");
}

function countChar(str,c){
	var k = 0;
	for(i=0; i<= str.length; i++){
		if (str.charAt(i) == c) k +=1;
	}
	return k;
}

console.log(countBs("BBC")); // → 2 
console.log(countChar("kakkerlak", "k")); // → 4