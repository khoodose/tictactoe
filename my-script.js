
var turnCounter = 0;

var reset = function () {
  for (var i=1; i<=9; i++) {
    document.getElementById("cell"+i).setAttribute("class", "blankCell");
    document.getElementById("cell"+i).innerHTML="";
  }
}

document.getElementById("clear").onclick = function() {reset()};

if (turnCounter>9) {
  alert("Looks like you're out of moves or this is a draw.  Thanks for playing.  Please click the clear button.");
}

else {
  // most code goes here
}

var checkWin = function (a,b,c,player) {
  if ((a.innerHTML)===(b.innerHTML)===(c.innerHTML)===player) {
    alert (player + " wins!");
  }
}


var declareWin = function() {

if ((checkWin(cell1,cell2,cell3, "X") || checkWin(cell4,cell5,cell6, "X") || checkWin(cell7,cell8,cell9, "X") || checkWin(cell1,cell4,cell7, "X") || checkWin(cell2,cell5,cell8, "X") || checkWin(cell3,cell6,cell9, "X") ||checkWin(cell1,cell5,cell9, "X") || checkWin(cell3,cell5,cell7, "X")) || checkWin(cell1,cell2,cell3, "O") || checkWin(cell4,cell5,cell6, "O") || checkWin(cell7,cell8,cell9, "O") ||checkWin(cell1,cell4,cell7, "O") || checkWin(cell2,cell5,cell8, "O") || checkWin(cell3,cell6,cell9, "O") || checkWin(cell1,cell5,cell9, "O") || checkWin(cell3,cell5,cell7, "O")) {

  return true;
  // location.reload();
  }

}

for (var i = 1; i <= 9; i++) {
  var cell = "cell"+ i
  console.log(i)
  var selectedcell = document.getElementById(cell);
  (function(){
    var cellCopy = cell;
    selectedcell.onclick = function(){
      changeClass(cellCopy)
    }
  }());
}


function changeClass(cell) {

  if ((cell.innerHTML==="X")||(cell.innerHTML==="O")) {
    alert ("That cell is taken. Please choose another");
  }

  else {

    if (turnCounter%2===0) {

    document.getElementById("status").innerHTML="It's X's turn";
    document.getElementById(cell).setAttribute("class", "redCell");
    document.getElementById(cell).innerHTML="X";

    console.log(gridArray);

    turnCounter++;
    console.log(turnCounter);
    checkEnd();
  }

  else {
    document.getElementById("status").innerHTML="It's O's turn";
    document.getElementById(cell).setAttribute("class", "blueCell");
    document.getElementById(cell).innerHTML="O";

    console.log(gridArray);

    turnCounter++;
    console.log(turnCounter);
    checkEnd();

    }
  }

}

// window.addEventListener('load', play, false);