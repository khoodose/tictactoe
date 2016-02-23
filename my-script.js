
var turnCounter = 1;


// the clear board function.  working.
var reset = function () {
  for (var i=1; i<=9; i++) {
    document.getElementById("cell"+i).setAttribute("class", "blankCell");
    document.getElementById("cell"+i).innerHTML="";
  }
}

document.getElementById("clear").onclick = function() {reset()};

// the main function to check if game is over (draw or one player wins)
var checkEnd = function () {

  // declare local variables so as to access properties live
  var one = document.getElementById("cell1").textContent;
  var two = document.getElementById("cell2").textContent;
  var three = document.getElementById("cell3").textContent;
  var four = document.getElementById("cell4").textContent;
  var five = document.getElementById("cell5").textContent;
  var six = document.getElementById("cell6").textContent;
  var seven = document.getElementById("cell7").textContent;
  var eight = document.getElementById("cell8").textContent;
  var nine = document.getElementById("cell9").textContent;


  if (turnCounter>9) {
    alert("Looks like you're out of moves or this is a draw.  Thanks for playing.");

    location.reload();
  }

  else {

    if ((one=="X" && one==two && two==three) || (one=="X" && one==four && four==seven) || (one=="X" && one==five && five==nine) || (four=="X" && four==five && five==six) || (two=="X" && two==five && five==eight) || (three=="X" && three==five && five==seven) || (seven=="X" && seven==eight && eight==nine) || (three=="X" && three==six && six==nine)) {

      alert("X wins!");
      location.reload();
    }

    else if ((one=="O" && one==two && two==three) || (one=="O" && one==four && four==seven) || (one=="O" && one==five && five==nine) || (four=="O" && four==five && five==six) || (two=="O" && two==five && five==eight) || (three=="O" && three==five && five==seven) || (seven=="O" && seven==eight && eight==nine) || (three=="O" && three==six && six==nine)) {

      alert("O wins!");
      location.reload();
    }

  }

}


// adds onclick changeClass to each cell.  not the most elegant but working.
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

    if (document.getElementById(cell).textContent=="X" || document.getElementById(cell).textContent=="O") {
      alert ("That cell is taken. Please try another one.");
    }

    else {

    if (turnCounter%2===1) {

    document.getElementById("status").textContent="It's X's turn";
    document.getElementById(cell).setAttribute("class", "redCell");
    document.getElementById(cell).textContent="X";

    // utilities all seem to be working
    checkEnd();
    turnCounter++;
    console.log(turnCounter);
    checkEnd();


    }

    else {

    document.getElementById("status").textContent="It's O's turn";
    document.getElementById(cell).setAttribute("class", "blueCell");
    document.getElementById(cell).textContent="O";

    // utilities all seem to be working
    checkEnd();
    turnCounter++;
    console.log(turnCounter);
    checkEnd();

    }
  }
}

