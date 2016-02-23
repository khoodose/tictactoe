var gridArray = [[0,0,0], [0,0,0], [0,0,0]];
var turnCounter = 0;
var endGame = false;

var reset = function () {
  for (var i=1; i<=9; i++) {
    document.getElementById("cell"+i).setAttribute("class", "blankCell");
    document.getElementById("cell"+i).innerHTML="";
  }
}

document.getElementById("clear").onclick = function() {reset()};


var checkEnd = function () {
  if ((gridArray[0][0]===gridArray[0][1]===gridArray[0][2]==="X") || (gridArray[1][0]===gridArray[1][1]===gridArray[1][2]==="X") || (gridArray[2][0]===gridArray[2][1]===gridArray[2][2]==="X") || (gridArray[0][0]===gridArray[1][0]===gridArray[2][0]==="X") || (gridArray[0][1]===gridArray[1][1]===gridArray[2][1]==="X") || (gridArray[0][2]===gridArray[1][2]===gridArray[2][2]==="X") || (gridArray[0][0]===gridArray[1][1]===gridArray[2][2]==="X") || (gridArray[2][0]===gridArray[1][1]===gridArray[0][2]==="X")) {

    alert("X wins!");
    endGame = true;
    return endGame;
  }

   else if ((gridArray[0][0]===gridArray[0][1]===gridArray[0][2]==="O") || (gridArray[1][0]===gridArray[1][1]===gridArray[1][2]==="O") || (gridArray[2][0]===gridArray[2][1]===gridArray[2][2]==="O") || (gridArray[0][0]===gridArray[1][0]===gridArray[2][0]==="O") || (gridArray[0][1]===gridArray[1][1]===gridArray[2][1]==="O") || (gridArray[0][2]===gridArray[1][2]===gridArray[2][2]==="O") || (gridArray[0][0]===gridArray[1][1]===gridArray[2][2]==="O") || (gridArray[2][0]===gridArray[1][1]===gridArray[0][2]==="0")) {

    alert("O wins!");
    endGame = true;
    return endGame;
  }

  else if (turnCounter===9) {
    alert("too bad it's a draw.");
    endGame = true;
    return endGame;
  }
  else {
    endGame = false;
    return endGame;
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


    if (cell=="cell1") {
        gridArray[0][0] = "X";
      }

      else if (cell=="cell2") {
        gridArray[0][1] = "X";
      }

      else if (cell=="cell3") {
        gridArray[0][2] = "X";
      }

      else if (cell=="cell4") {
        gridArray[1][0] = "X";
      }

      else if (cell=="cell5") {
        gridArray[1][1] = "X";
      }

      else if (cell=="cell6") {
        gridArray[1][2] = "X";
      }

      else if (cell=="cell7") {
        gridArray[2][0] = "X";
      }

      else if (cell=="cell8") {
        gridArray[2][1] = "X";
      }

      else if (cell=="cell9") {
        gridArray[2][2] = "X";
      }

    console.log(gridArray);

    turnCounter++;
    console.log(turnCounter);
    checkEnd();
  }

  else {
    document.getElementById("status").innerHTML="It's O's turn";
    document.getElementById(cell).setAttribute("class", "blueCell");
    document.getElementById(cell).innerHTML="O";

    if (cell=="cell1") {
        gridArray[0][0] = "O";
      }

      else if (cell=="cell2") {
        gridArray[0][1] = "O";
      }

      else if (cell=="cell3") {
        gridArray[0][2] = "O";
      }

      else if (cell=="cell4") {
        gridArray[1][0] = "O";
      }

      else if (cell=="cell5") {
        gridArray[1][1] = "O";
      }

      else if (cell=="cell6") {
        gridArray[1][2] = "O";
      }

      else if (cell=="cell7") {
        gridArray[2][0] = "O";
      }

      else if (cell=="cell8") {
        gridArray[2][1] = "O";
      }

      else if (cell=="cell9") {
        gridArray[2][2] = "O";
      }

    console.log(gridArray);

    turnCounter++;
    console.log(turnCounter);
    checkEnd();

    }
  }

}

// window.addEventListener('load', play, false);