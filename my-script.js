
var turnCounter = 1;

var one = document.getElementById("cell1").innerHTML;
var two = document.getElementById("cell2").innerHTML;
var three = document.getElementById("cell3").innerHTML;
var four = document.getElementById("cell4").innerHTML;
var five = document.getElementById("cell5").innerHTML;
var six = document.getElementById("cell6").innerHTML;
var seven = document.getElementById("cell7").innerHTML;
var eight = document.getElementById("cell8").innerHTML;
var nine = document.getElementById("cell9").innerHTML;

var reset = function () {
  for (var i=1; i<=9; i++) {
    document.getElementById("cell"+i).setAttribute("class", "blankCell");
    document.getElementById("cell"+i).innerHTML="";
  }
}

document.getElementById("clear").onclick = function() {reset()};

// this is the broken out checkWin function
var checkWin = function (a,b,c,player) {
  if ((a.innerHTML)===(b.innerHTML)===(c.innerHTML)===player) {
    alert (player + " wins!");
  }
}

// this is the declareWin function that checks the various win scenarios
// var declareWin = function() {

// if ((checkWin(cell1,cell2,cell3, "X") || checkWin(cell4,cell5,cell6, "X") || checkWin(cell7,cell8,cell9, "X") || checkWin(cell1,cell4,cell7, "X") || checkWin(cell2,cell5,cell8, "X") || checkWin(cell3,cell6,cell9, "X") ||checkWin(cell1,cell5,cell9, "X") || checkWin(cell3,cell5,cell7, "X")) || checkWin(cell1,cell2,cell3, "O") || checkWin(cell4,cell5,cell6, "O") || checkWin(cell7,cell8,cell9, "O") ||checkWin(cell1,cell4,cell7, "O") || checkWin(cell2,cell5,cell8, "O") || checkWin(cell3,cell6,cell9, "O") || checkWin(cell1,cell5,cell9, "O") || checkWin(cell3,cell5,cell7, "O")) {

//   return true;
//   // location.reload();
//   }

//   else {
//     return false;
//   }

// }

var checkEnd = function () {
  // this declares draw and resets - works
  if (turnCounter>9) {
    alert("Looks like you're out of moves or this is a draw.  Thanks for playing.  Please click the clear button.");

    location.reload();
  }

  else {

    if (one==two==three=="X") {

      alert("X wins!");
      location.reload();
    }

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

// function cellCheck () {
//   for (var i=0; i<=9; i++) {
//     console.log(("cell"+i).innerHTML);
//   }
// }

function changeClass(cell) {

    if (turnCounter%2===1) {

    document.getElementById("status").innerHTML="It's X's turn";
    document.getElementById(cell).setAttribute("class", "redCell");
    document.getElementById(cell).innerHTML="X";

    // utilities all seem to be working
    turnCounter++;
    console.log(turnCounter);
    checkEnd();

    // console.log(cell1.innerHTML);
    // console.log(cell2.innerHTML);
    // console.log(cell3.innerHTML);
    // console.log(cell4.innerHTML);
    // console.log(cell5.innerHTML);
    // console.log(cell6.innerHTML);
    // console.log(cell7.innerHTML);
    // console.log(cell8.innerHTML);
    // console.log(cell9.innerHTML);

    console.log(one);
    console.log(two);
    console.log(three);


  }

  else {
    document.getElementById("status").innerHTML="It's O's turn";
    document.getElementById(cell).setAttribute("class", "blueCell");
    document.getElementById(cell).innerHTML="O";

    // utilities all seem to be working
    turnCounter++;
    console.log(turnCounter);
    checkEnd();

    // console.log(cell1.innerHTML);
    // console.log(cell2.innerHTML);
    // console.log(cell3.innerHTML);
    // console.log(cell4.innerHTML);
    // console.log(cell5.innerHTML);
    // console.log(cell6.innerHTML);
    // console.log(cell7.innerHTML);
    // console.log(cell8.innerHTML);
    // console.log(cell9.innerHTML);

    console.log(one);
    console.log(two);
    console.log(three);

    }

}

