//Page Structurte - Task3
//Default size:
var w = 8;
var h = 8;

//Prompting size:
q = prompt("Would you like to build the chessboard with default size(8*8)?(yes/no)", "yes");

//Setting custom's size:
if (q == "no") {
    w = prompt("Enter weight:", 8);
    h = prompt("Enter high:", 8);
}

//Chessboard building:
var c = "";
for (j = 1; j <= h; j++) {
    c = "";
    for (i = 1; i <= w; i++) {
        if (j % 2 !== 0) {
            if (i % 2 === 0) {
                c += "#";
            }
            else { c += " "; }
        }
        else {
            if (i % 2 === 0) {
                c += " ";
            }
            else c += "#";
        }
    }
    console.log(c);
}
