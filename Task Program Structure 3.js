//Page Structurte - Task3
//Chessboard building:
var c = "";
var size = prompt("Please enter size of the board:");
for (j=1; j <=size; j ++){
	c = "";
    for (i = 1; i <= size; i++){
		if (j%2 !==0) {
			if (i%2 === 0) {
			c += "#";
			}
			else {c += " ";}
		}
		else { 
			if (i%2 === 0) {
			c += " ";
			}
			else c += "#";
			}	
		}
		console.log(c);
}
