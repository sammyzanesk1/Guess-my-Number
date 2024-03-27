'use strict';
/*
/////////////////////////////////////////////////////
////////////DOCUMENT OBJECT MANIPULATION/////////////
/////////////////////////////////////////////////////

//chaning the text in the html file using js(DOCUMENT OBJECT MANIPULATION...DOM)
//selecting an element in the html file in the javascript using its class name (.classname)...if it is an element id use (#idname)...if we want to select the body we do not use any dot or hashtag...the .textContent is to select the paragraph text...multiple dot operators are executed from left to right remember...in using the DOM WE MUST IMPLEMENT THE MANIPULATION USING THE EQUAL TO SIGN.

console.log(document.querySelector('.message').textContent); //we return the start guessing text to the BC...
//document.querySelector('.message').textContent = 'Correct Number!'; //we target the paragraph and change its text..
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
//console.log(document.querySelector('.message').textContent); //we return the changed text in the BC.

//document.querySelector('').value; //if we leave the bracket empty an error will occur bcos we did not target an element using its class

console.log(document.querySelector('.guess').value); //the BC returns empty as the input field is empty...
document.querySelector('.guess').value = 23; //for an input field we use .value to manipulate its content
console.log(document.querySelector('.guess').value); //the BC returns 23 after we manipulated the input using js.
*/
//////////////////////////////////
/////////////////////////////////

//////////////////////////////////////////////
///////HANDLING CLICK EVENTS/////////////////
//////////////////////////////////////////////

//handling click events...our code reacts to happenings in the DOM....an event is something that happens in the DOM...an event listener waits for sumtin to happen to a page and react.....u need to target where u want the event to happen and code what u want as reaction...

//...select where u want the event to happen in the DOM...u add the event listener using the addeventlistener method..note that this method is a special method/function as it does two tins, 1. it adds the event listener and it accepts/receives what should be done/the reaction in the DOM when the even happens...we set what should be the reaction inside the addeventlistener method by passing a value or a function inside it...a function is a value...so in the code below we simplt target the check element added an event which is a click then we set the reaction that when the check is clicked the value in the input should be console logged/returned in the Browser Console (it accepted the console log function in it)...we selected the check button, then we set event and the reaction needed. the reaction is also called an event handler in this scenario it is a function expression but we did not assign it to a variable rather we assigned/passed it directly into the eventhandler i.e addeventlistener...we do not call the function!...the javascript will call this function by itself as soon as the event happens, it will not be called when js runs the code, only when the event happens..NOTE THAT! ...also any other function/command added inside the function of the handler we be executed when the event happens...for isntance changing the message fro start guessing to correct number when the check button is clicked...
//now lets start building up the game...i.e setting up the game code...we want to save the returned guess value to a variable so we can reuse the variable...the guess value inputted by the gamer is a string so we have to convert that guess value from string type to number time in order to let us compared the gues value to the secret number...
//implementing the game logic...first scenario, if there is no guess value inputted and the check button is clicked....when this happens in the console browser, a number type with value of 0 will be returned. we want the message content to be ' ❌ No number' when the input is empty and the check button is clicked. so we use the if statement...the if statemnt is a true boolean, but we need to note that the number returned when the input is empty is 0 and 0 is a falsy boolean so we convert that false value to a true value using the is not command...basically we are saying when the input is empty, the result is false but we convert that value by saying it is not false that is it is a true value..i.e when guess is empty, guess=0, 0 is false, !guess means that 0 is not false i.e true..we used the negation operator which inverts one boolean type tothe opposite boolean type...we used the NOT OPERATOR TO CONVERT THE FASLE TO NOT FALSE/TRUE...

//creating a random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1; //creates a secret random number ranging from 1 to 20, the number variable stores it

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let highscore = 0; //set initial highscore which will change each time the ganme is won...
//document.querySelector('.number').textContent = '?'; //display the secret number...the content to be dispalyed is the value of the number variable...as we refresh the page the random number changes

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value); //return guess value when check btn is cliked
  //document.querySelector('.message').textContent = 'Correct Number!';
  const guess = Number(document.querySelector('.guess').value); //converts the guess from string to number
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No Number!';
    displayMessage('❌ No Number!'); //calling the display message function with an arguement...
    // when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '✅Correct Number';
    displayMessage('✅Correct Number');
    // document.querySelector('.number').textContent = secretNumber; //the secret number is displayed...

    document.querySelector('body').style.backgroundColor = '#60b347'; //we use js to change the background color when the player wins.
    document.querySelector('.number').style.width = '30rem';

    //setting the highscore functionality...
    if (score > highscore) {
      highscore = score; //reset highscore where score is greater and u guess right...
      document.querySelector('.highscore').textContent = highscore; //display the set highscore
    }

    //refactoring the guess>secretnumber and guess<secretnumber to one block of code..
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber
      // ? '📈too high, try again!'
      // : '📉too low, try again!';
      displayMessage(
        guess > secretNumber
          ? '📈too high, try again!'
          : '📉too low, try again!'
      );

      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '😭you lost the game!';
      displayMessage('😭you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  //when guess is too high
} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈too high, try again!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭you lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉too low, try again!';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
}
*/
});
//when the again button is clicked, implement the codes inside
document.querySelector('.again').addEventListener('click', function () {
  score = 20; //reset score to 20...
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reset secret number randomly

  //document.querySelector('.message').textContent = 'start guessing...'; //reset game message
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score; //display the reset score
  document.querySelector('.number').textContent = '?'; //hide the display of the secret number..
  document.querySelector('.guess').value = ''; //reset input value to empty string/nothng

  document.querySelector('body').style.backgroundColor = '#222'; //reset background color
  document.querySelector('.number').style.width = '15rem'; //reset secret number width...
});

///////////////////////////////////////////
////////IMPLEMENTING THE GAME LOGIC///////
///////////////////////////////////////////
//the game logic consist of when the hidden/secret number is inputed, when a number higher than the secret number is inputted and when a number lower than the secret number is inputted....so basically we compare the guess to the secret number....first we have to define the secret number...we need to decide if e are to define the secret number outside of the event listener or inside of it. we defined it outside of it...the scret number will be an unchanged number that will be compared to each guess value...we defined the secrete number bfor the listener function...we used a random number as the secret number then we saved the number to a secret number variable...then we used dom to change the ? content to the secret number...then we set all the possible game logic using the if else statememnt...then we focus on making the score count decrease each time we make a wrong guess...we did this by first declaring a score variable, we set the initial value to 20, then we decrease the score by 1 each time where guess>secretNumber or guess<secretNumber...i.e the new score value becomes 19 if a wrong guess is made once, then another wrong guess makes the score decrease by 1 nd the new score becomes 18 and so forth till the right guess is made...the score will decrease to negative values till infinity if a wrong guess continues to be made, so we need to implement the game over logic...i.e the score counter should stop when it gets to 0, and a game over message displayed by the game...so we set the condition inside of the if else statements where the score counter exist to set the logic of when the game should end....so the score count reduces till it gets to 0 then the game ends....

///////////////////////////////////////////
////////MANIPULATING CSS USING JS///////
///////////////////////////////////////////

//In the game, we want the background color to change to green when the player guesses the right number and we want the secret number box to be wider...we can use DOM to manipulate CSS....so we set the code toimplement this nedded css changes inside the if statement where guess===secretNumber...the background color change aplies to the whole page, so we needed to target the whole body of the page using js then implement the code...css styles implemented using js in the html will be inline style...the style will be applied directly to the html..
