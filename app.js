$(function() {
  console.log("Everyting is ready.  Let's go!");

  // omg so much easier with jQuery!!! :D
  // although that said, it does seem a TAD slower than with plain vanilla JS



  // variable to track turns
  var turnCounter = 0;
  // variable to track whether game is over
  var gameOver = false;

  // count the number of tds to determine the number of maximum turns
  var tds =$("table").children("tbody").children("tr").children("td").length;

  console.log(tds);

  // reset assignment
  $("#clear").on("click", reset);

  // reset function to clear board
  function reset () {
    $("td").text("").removeClass();
  }

  // test function to make sure we grabbed the right element
  function alertTest () {
    alert("you got me!");
  }

  // the tds will all need to call the main game or click function when clicked
  $("td").on("click", mainGame);

  // the function to check if there's a winner or it's a draw
  function checkEnd () {

    var one = $("#cell1").text();
    var two = $("#cell2").text();
    var three = $("#cell3").text();
    var four = $("#cell4").text();
    var five = $("#cell5").text();
    var six = $("#cell6").text();
    var seven = $("#cell7").text();
    var eight = $("#cell8").text();
    var nine = $("#cell9").text();

    // winning formula
    if ((one==="X" && one===two && two===three) || (one==="X" && one===four && four===seven) || (one==="X" && one===five && five===nine) || (four==="X" && four===five && five===six) || (two==="X" && two===five && five===eight) || (three==="X" && three===five && five===seven) || (three==="X" && three===six && six===nine) || (seven==="X" && seven===eight && eight===nine))
    {
      gameOver = true;
      alert("X wins! Congratulations!");
      location.reload();
    }

    else if ((one==="O" && one===two && two===three) || (one==="O" && one===four && four===seven) || (one==="O" && one===five && five===nine) || (four==="O" && four===five && five===six) || (two==="O" && two===five && five===eight) || (three==="O" && three===five && five===seven) || (three==="O" && three===six && six===nine) || (seven==="O" && seven===eight && eight===nine))
    {
      gameOver = true;
      alert("O wins! Congratulations!");
      location.reload();
    }

    // Used jQuery to count number of tds instead of just hard coding max turnCounter to be 9.
    else if (turnCounter===tds) {
      gameOver = true;
      alert("It looks like this is a draw. Better luck next time!");
      location.reload();
    }

  }

  // the main game function
  function mainGame () {

    if ($(this).text()==="X" || $(this).text()==="O") {
      alert("Sorry, this square is taken.  Please choose another one.");
    }

    else {

      if (turnCounter%2===0) {

        $(this).text("X").addClass("redCell");
        turnCounter++;
        console.log(turnCounter);
        checkEnd();

        if (!gameOver) {
          $("#status").text("It's O's turn");
        }
      }

      else {

        $(this).text("O").addClass("blueCell");
        turnCounter++;
        console.log(turnCounter);
        checkEnd();

        if (!gameOver) {
          $("#status").text("It's X's turn");
        }
      }
    }
  }

});

