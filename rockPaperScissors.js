/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
When recurse runs for the first time, we can treat line 30 as a "master for loop." This loop determines how many branches we'll make initially in our decision tree.
Rounds is what determines how many levels we go down through recursion.
*/

// With helper function
var rockPaperScissors = function(num) {
  var rounds = num || 3;
  var combinations = [];
  var choices = ['rock', 'paper', 'scissors'];
  var game = [];

  var recurse = function(rounds) {
    if (rounds === 0) {
      combinations.push(game.slice());
      return;
    }
    for (var i=0; i<choices.length; i++) {
      var choice = choices[i];
      game.push(choice);
      recurse(rounds - 1);
      game.pop(); // takes off the last choice after the empty 'return' statement brings control back here
    }
  }
  recurse(rounds);
  return combinations;
}