
function storeNames() {
  // store name from inputs in variables
  let firstName = document.getElementById("first-name").value;
  let secondName = document.getElementById("second-name").value;

  // check if inputs are filled and if not throw an alert 
  let err = document.getElementById("err");
  if ( firstName != '' && secondName != '') 
  {
  localStorage.setItem("first", firstName);
  localStorage.setItem("second", secondName);
  window.location.href = "/game.html";
  }else err.classList.remove('d-none')
 
}

function setPlayersName() {
  let firstPlayer = document.getElementById("first-player");
  let secondPlayer = document.getElementById("second-player");
  // get players name from local storage and display them in the game page
  firstPlayer.innerHTML = localStorage.getItem('first');
  secondPlayer.innerHTML = localStorage.getItem('second');
}
// function to start a new game with the currunt players
function start() {
  window.onload();
}


let turn = 'x';
const game = document.getElementById("selectedBox");
game.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.innerHTML == '') 
    {
      let currentChoise = turn;
      // check what is the next symbole x or o
      switch (e.target.innerHTML=== '' ) {
        case currentChoise == 'x':
          e.target.innerHTML = 'X';
          turn = 'O';
          break;
        case currentChoise == 'O':
          e.target.innerHTML = 'O';
          turn = 'x';
          break;
      }
    }
  }
  // store all btn value in variables
  let btn1 = document.getElementById('btn1').innerText;
  let btn2 = document.getElementById('btn2').innerText;
  let btn3 = document.getElementById('btn3').innerText;
  let btn4 = document.getElementById('btn4').innerText;
  let btn5 = document.getElementById('btn5').innerText;
  let btn6 = document.getElementById('btn6').innerText;
  let btn7 = document.getElementById('btn7').innerText;
  let btn8 = document.getElementById('btn8').innerText;
  let btn9 = document.getElementById('btn9').innerText;

  // check if all btn are filled so display that no one has win 
  if (! [btn1, btn2, btn3,btn4,btn5,btn6,btn7,btn8,btn9].includes('')  ) {
    document.querySelector('.alert-notif').style.visibility = 'hidden';
    document.getElementById('alert-red').style.visibility = 'visible';
    document.getElementById("body-game").classList.add("game-body");
    document.getElementById('bg-sound').pause();
    document.getElementById('lose-sound').play();
  }
  // check if there is any case from the 8 possible cases that lead to win 
  if (btn1 === btn2 && btn1 === btn3 && btn1 != '' && btn2 != '' && btn3 != '' || btn4 === btn5 && btn4 === btn6 && btn4 != '' && btn5 != '' && btn6 != '' || btn7 === btn8 && btn7 === btn9 && btn7 != '' && btn8 != '' && btn9 != '' || btn1 === btn5 && btn1 === btn9 && btn1 != '' && btn5 != '' && btn9 != '' || btn3 === btn5 && btn3 === btn7 && btn3 != '' && btn5 != '' && btn7 != '' || btn1 === btn4 && btn1 === btn7 && btn1 != '' && btn4 != '' && btn7 != '' || btn2 === btn5 && btn2 === btn8 && btn2 != '' && btn5 != '' && btn8 != '' || btn3 === btn6 && btn3 === btn9 && btn3 != '' && btn6 != '' && btn9 != '') {
    // enable popup to announce the winner
    let visible = document.querySelector('.alert-notif').style.visibility = 'visible';
    // enable a class in css that blur the background 
    let blur = document.getElementById("body-game").classList.add("game-body");
    // function disable all empty btn if someone wins 
    let disable_btn = function()
    {
      for (let i = 1; i < 10; i++) 
      {
        document.getElementById("btn"+i).disabled = true;
      }
    }
    let winner_sound = document.getElementById('winner-sound');
    let onWinning =  visible; blur; disable_btn() ;soundOff(), winner_sound.play();
    let letter;
    // function to check wich player has won by checking wich symbole wins , by default first player play as 'X' and second player play as 'O'
    function winner(letter)
    {
      let firstPlayer = document.getElementById("first-player");
      let secondPlayer = document.getElementById("second-player");
      let winnerIs = document.getElementById('winnerIs');


      if (letter === 'O') 
      {
          winnerIs.innerHTML = secondPlayer.innerHTML;
      }else if (letter === 'X') 
      {
          winnerIs.innerHTML = firstPlayer.innerHTML;
      }
    }

        if (btn1 === btn2 && btn1 === btn3) { onWinning ,winner(btn1)}
   else if (btn7 === btn8 && btn7 === btn9) { onWinning ,winner(btn7)}
   else if (btn1 === btn5 && btn1 === btn9) { onWinning ,winner(btn5)}
   else if (btn4 === btn5 && btn4 === btn6) { onWinning ,winner(btn4)}
   else if (btn3 === btn5 && btn3 === btn7) { onWinning ,winner(btn3)}
   else if (btn1 === btn4 && btn1 === btn7) { onWinning ,winner(btn1)}
   else if (btn2 === btn5 && btn2 === btn8) { onWinning ,winner(btn2)}
   else if (btn3 === btn6 && btn3 === btn9) { onWinning ,winner(btn3)}
// this statement is to baypass the above statment that display there's no winner , and that if someone won in the last left empty btn
   if (! [btn1, btn2, btn3,btn4,btn5,btn6,btn7,btn8,btn9].includes('')  ) {
    document.querySelector('.alert-notif').style.visibility = 'visible';
    document.getElementById('alert-red').style.visibility = 'hidden';
    document.getElementById("body-game").classList.add("game-body");

    
  }
  
    

    


} 


});



function soundOn()
{
   document.getElementById('bg-sound').play();
}
soundOn();

function soundOff()
{
  document.getElementById('bg-sound').pause();

}









